use serde::{Deserialize, Serialize};

pub mod generator;
pub mod models;
pub mod parser;
pub mod utils;

#[derive(Serialize, Deserialize, Debug)]
pub struct Specification {
    pub name: String,
    pub version: String,
    pub description: String,
}

impl Specification {
    pub fn new() -> Self {
        Specification {
            name: String::new(),
            version: String::new(),
            description: String::new(),
        }
    }
}
