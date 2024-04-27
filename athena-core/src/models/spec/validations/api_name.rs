use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct APIName(String);

impl Default for APIName {
    fn default() -> Self {
        APIName("Name of the API".to_string())
    }
}
