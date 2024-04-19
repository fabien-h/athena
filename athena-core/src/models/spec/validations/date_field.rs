use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug)]
pub struct DateField {
    validations: Option<HashMap<String, DateValidationsRules>>,
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(untagged)]
pub enum DateValidationsRules {
    #[serde(rename = "gt")]
    GreaterThan(DateValidation),
    #[serde(rename = "gte")]
    GreaterThanOrEqual(DateValidation),
    #[serde(rename = "lt")]
    LesserThan(DateValidation),
    #[serde(rename = "lte")]
    LesserThanOrEqual(DateValidation),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct DateValidation {
    pub value: usize,
    pub message: Option<String>,
}
