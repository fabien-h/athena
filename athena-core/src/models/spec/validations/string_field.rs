use serde::{Deserialize, Serialize};
use std::collections::HashMap;

use crate::models::constants::{country_codes::CountryCode, hash_algorithms::HashAlgorithms};

/**
 * Field type
 */
#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct StringField {
    validations: Option<HashMap<String, StringValidationsRules>>,
}

/**
 * Validations rules
 */
#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
#[serde(untagged)]
pub enum StringValidationsRules {
    #[serde(rename = "ascii")]
    IsASCII(SimpleStringValidation),
    #[serde(rename = "base32")]
    Base32(SimpleStringValidation),
    #[serde(rename = "base58")]
    Base58(SimpleStringValidation),
    #[serde(rename = "base64")]
    Base64(SimpleStringValidation),
    #[serde(rename = "BIC")]
    Bic(SimpleStringValidation),
    #[serde(rename = "BtcAddress")]
    BtcAddress(SimpleStringValidation),
    #[serde(rename = "CreditCardNumer")]
    CreditCardNumer(SimpleStringValidation),
    #[serde(rename = "dataURI")]
    DataUri(SimpleStringValidation),
    #[serde(rename = "dateRFC3339")]
    DateRfc3339(SimpleStringValidation),
    #[serde(rename = "EAN")]
    Ean(SimpleStringValidation),
    #[serde(rename = "email")]
    Email(SimpleStringValidation),
    #[serde(rename = "enum")]
    Enum(EnumStringValidation),
    #[serde(rename = "equals")]
    Equals(EqualStringValidation),
    #[serde(rename = "EthereumAddress")]
    EthereumAddress(SimpleStringValidation),
    #[serde(rename = "FQN")]
    Fqn(SimpleStringValidation),
    #[serde(rename = "FreightContainerID")]
    FreightContainerId(SimpleStringValidation),
    #[serde(rename = "hash")]
    Hash(SimpleStringValidation),
    #[serde(rename = "hexadecimal")]
    Hexadecimal(SimpleStringValidation),
    #[serde(rename = "hsl")]
    Hsl(SimpleStringValidation),
    #[serde(rename = "IBAN")]
    Iban(SimpleStringValidationWithAcceptedCountries),
    #[serde(rename = "idCardNumber")]
    IdCardNumber(SimpleStringValidationWithAcceptedCountries),
    #[serde(rename = "IMEI")]
    Imei(IMEIStringValidation),
    #[serde(rename = "includes")]
    Includes(SimpleStringValidation),
    #[serde(rename = "IP")]
    Ip(SimpleStringValidation),
    #[serde(rename = "IPv4")]
    IPv4(SimpleStringValidation),
    #[serde(rename = "IPv6")]
    IPv6(SimpleStringValidation),
    #[serde(rename = "ISBN")]
    Isbn(SimpleStringValidation),
    #[serde(rename = "ISIN")]
    Isin(SimpleStringValidation),
    #[serde(rename = "isLowerCase")]
    IsLowerCase(SimpleStringValidation),
    #[serde(rename = "ISO31661Alpha2")]
    Iso31661Alpha2(SimpleStringValidation),
    #[serde(rename = "ISO31661Alpha3")]
    Iso31661Alpha3(SimpleStringValidation),
    #[serde(rename = "ISO4217")]
    Iso4217(SimpleStringValidation),
    #[serde(rename = "ISO6346")]
    Iso6346(SimpleStringValidation),
    #[serde(rename = "ISO6391")]
    Iso6391(SimpleStringValidation),
    #[serde(rename = "ISO8601")]
    Iso8601(SimpleStringValidation),
    #[serde(rename = "ISRC")]
    Isrc(SimpleStringValidation),
    #[serde(rename = "ISSN")]
    Issn(SimpleStringValidation),
    #[serde(rename = "isUpperCase")]
    IsUpperCase(SimpleStringValidation),
    #[serde(rename = "json")]
    Json(SimpleStringValidation),
    #[serde(rename = "JWT")]
    Jwt(SimpleStringValidation),
    #[serde(rename = "lenghExact")]
    LenghExact(LengthStringValidation),
    #[serde(rename = "lettersAndNumbersOnly")]
    LettersAndNumbersOnly(StringContentValidation),
    #[serde(rename = "lettersOnly")]
    LettersOnly(StringContentValidation),
    #[serde(rename = "locale")]
    Locale(SimpleStringValidationWithLocales),
    #[serde(rename = "luhnNumber")]
    LuhnNumber(SimpleStringValidation),
    #[serde(rename = "macAddress")]
    MacAddress(SimpleStringValidation),
    #[serde(rename = "magnetURI")]
    MagnetUri(SimpleStringValidation),
    #[serde(rename = "mailtoURI")]
    MailtoUri(SimpleStringValidation),
    #[serde(rename = "maxLength")]
    MaxLength(LengthStringValidation),
    #[serde(rename = "mimeType")]
    MimeType(SimpleStringValidation),
    #[serde(rename = "minLength")]
    MinLength(LengthStringValidation),
    #[serde(rename = "mobilePhone")]
    MobilePhone(SimpleStringValidationWithLocales),
    #[serde(rename = "mongoId")]
    MongoId(SimpleStringValidation),
    #[serde(rename = "numbersOnly")]
    NumbersOnly(StringContentValidation),
    #[serde(rename = "octal")]
    Octal(SimpleStringValidation),
    #[serde(rename = "passportNumber")]
    PassportNumber(SimpleStringValidationWithAcceptedCountries),
    #[serde(rename = "port")]
    Port(SimpleStringValidation),
    #[serde(rename = "postalCode")]
    PostalCode(SimpleStringValidationWithAcceptedCountries),
    #[serde(rename = "regex")]
    Regex(EqualStringValidation),
    #[serde(rename = "rgbColor")]
    RgbColor(SimpleStringValidation),
    #[serde(rename = "semVer")]
    SemVer(SimpleStringValidation),
    #[serde(rename = "url")]
    Url(SimpleStringValidation),
    #[serde(rename = "urlsafe")]
    Urlsafe(SimpleStringValidation),
    #[serde(rename = "uuid")]
    Uuid(SimpleStringValidation),
    #[serde(rename = "vatNumber")]
    VatNumber(SimpleStringValidationWithAcceptedCountries),
    #[serde(rename = "webColor")]
    WebColor(SimpleStringValidation),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct SimpleStringValidation {
    pub message: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct SimpleStringValidationWithAcceptedCountries {
    pub message: Option<String>,
    pub accepted_countries: Option<Vec<CountryCode>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct SimpleStringValidationWithLocales {
    pub message: Option<String>,
    pub accepted_countries: Option<Vec<String>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct EnumStringValidation {
    pub value: Vec<String>,
    pub message: Option<String>,
    pub case_sensitive: Option<bool>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct EqualStringValidation {
    pub value: Vec<String>,
    pub message: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct HashStringValidation {
    pub value: Vec<HashAlgorithms>,
    pub message: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct IMEIStringValidation {
    pub message: Option<String>,
    pub allow_hyphen: Option<bool>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct IncludesStringValidation {
    pub value: String,
    pub message: Option<String>,
    pub case_sensitive: Option<bool>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct LengthStringValidation {
    pub value: usize,
    pub message: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Clone)]
pub struct StringContentValidation {
    pub message: Option<String>,
    pub accept_spaces: Option<bool>,
    pub accept_sign: Option<bool>,
}
