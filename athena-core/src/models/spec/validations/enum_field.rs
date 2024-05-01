use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Default, PartialEq, Clone)]
pub struct EnumField {
    validations: Option<EnumValidation>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct EnumValidation {
    enum_name: String,
    enum_localization: EnumLocalization,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
pub enum EnumLocalization {
    #[serde(rename = "method")]
    Method,
    #[serde(rename = "service")]
    Service,
    #[serde(rename = "global")]
    Global,
}

impl Default for EnumLocalization {
    fn default() -> Self {
        EnumLocalization::Global
    }
}
