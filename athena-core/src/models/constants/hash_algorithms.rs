use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub enum HashAlgorithms {
    #[serde(rename = "crc32")]
    Crc32,
    #[serde(rename = "crc32b")]
    Crc32b,
    #[serde(rename = "md4")]
    Md4,
    #[serde(rename = "md5")]
    Md5,
    #[serde(rename = "ripemd128")]
    Ripemd128,
    #[serde(rename = "ripemd160")]
    Ripemd160,
    #[serde(rename = "sha1")]
    Sha1,
    #[serde(rename = "sha256")]
    Sha256,
    #[serde(rename = "sha384")]
    Sha384,
    #[serde(rename = "sha512")]
    Sha512,
    #[serde(rename = "tiger128")]
    Tiger128,
    #[serde(rename = "tiger160")]
    Tiger160,
    #[serde(rename = "tiger192")]
    Tiger192,
}
