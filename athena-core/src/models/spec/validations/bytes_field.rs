use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, Default, PartialEq, Clone)]
pub struct BytesField {
    validations: Option<HashMap<String, ByteValidationsRules>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
#[serde(untagged)]
pub enum ByteValidationsRules {
    #[serde(rename = "minlength")]
    MinLength(ByteValidation),
    #[serde(rename = "maxlength")]
    MaxLength(ByteValidation),
    #[serde(rename = "exactlength")]
    ExactLength(ByteValidation),
    #[serde(rename = "pattern")]
    Pattern(BytePatternValidation),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct ByteValidation {
    pub value: usize,
    pub message: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct BytePatternValidation {
    pub pattern: String,
    pub message: Option<String>,
}
