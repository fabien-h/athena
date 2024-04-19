use serde::{Deserialize, Serialize};

use super::validations::{number_field::NumericField, string_field::StringField};
use crate::models::constants::http_codes::HttpErrorResponseStatusCode;

/**
 * This module contains the data structures that represent the API specification.
 */

/**
 * This is the root structure of the API specification.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpec {
    pub name: String,
    pub version: String,
    pub description: String,
    pub global: APISpecGlobal,
    pub services: Vec<APISpecService>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecGlobal {
    pub enums: Vec<APISpecEnum>,
    pub errors: Vec<APISpecError>,
    pub request_headers: Vec<APISpecHeader>,
    pub response_headers: Vec<APISpecHeader>,
}

/**
 * This structure represents a service in the API specification.
 * Services exists a the root of the API specification and contain methods.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecService {
    pub name: String,
    pub description: String,
    pub enums: Vec<APISpecEnum>,
    pub errors: Vec<APISpecError>,
    pub request_headers: Vec<APISpecHeader>,
    pub response_headers: Vec<APISpecHeader>,
    pub methods: Vec<APISpecMethod>,
}

/**
 * This structure represents a method in the API specification.
 * They exist within services and contain request fields.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecMethod {
    pub name: String,
    pub description: String,
    pub enums: Vec<APISpecEnum>,
    pub errors: Vec<APISpecError>,
    pub request_headers: Vec<APISpecHeader>,
    pub response_headers: Vec<APISpecHeader>,
    pub request_fields: Vec<APISpecRequestField>,
}
/**
 * This structure represents a header in the API specification.
 * They can exist globally, in services and in methods.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecHeader {
    pub name: String,
    pub description: String,
}

/**
 * This structure represents an enum in the API specification.
 * Enums can exist globally, in services and in methods.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecEnum {
    pub name: String,
    pub description: String,
    pub values: Vec<APISpecEnumValue>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecEnumValue {
    pub name: String,
    pub value: usize,
    pub description: String,
}

/**
 * This structure represents an error in the API specification.
 * Errors can exist globally, in services and in methods.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecError {
    pub name: String,
    pub description: String,
    pub http_code: HttpErrorResponseStatusCode,
    pub message_type: String,
    pub headers: Vec<APISpecHeader>,
}

/**
 * This structure represents a request/response field in the API specification.
 * Fields can exist only in methods.
 */
#[derive(Serialize, Deserialize, Debug)]
pub struct APISpecRequestField {
    pub name: String,
    #[serde(flatten)]
    pub field_type: APISpecRequestFieldType,
    pub description: Option<String>,
    pub default: Option<serde_json::Value>,
    pub required: Option<bool>,
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
pub enum APISpecRequestFieldType {
    String(StringField),
    Bool(BoolField),
    Int32(NumericField),
    Int64(NumericField),
    Float64(NumericField),
    Double(NumericField),
    // Bytes(BytesField),
    // Date(DateField),
    // DateTime(DateTimeField),
    // Timestamp(TimestampField),
    // Enum(EnumField),
    // Message(MessageField),
    // Array(ArrayField),
    // Map(MapField),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct BoolField;