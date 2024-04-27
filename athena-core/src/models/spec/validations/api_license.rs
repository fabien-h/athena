use serde::{Deserialize, Serialize};

#[derive(Serialize, Debug, PartialEq, Deserialize)]
pub struct APILicence {
    pub name: String,
    pub url: String,
}

impl Default for APILicence {
    fn default() -> Self {
        APILicence {
            name: "MIT".to_string(),
            url: "https://spdx.org/licenses/MIT.html".to_string(),
        }
    }
}
