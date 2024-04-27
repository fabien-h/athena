use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct APIDescription(String);

impl Default for APIDescription {
    fn default() -> Self {
        APIDescription("Description of the API".to_string())
    }
}
