use crate::models::spec::spec::APISpec;
use std::env;
use std::io::Write;
use std::path::{Path, PathBuf};
use tokio::io::AsyncWriteExt;

use super::DEFAULT_SPEC_PATH;

pub async fn create_spec(
    path: Option<impl Into<String>>,
) -> Result<(), Box<dyn std::error::Error>> {
    let file_path: PathBuf = match path {
        Some(p) => Path::new(&p.into()).to_path_buf(),
        None => env::current_dir()?.join(DEFAULT_SPEC_PATH),
    };

    let spec: APISpec = APISpec::default();
    let json: String = serde_json::to_string_pretty(&spec)?;
    let mut file: tokio::fs::File = tokio::fs::File::create(file_path).await?;
    file.write_all(json.as_bytes()).await?;
    Ok(())
}

pub fn create_spec_sync(path: Option<impl Into<String>>) -> Result<(), Box<dyn std::error::Error>> {
    let file_path: PathBuf = match path {
        Some(p) => Path::new(&p.into()).to_path_buf(),
        None => env::current_dir()?.join(DEFAULT_SPEC_PATH),
    };

    let spec: APISpec = APISpec::default();
    let json: String = serde_json::to_string_pretty(&spec)?;
    let mut file: std::fs::File = std::fs::File::create(file_path)?;
    file.write_all(json.as_bytes())?;
    Ok(())
}
