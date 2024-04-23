use crate::models::spec::spec::APISpec;
use std::path::Path;
use tokio::fs::File;
use tokio::io::AsyncWriteExt;

use super::create_spec;

pub async fn write_spec(path: &str, spec: &APISpec) -> Result<(), Box<dyn std::error::Error>> {
    let file_path: &Path = Path::new(path);

    if !file_path.exists() {
        return create_spec::create_spec(&path).await;
    }

    let json: String = serde_json::to_string_pretty(spec)?;
    let mut file: File = File::create(file_path).await?;
    file.write_all(json.as_bytes()).await?;

    Ok(())
}
