import { z } from 'zod';
import { APISpecFieldTypeKeysEnum, BaseAPISpecMethodField } from './baseField';

export const SimpleStringValidation = z.object({
    message: z.string().optional(),
});
export type SimpleStringValidation = z.infer<typeof SimpleStringValidation>;

export const SimpleStringValidationWithAcceptedCountries = z.object({
    message: z.string().optional(),
    accepted_countries: z.array(z.string()).optional(),
});
export type SimpleStringValidationWithAcceptedCountries = z.infer<typeof SimpleStringValidationWithAcceptedCountries>;

export const SimpleStringValidationWithLocales = z.object({
    message: z.string().optional(),
    accepted_countries: z.array(z.string()).optional(),
});
export type SimpleStringValidationWithLocales = z.infer<typeof SimpleStringValidationWithLocales>;

export const EnumStringValidation = z.object({
    value: z.array(z.string()),
    message: z.string().optional(),
    case_sensitive: z.boolean().optional(),
});
export type EnumStringValidation = z.infer<typeof EnumStringValidation>;

export const EqualStringValidation = z.object({
    value: z.array(z.string()),
    message: z.string().optional(),
});
export type EqualStringValidation = z.infer<typeof EqualStringValidation>;

export const HashStringValidation = z.object({
    value: z.array(z.string()),
    message: z.string().optional(),
});
export type HashStringValidation = z.infer<typeof HashStringValidation>;

export const IMEIStringValidation = z.object({
    message: z.string().optional(),
    allow_hyphen: z.boolean().optional(),
});
export type IMEIStringValidation = z.infer<typeof IMEIStringValidation>;

export const IncludesStringValidation = z.object({
    value: z.string(),
    message: z.string().optional(),
    case_sensitive: z.boolean().optional(),
});
export type IncludesStringValidation = z.infer<typeof IncludesStringValidation>;

export const LengthStringValidation = z.object({
    value: z.number().int(),
    message: z.string().optional(),
});
export type LengthStringValidation = z.infer<typeof LengthStringValidation>;

export const StringContentValidation = z.object({
    message: z.string().optional(),
    accept_spaces: z.boolean().optional(),
    accept_sign: z.boolean().optional(),
});
export type StringContentValidation = z.infer<typeof StringContentValidation>;

export enum StringValidationKeys {
    ascii = 'ascii',
    base32 = 'base32',
    base58 = 'base58',
    base64 = 'base64',
    BIC = 'BIC',
    BtcAddress = 'BtcAddress',
    CreditCardNumer = 'CreditCardNumer',
    dataURI = 'dataURI',
    dateRFC3339 = 'dateRFC3339',
    EAN = 'EAN',
    email = 'email',
    enum = 'enum',
    equals = 'equals',
    EthereumAddress = 'EthereumAddress',
    FQN = 'FQN',
    FreightContainerID = 'FreightContainerID',
    hash = 'hash',
    hexadecimal = 'hexadecimal',
    hsl = 'hsl',
    IBAN = 'IBAN',
    idCardNumber = 'idCardNumber',
    IMEI = 'IMEI',
    includes = 'includes',
    IP = 'IP',
    IPv4 = 'IPv4',
    IPv6 = 'IPv6',
    ISBN = 'ISBN',
    ISIN = 'ISIN',
    isLowerCase = 'isLowerCase',
    ISO31661Alpha2 = 'ISO31661Alpha2',
    ISO31661Alpha3 = 'ISO31661Alpha3',
    ISO4217 = 'ISO4217',
    ISO6346 = 'ISO6346',
    ISO6391 = 'ISO6391',
    ISO8601 = 'ISO8601',
    ISRC = 'ISRC',
    ISSN = 'ISSN',
    isUpperCase = 'isUpperCase',
    json = 'json',
    JWT = 'JWT',
    lenghExact = 'lenghExact',
    lettersAndNumbersOnly = 'lettersAndNumbersOnly',
    lettersOnly = 'lettersOnly',
    locale = 'locale',
    luhnNumber = 'luhnNumber',
    macAddress = 'macAddress',
    magnetURI = 'magnetURI',
    mailtoURI = 'mailtoURI',
    maxLength = 'maxLength',
    mimeType = 'mimeType',
    minLength = 'minLength',
    mobilePhone = 'mobilePhone',
    mongoId = 'mongoId',
    numbersOnly = 'numbersOnly',
    octal = 'octal',
    passportNumber = 'passportNumber',
    port = 'port',
    postalCode = 'postalCode',
    regex = 'regex',
    rgbColor = 'rgbColor',
    semVer = 'semVer',
    url = 'url',
    urlsafe = 'urlsafe',
    uuid = 'uuid',
    vatNumber = 'vatNumber',
    webColor = 'webColor',
}
export const StringValidationKeysEnum = z.nativeEnum(StringValidationKeys);
export type StringValidationKeysEnum = z.infer<typeof StringValidationKeysEnum>;

