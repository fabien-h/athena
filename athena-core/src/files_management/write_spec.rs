use super::create_spec::create_spec;
use super::DEFAULT_SPEC_PATH;
use crate::models::spec::spec::APISpec;
use std::env;
use std::path::{Path, PathBuf};
use tokio::fs::File;
use tokio::io::AsyncWriteExt;

pub async fn write_spec(
    path: Option<&str>,
    spec: &APISpec,
) -> Result<(), Box<dyn std::error::Error>> {
    let file_path: PathBuf = match path {
        Some(p) => Path::new(p).to_path_buf(),
        None => env::current_dir()?.join(DEFAULT_SPEC_PATH),
    };

    if !file_path.exists() {
        return create_spec(Some(&file_path.to_str().unwrap())).await;
    }

    let json: String = serde_json::to_string_pretty(spec)?;
    let mut file: File = File::create(file_path).await?;
    file.write_all(json.as_bytes()).await?;

    Ok(())
}
