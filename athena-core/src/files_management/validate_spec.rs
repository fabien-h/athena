use crate::models::spec::spec::APISpec;
use serde_json::Value;

pub async fn validate_spec(spec_json: String) -> Result<(), Box<dyn std::error::Error>> {
    let spec: Value = serde_json::from_str(&spec_json)?;

    let _: APISpec = serde_json::from_value(spec)?;

    Ok(())
}