export const StringValidationKeysDisplay = {
    [StringValidationKeys.ascii]: 'IsASCII',
    [StringValidationKeys.base32]: 'Base32',
    [StringValidationKeys.base58]: 'Base58',
    [StringValidationKeys.base64]: 'Base64',
    [StringValidationKeys.BIC]: 'Bic',
    [StringValidationKeys.BtcAddress]: 'BtcAddress',
    [StringValidationKeys.CreditCardNumer]: 'CreditCardNumer',
    [StringValidationKeys.dataURI]: 'DataUri',
    [StringValidationKeys.dateRFC3339]: 'DateRfc3339',
    [StringValidationKeys.EAN]: 'Ean',
    [StringValidationKeys.email]: 'Email',
    [StringValidationKeys.enum]: 'Enum',
    [StringValidationKeys.equals]: 'Equals',
    [StringValidationKeys.EthereumAddress]: 'EthereumAddress',
    [StringValidationKeys.FQN]: 'Fqn',
    [StringValidationKeys.FreightContainerID]: 'FreightContainerId',
    [StringValidationKeys.hash]: 'Hash',
    [StringValidationKeys.hexadecimal]: 'Hexadecimal',
    [StringValidationKeys.hsl]: 'Hsl',
    [StringValidationKeys.IBAN]: 'Iban',
    [StringValidationKeys.idCardNumber]: 'IdCardNumber',
    [StringValidationKeys.IMEI]: 'Imei',
    [StringValidationKeys.includes]: 'Includes',
    [StringValidationKeys.IP]: 'Ip',
    [StringValidationKeys.IPv4]: 'IPv4',
    [StringValidationKeys.IPv6]: 'IPv6',
    [StringValidationKeys.ISBN]: 'Isbn',
    [StringValidationKeys.ISIN]: 'Isin',
    [StringValidationKeys.isLowerCase]: 'IsLowerCase',
    [StringValidationKeys.ISO31661Alpha2]: 'Iso31661Alpha2',
    [StringValidationKeys.ISO31661Alpha3]: 'Iso31661Alpha3',
    [StringValidationKeys.ISO4217]: 'Iso4217',
    [StringValidationKeys.ISO6346]: 'Iso6346',
    [StringValidationKeys.ISO6391]: 'Iso6391',
    [StringValidationKeys.ISO8601]: 'Iso8601',
    [StringValidationKeys.ISRC]: 'Isrc',
    [StringValidationKeys.ISSN]: 'Issn',
    [StringValidationKeys.isUpperCase]: 'IsUpperCase',
    [StringValidationKeys.json]: 'Json',
    [StringValidationKeys.JWT]: 'Jwt',
    [StringValidationKeys.lenghExact]: 'LenghExact',
    [StringValidationKeys.lettersAndNumbersOnly]: 'LettersAndNumbersOnly',
    [StringValidationKeys.lettersOnly]: 'LettersOnly',
    [StringValidationKeys.locale]: 'Locale',
    [StringValidationKeys.luhnNumber]: 'LuhnNumber',
    [StringValidationKeys.macAddress]: 'MacAddress',
    [StringValidationKeys.magnetURI]: 'MagnetUri',
    [StringValidationKeys.mailtoURI]: 'MailtoUri',
    [StringValidationKeys.maxLength]: 'MaxLength',
    [StringValidationKeys.mimeType]: 'MimeType',
    [StringValidationKeys.minLength]: 'MinLength',
    [StringValidationKeys.mobilePhone]: 'MobilePhone',
    [StringValidationKeys.mongoId]: 'MongoId',
    [StringValidationKeys.numbersOnly]: 'NumbersOnly',
    [StringValidationKeys.octal]: 'Octal',
    [StringValidationKeys.passportNumber]: 'PassportNumber',
    [StringValidationKeys.port]: 'Port',
    [StringValidationKeys.postalCode]: 'PostalCode',
    [StringValidationKeys.regex]: 'Regex',
    [StringValidationKeys.rgbColor]: 'RgbColor',
    [StringValidationKeys.semVer]: 'SemVer',
    [StringValidationKeys.url]: 'Url',
    [StringValidationKeys.urlsafe]: 'Urlsafe',
    [StringValidationKeys.uuid]: 'Uuid',
    [StringValidationKeys.vatNumber]: 'VatNumber',
    [StringValidationKeys.webColor]: 'WebColor',
};

