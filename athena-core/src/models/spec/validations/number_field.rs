use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct NumericField {
    validations: Option<HashMap<String, NumberValidationsRules>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
#[serde(untagged)]
pub enum NumberValidationsRules {
    #[serde(rename = "gt")]
    GreaterThan(NumberValidation),
    #[serde(rename = "gte")]
    GreaterThanOrEqual(NumberValidation),
    #[serde(rename = "lt")]
    LesserThan(NumberValidation),
    #[serde(rename = "lte")]
    LesserThanOrEqual(NumberValidation),
    #[serde(rename = "multipleOf")]
    MultipleOf(NumberValidation),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct NumberValidation {
    pub value: usize,
    pub message: Option<String>,
}
