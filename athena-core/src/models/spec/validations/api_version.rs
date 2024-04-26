use serde::Serialize;

#[derive(Serialize, Debug, PartialEq)]
pub struct APIVersion(String);

impl Default for APIVersion {
    fn default() -> Self {
        APIVersion("0.1.0".to_string())
    }
}

impl<'de> serde::Deserialize<'de> for APIVersion {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        let version_str: String = String::deserialize(deserializer)?;
        if is_valid_semver(&version_str) {
            Ok(APIVersion(version_str))
        } else {
            Err(serde::de::Error::custom("Invalid semantic version"))
        }
    }
}

fn is_valid_semver(version: &str) -> bool {
    let parts: Vec<&str> = version.split('.').collect();
    if parts.len() != 3 {
        return false;
    }
    for part in parts {
        if !part.chars().all(|c| c.is_ascii_digit()) {
            return false;
        }
    }
    true
}
