use crate::models::spec::spec::APISpec;
use std::path::Path;
use tokio::io::AsyncReadExt;
use tokio::{fs::File, io::BufReader};

use super::create_spec;

pub async fn read_spec(path: &str) -> Result<APISpec, Box<dyn std::error::Error>> {
    let file_path: &Path = Path::new(path);

    if !file_path.exists() {
        create_spec::create_spec(&path).await?;
    }

    let file: File = File::open(file_path).await?;
    let mut reader: BufReader<File> = BufReader::new(file);
    let mut contents: String = String::new();

    reader.read_to_string(&mut contents).await?;

    let spec: APISpec = serde_json::from_str(&contents)?;
    Ok(spec)
}