export const StringField = BaseAPISpecMethodField.extend({
    field_type: z.literal(APISpecFieldTypeKeysEnum.enum.String),
    validations: z.object({
        [StringValidationKeys.ascii]: SimpleStringValidation,
        [StringValidationKeys.base32]: SimpleStringValidation,
        [StringValidationKeys.base58]: SimpleStringValidation,
        [StringValidationKeys.base64]: SimpleStringValidation,
        [StringValidationKeys.BIC]: SimpleStringValidation,
        [StringValidationKeys.BtcAddress]: SimpleStringValidation,
        [StringValidationKeys.CreditCardNumer]: SimpleStringValidation,
        [StringValidationKeys.dataURI]: SimpleStringValidation,
        [StringValidationKeys.dateRFC3339]: SimpleStringValidation,
        [StringValidationKeys.EAN]: SimpleStringValidation,
        [StringValidationKeys.email]: SimpleStringValidation,
        [StringValidationKeys.enum]: EnumStringValidation,
        [StringValidationKeys.equals]: EqualStringValidation,
        [StringValidationKeys.EthereumAddress]: SimpleStringValidation,
        [StringValidationKeys.FQN]: SimpleStringValidation,
        [StringValidationKeys.FreightContainerID]: SimpleStringValidation,
        [StringValidationKeys.hash]: SimpleStringValidation,
        [StringValidationKeys.hexadecimal]: SimpleStringValidation,
        [StringValidationKeys.hsl]: SimpleStringValidation,
        [StringValidationKeys.IBAN]: SimpleStringValidationWithAcceptedCountries,
        [StringValidationKeys.idCardNumber]: SimpleStringValidationWithAcceptedCountries,
        [StringValidationKeys.IMEI]: IMEIStringValidation,
        [StringValidationKeys.includes]: SimpleStringValidation,
        [StringValidationKeys.IP]: SimpleStringValidation,
        [StringValidationKeys.IPv4]: SimpleStringValidation,
        [StringValidationKeys.IPv6]: SimpleStringValidation,
        [StringValidationKeys.ISBN]: SimpleStringValidation,
        [StringValidationKeys.ISIN]: SimpleStringValidation,
        [StringValidationKeys.isLowerCase]: SimpleStringValidation,
        [StringValidationKeys.ISO31661Alpha2]: SimpleStringValidation,
        [StringValidationKeys.ISO31661Alpha3]: SimpleStringValidation,
        [StringValidationKeys.ISO4217]: SimpleStringValidation,
        [StringValidationKeys.ISO6346]: SimpleStringValidation,
        [StringValidationKeys.ISO6391]: SimpleStringValidation,
        [StringValidationKeys.ISO8601]: SimpleStringValidation,
        [StringValidationKeys.ISRC]: SimpleStringValidation,
        [StringValidationKeys.ISSN]: SimpleStringValidation,
        [StringValidationKeys.isUpperCase]: SimpleStringValidation,
        [StringValidationKeys.json]: SimpleStringValidation,
        [StringValidationKeys.JWT]: SimpleStringValidation,
        [StringValidationKeys.lenghExact]: LengthStringValidation,
        [StringValidationKeys.lettersAndNumbersOnly]: SimpleStringValidation,
        [StringValidationKeys.lettersOnly]: StringContentValidation,
        [StringValidationKeys.locale]: SimpleStringValidationWithLocales,
        [StringValidationKeys.luhnNumber]: SimpleStringValidation,
        [StringValidationKeys.macAddress]: SimpleStringValidation,
        [StringValidationKeys.magnetURI]: SimpleStringValidation,
        [StringValidationKeys.mailtoURI]: SimpleStringValidation,
        [StringValidationKeys.maxLength]: LengthStringValidation,
        [StringValidationKeys.mimeType]: SimpleStringValidation,
        [StringValidationKeys.minLength]: LengthStringValidation,
        [StringValidationKeys.mobilePhone]: SimpleStringValidationWithLocales,
        [StringValidationKeys.mongoId]: SimpleStringValidation,
        [StringValidationKeys.numbersOnly]: StringContentValidation,
        [StringValidationKeys.octal]: SimpleStringValidation,
        [StringValidationKeys.passportNumber]: SimpleStringValidationWithAcceptedCountries,
        [StringValidationKeys.port]: SimpleStringValidation,
        [StringValidationKeys.postalCode]: SimpleStringValidationWithAcceptedCountries,
        [StringValidationKeys.regex]: EqualStringValidation,
        [StringValidationKeys.rgbColor]: SimpleStringValidation,
        [StringValidationKeys.semVer]: SimpleStringValidation,
        [StringValidationKeys.url]: SimpleStringValidation,
        [StringValidationKeys.urlsafe]: SimpleStringValidation,
        [StringValidationKeys.uuid]: SimpleStringValidation,
        [StringValidationKeys.vatNumber]: SimpleStringValidationWithAcceptedCountries,
        [StringValidationKeys.webColor]: SimpleStringValidation,
    }).optional(),
});
export type StringField = z.infer<typeof StringField>;
