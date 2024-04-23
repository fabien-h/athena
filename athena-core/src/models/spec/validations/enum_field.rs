use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, Default, PartialEq, Clone)]
pub struct EnumField {
    validations: Option<HashMap<String, EnumValidationsRules>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
#[serde(untagged)]
pub enum EnumValidationsRules {
    #[serde(rename = "matches")]
    Matches(EnumValidation),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct EnumValidation {
    pub value: Vec<String>,
    pub message: Option<String>,
}
