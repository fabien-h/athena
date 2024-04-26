use serde::{Deserialize, Serialize};

#[derive(Serialize, Debug, PartialEq, Default, Deserialize)]
pub struct APILicence {
    pub name: String,
    pub url: String,
}
