use serde_json::Value;

pub struct Parser;

impl Parser {
    pub fn parse(json: &str) -> Result<Value, serde_json::Error> {
        serde_json::from_str(json)
    }
}
