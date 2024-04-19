use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug)]
pub struct EnumField {
    validations: Option<HashMap<String, EnumValidationsRules>>,
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(untagged)]
pub enum EnumValidationsRules {
    #[serde(rename = "matches")]
    Matches(EnumValidation),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct EnumValidation {
    pub value: Vec<String>,
    pub message: Option<String>,
}
