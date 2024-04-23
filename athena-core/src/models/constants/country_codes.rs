use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, PartialEq, Clone)]
pub enum CountryCode {
    #[serde(rename = "AD")]
    Andorra,
    #[serde(rename = "AE")]
    UnitedArabEmirates,
    #[serde(rename = "AF")]
    Afghanistan,
    #[serde(rename = "AG")]
    AntiguaAndBarbuda,
    #[serde(rename = "AI")]
    Anguilla,
    #[serde(rename = "AL")]
    Albania,
    #[serde(rename = "AM")]
    Armenia,
    #[serde(rename = "AO")]
    Angola,
    #[serde(rename = "AQ")]
    Antarctica,
    #[serde(rename = "AR")]
    Argentina,
    #[serde(rename = "AS")]
    AmericanSamoa,
    #[serde(rename = "AT")]
    Austria,
    #[serde(rename = "AU")]
    Australia,
    #[serde(rename = "AW")]
    Aruba,
    #[serde(rename = "AX")]
    ÅlandIslands,
    #[serde(rename = "AZ")]
    Azerbaijan,
    #[serde(rename = "BA")]
    BosniaAndHerzegovina,
    #[serde(rename = "BB")]
    Barbados,
    #[serde(rename = "BD")]
    Bangladesh,
    #[serde(rename = "BE")]
    Belgium,
    #[serde(rename = "BF")]
    BurkinaFaso,
    #[serde(rename = "BG")]
    Bulgaria,
    #[serde(rename = "BH")]
    Bahrain,
    #[serde(rename = "BI")]
    Burundi,
    #[serde(rename = "BJ")]
    Benin,
    #[serde(rename = "BL")]
    SaintBarthelemy,
    #[serde(rename = "BM")]
    Bermuda,
    #[serde(rename = "BN")]
    BruneiDarussalam,
    #[serde(rename = "BO")]
    Bolivia,
    #[serde(rename = "BQ")]
    BonaireSintEustatiusAndSaba,
    #[serde(rename = "BR")]
    Brazil,
    #[serde(rename = "BS")]
    Bahamas,
    #[serde(rename = "BT")]
    Bhutan,
    #[serde(rename = "BV")]
    BouvetIsland,
    #[serde(rename = "BW")]
    Botswana,
    #[serde(rename = "BY")]
    Belarus,
    #[serde(rename = "BZ")]
    Belize,
    #[serde(rename = "CA")]
    Canada,
    #[serde(rename = "CC")]
    CocosKeelingIslands,
    #[serde(rename = "CD")]
    CongoDemocraticRepublicOf,
    #[serde(rename = "CF")]
    CentralAfricanRepublic,
    #[serde(rename = "CG")]
    Congo,
    #[serde(rename = "CH")]
    Switzerland,
    #[serde(rename = "CI")]
    IvoryCoast,
    #[serde(rename = "CK")]
    CookIslands,
    #[serde(rename = "CL")]
    Chile,
    #[serde(rename = "CM")]
    Cameroon,
    #[serde(rename = "CN")]
    China,
    #[serde(rename = "CO")]
    Colombia,
    #[serde(rename = "CR")]
    CostaRica,
    #[serde(rename = "CU")]
    Cuba,
    #[serde(rename = "CV")]
    CaboVerde,
    #[serde(rename = "CW")]
    Curaçao,
    #[serde(rename = "CX")]
    ChristmasIsland,
    #[serde(rename = "CY")]
    Cyprus,
    #[serde(rename = "CZ")]
    Czechia,
    #[serde(rename = "DE")]
    Germany,
    #[serde(rename = "DJ")]
    Djibouti,
    #[serde(rename = "DK")]
    Denmark,
    #[serde(rename = "DM")]
    Dominica,
    #[serde(rename = "DO")]
    DominicanRepublic,
    #[serde(rename = "DZ")]
    Algeria,
    #[serde(rename = "EC")]
    Ecuador,
    #[serde(rename = "EE")]
    Estonia,
    #[serde(rename = "EG")]
    Egypt,
    #[serde(rename = "EH")]
    WesternSahara,
    #[serde(rename = "ER")]
    Eritrea,
    #[serde(rename = "ES")]
    Spain,
    #[serde(rename = "ET")]
    Ethiopia,
    #[serde(rename = "FI")]
    Finland,
    #[serde(rename = "FJ")]
    Fiji,
    #[serde(rename = "FK")]
    FalklandIslands,
    #[serde(rename = "FM")]
    MicronesiaFederatedStatesOf,
    #[serde(rename = "FO")]
    FaroeIslands,
    #[serde(rename = "FR")]
    France,
    #[serde(rename = "GA")]
    Gabon,
    #[serde(rename = "GB")]
    UnitedKingdomOfGreatBritainAndNorthernIreland,
    #[serde(rename = "GD")]
    Grenada,
    #[serde(rename = "GE")]
    Georgia,
    #[serde(rename = "GF")]
    FrenchGuiana,
    #[serde(rename = "GG")]
    Guernsey,
    #[serde(rename = "GH")]
    Ghana,
    #[serde(rename = "GI")]
    Gibraltar,
    #[serde(rename = "GL")]
    Greenland,
    #[serde(rename = "GM")]
    Gambia,
    #[serde(rename = "GN")]
    Guinea,
    #[serde(rename = "GP")]
    Guadeloupe,
    #[serde(rename = "GQ")]
    EquatorialGuinea,
    #[serde(rename = "GR")]
    Greece,
    #[serde(rename = "GS")]
    SouthGeorgiaAndtheSouthSandwichIslands,
    #[serde(rename = "GT")]
    Guatemala,
    #[serde(rename = "GU")]
    Guam,
    #[serde(rename = "GW")]
    GuineaBissau,
    #[serde(rename = "GY")]
    Guyana,
    #[serde(rename = "HK")]
    HongKong,
    #[serde(rename = "HM")]
    HeardIslandAndMcDonaldIslands,
    #[serde(rename = "HN")]
    Honduras,
    #[serde(rename = "HR")]
    Croatia,
    #[serde(rename = "HT")]
    Haiti,
    #[serde(rename = "HU")]
    Hungary,
    #[serde(rename = "ID")]
    Indonesia,
    #[serde(rename = "IE")]
    Ireland,
    #[serde(rename = "IL")]
    Israel,
    #[serde(rename = "IM")]
    IsleOfMan,
    #[serde(rename = "IN")]
    India,
    #[serde(rename = "IO")]
    BritishIndianOceanTerritory,
    #[serde(rename = "IQ")]
    Iraq,
    #[serde(rename = "IR")]
    IranIslamicRepublicOf,
    #[serde(rename = "IS")]
    Iceland,
    #[serde(rename = "IT")]
    Italy,
    #[serde(rename = "JE")]
    Jersey,
    #[serde(rename = "JM")]
    Jamaica,
    #[serde(rename = "JO")]
    Jordan,
    #[serde(rename = "JP")]
    Japan,
    #[serde(rename = "KE")]
    Kenya,
    #[serde(rename = "KG")]
    Kyrgyzstan,
    #[serde(rename = "KH")]
    Cambodia,
    #[serde(rename = "KI")]
    Kiribati,
    #[serde(rename = "KM")]
    Comoros,
    #[serde(rename = "KN")]
    SaintKittsAndNevis,
    #[serde(rename = "KP")]
    KoreaDemocraticPeoplesRepublicOf,
    #[serde(rename = "KR")]
    Korea,
    RepublicOf,
    #[serde(rename = "KW")]
    Kuwait,
    #[serde(rename = "KY")]
    CaymanIslands,
    #[serde(rename = "KZ")]
    Kazakhstan,
    #[serde(rename = "LA")]
    LaoPeopleDemocraticRepublic,
    #[serde(rename = "LB")]
    Lebanon,
    #[serde(rename = "LC")]
    SaintLucia,
    #[serde(rename = "LI")]
    Liechtenstein,
    #[serde(rename = "LK")]
    SriLanka,
    #[serde(rename = "LR")]
    Liberia,
    #[serde(rename = "LS")]
    Lesotho,
    #[serde(rename = "LT")]
    Lithuania,
    #[serde(rename = "LU")]
    Luxembourg,
    #[serde(rename = "LV")]
    Latvia,
    #[serde(rename = "LY")]
    Libya,
    #[serde(rename = "MA")]
    Morocco,
    #[serde(rename = "MC")]
    Monaco,
    #[serde(rename = "MD")]
    MoldovaRepublicOf,
    #[serde(rename = "ME")]
    Montenegro,
    #[serde(rename = "MF")]
    SaintMartinFrenchpart,
    #[serde(rename = "MG")]
    Madagascar,
    #[serde(rename = "MH")]
    MarshallIslands,
    #[serde(rename = "MK")]
    NorthMacedonia,
    #[serde(rename = "ML")]
    Mali,
    #[serde(rename = "MM")]
    Myanmar,
    #[serde(rename = "MN")]
    Mongolia,
    #[serde(rename = "MO")]
    Macao,
    #[serde(rename = "MP")]
    NorthernMarianaIslands,
    #[serde(rename = "MQ")]
    Martinique,
    #[serde(rename = "MR")]
    Mauritania,
    #[serde(rename = "MS")]
    Montserrat,
    #[serde(rename = "MT")]
    Malta,
    #[serde(rename = "MU")]
    Mauritius,
    #[serde(rename = "MV")]
    Maldives,
    #[serde(rename = "MW")]
    Malawi,
    #[serde(rename = "MX")]
    Mexico,
    #[serde(rename = "MY")]
    Malaysia,
    #[serde(rename = "MZ")]
    Mozambique,
    #[serde(rename = "NA")]
    Namibia,
    #[serde(rename = "NC")]
    NewCaledonia,
    #[serde(rename = "NE")]
    Niger,
    #[serde(rename = "NF")]
    NorfolkIsland,
    #[serde(rename = "NG")]
    Nigeria,
    #[serde(rename = "NI")]
    Nicaragua,
    #[serde(rename = "NL")]
    NetherlandsKingdomOfThe,
    #[serde(rename = "NO")]
    Norway,
    #[serde(rename = "NP")]
    Nepal,
    #[serde(rename = "NR")]
    Nauru,
    #[serde(rename = "NU")]
    Niue,
    #[serde(rename = "NZ")]
    NewZealand,
    #[serde(rename = "OM")]
    Oman,
    #[serde(rename = "PA")]
    Panama,
    #[serde(rename = "PE")]
    Peru,
    #[serde(rename = "PF")]
    FrenchPolynesia,
    #[serde(rename = "PG")]
    PapuaNewGuinea,
    #[serde(rename = "PH")]
    Philippines,
    #[serde(rename = "PK")]
    Pakistan,
    #[serde(rename = "PL")]
    Poland,
    #[serde(rename = "PM")]
    SaintPierreAndMiquelon,
    #[serde(rename = "PN")]
    Pitcairn,
    #[serde(rename = "PR")]
    PuertoRico,
    #[serde(rename = "PS")]
    Palestine,
    StateOf,
    #[serde(rename = "PT")]
    Portugal,
    #[serde(rename = "PW")]
    Palau,
    #[serde(rename = "PY")]
    Paraguay,
    #[serde(rename = "QA")]
    Qatar,
    #[serde(rename = "RE")]
    Réunion,
    #[serde(rename = "RO")]
    Romania,
    #[serde(rename = "RS")]
    Serbia,
    #[serde(rename = "RU")]
    RussianFederation,
    #[serde(rename = "RW")]
    Rwanda,
    #[serde(rename = "SA")]
    SaudiArabia,
    #[serde(rename = "SB")]
    SolomonIslands,
    #[serde(rename = "SC")]
    Seychelles,
    #[serde(rename = "SD")]
    Sudan,
    #[serde(rename = "SE")]
    Sweden,
    #[serde(rename = "SG")]
    Singapore,
    #[serde(rename = "SH")]
    SaintHelenaAscensionAndTristanDaCunha,
    #[serde(rename = "SI")]
    Slovenia,
    #[serde(rename = "SJ")]
    SvalbardAndJanMayen,
    #[serde(rename = "SK")]
    Slovakia,
    #[serde(rename = "SL")]
    SierraLeone,
    #[serde(rename = "SM")]
    SanMarino,
    #[serde(rename = "SN")]
    Senegal,
    #[serde(rename = "SO")]
    Somalia,
    #[serde(rename = "SR")]
    Suriname,
    #[serde(rename = "SS")]
    SouthSudan,
    #[serde(rename = "ST")]
    SaoTomeAndPrincipe,
    #[serde(rename = "SV")]
    ElSalvador,
    #[serde(rename = "SX")]
    SintMaartenDutchpart,
    #[serde(rename = "SY")]
    SyrianArabRepublic,
    #[serde(rename = "SZ")]
    Eswatini,
    #[serde(rename = "TC")]
    TurksAndCaicosIsland,
    #[serde(rename = "TD")]
    Chad,
    #[serde(rename = "TF")]
    FrenchSouthernTerritories,
    #[serde(rename = "TG")]
    Togo,
    #[serde(rename = "TH")]
    Thailand,
    #[serde(rename = "TJ")]
    Tajikistan,
    #[serde(rename = "TK")]
    Tokelau,
    #[serde(rename = "TL")]
    TimorLeste,
    #[serde(rename = "TM")]
    Turkmenistan,
    #[serde(rename = "TN")]
    Tunisia,
    #[serde(rename = "TO")]
    Tonga,
    #[serde(rename = "TR")]
    Türkiye,
    #[serde(rename = "TT")]
    TrinidadAndTobago,
    #[serde(rename = "TV")]
    Tuvalu,
    #[serde(rename = "TW")]
    Taiwan,
    #[serde(rename = "TZ")]
    TanzaniaUnitedRepublicOf,
    #[serde(rename = "UA")]
    Ukraine,
    #[serde(rename = "UG")]
    Uganda,
    #[serde(rename = "UM")]
    UnitedStatesMinorOutlyingIslands,
    #[serde(rename = "US")]
    UnitedStatesOfAmerica,
    #[serde(rename = "UY")]
    Uruguay,
    #[serde(rename = "UZ")]
    Uzbekistan,
    #[serde(rename = "VA")]
    HolySee,
    #[serde(rename = "VC")]
    SaintVincentAndtheGrenadines,
    #[serde(rename = "VE")]
    VenezuelaBolivarianRepublicOf,
    #[serde(rename = "VG")]
    VirginIslandsBritish,
    #[serde(rename = "VI")]
    VirginIslandsUS,
    #[serde(rename = "VN")]
    VietNam,
    #[serde(rename = "VU")]
    Vanuatu,
    #[serde(rename = "WF")]
    WallisAndFutuna,
    #[serde(rename = "WS")]
    Samoa,
    #[serde(rename = "YE")]
    Yemen,
    #[serde(rename = "YT")]
    Mayotte,
    #[serde(rename = "ZA")]
    SouthAfrica,
    #[serde(rename = "ZM")]
    Zambia,
    #[serde(rename = "ZW")]
    Zimbabwe,
}
