use super::create_spec::create_spec;
use super::DEFAULT_SPEC_PATH;
use crate::models::spec::spec::APISpec;
use std::env;
use std::path::{Path, PathBuf};
use tokio::io::AsyncReadExt;
use tokio::{fs::File, io::BufReader};

pub async fn read_spec(
    path: Option<impl Into<String>>,
) -> Result<APISpec, Box<dyn std::error::Error>> {
    let file_path: PathBuf = match path {
        Some(p) => Path::new(&p.into()).to_path_buf(),
        None => env::current_dir()?.join(DEFAULT_SPEC_PATH),
    };

    if !file_path.exists() {
        create_spec(Some(file_path.to_str().unwrap())).await?;
    }

    let file: File = File::open(file_path).await?;
    let mut reader: BufReader<File> = BufReader::new(file);
    let mut contents: String = String::new();

    reader.read_to_string(&mut contents).await?;

    let spec: APISpec = serde_json::from_str(&contents)?;
    Ok(spec)
}
