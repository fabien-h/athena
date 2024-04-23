use crate::models::spec::spec::APISpec;
use std::path::Path;
use tokio::fs::File;
use tokio::io::AsyncWriteExt;

pub async fn create_spec(path: &str) -> Result<(), Box<dyn std::error::Error>> {
    let file_path: &Path = Path::new(path);
    let spec: APISpec = APISpec::default();
    let json: String = serde_json::to_string_pretty(&spec)?;
    let mut file: File = File::create(file_path).await?;
    file.write_all(json.as_bytes()).await?;
    Ok(())
}
