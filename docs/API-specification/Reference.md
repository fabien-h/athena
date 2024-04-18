# Reference

## Full example

This is a full example to show all the possible fields that can be used in a specification.

```json title="API full example"
{
  "name": "MyRPCAPI",
  "version": "1.0.0",
  "description": "Description of the RPC API",
  "global": {
    "enums": [
      // Global enums
    ],
    "errors": [
      {
        "name": "InternalServerError",
        "description": "An unexpected error occurred on the server",
        "httpCode": 500,
        "messageType": "ErrorDetails"
      }
    ],
    "requestHeaders": [
      {
        "name": "X-API-Key",
        "description": "The API key for authentication"
      }
    ],
    "responseHeaders": [
      {
        "name": "X-Request-ID",
        "description": "A unique identifier for the request"
      }
    ]
  },
  "services": [
    {
      "name": "UserService",
      "description": "Service for managing users",
      "enums": [
        // Enums scoped to this service
      ],
      "errors": [
        // Errors scoped to this service
      ],
      "requestHeaders": [
        {
          "name": "X-User-Agent",
          "description": "The user agent string"
        }
      ],
      "responseHeaders": [
        {
          "name": "X-Rate-Limit-Remaining",
          "description": "The number of requests remaining in the current rate limit window"
        }
      ],
      "methods": [
        {
          "name": "CreateUser",
          "description": "Creates a new user",
          "enums": [
            // Enums scoped to this method
          ],
          "requestHeaders": [
            {
              "name": "X-Idempotency-Key",
              "description": "A unique key for idempotent requests"
            }
          ],
          "requestFields": [
            {
              "name": "name",
              "type": "string",
              "description": "The user's full name",
              "validation": {
                "minLength": 2,
                "maxLength": 100
              },
              "required": true
            },
            {
              "name": "email",
              "type": "string",
              "description": "The user's email address",
              "validation": {
                "email": "You must provide a valid email"
              },
              "required": true
            },
            {
              "name": "password",
              "type": "string",
              "description": "The user's password",
              "validation": {
                "minLength": 8
              },
              "required": true
            }
          ],
          "responseHeaders": [
            {
              "name": "Location",
              "description": "The URL of the newly created resource"
            }
          ],
          "responseFields": [
            {
              "name": "user",
              "type": "User",
              "description": "The newly created user"
            },
          ],
          "errors": [
            {
              "name": "EmailAlreadyExists",
              "description": "The provided email address is already in use",
              "httpCode": 409
            },
          ],
          "middleware": [
            // Middleware components for this method
          ],
        },
        {
          "name": "GetUser",
          "description": "Retrieves a user by ID",
          "requestMessageType": "GetUserRequest",
          "responseMessageType": "User",
          "errors": [
            // Errors specific to this method
          ],
          "middleware": [
            // Middleware components for this method
          ],
        }
      ]
    },
    {
      "name": "ProductService",
      "description": "Service for managing products",
      // ... (service definition)
    }
  ]
}
```

## Specification fields list

### Root level fields

At the top level of the API, they define the basic properties.

- `name`: a string to name your API.
- `version`: a string to version your API. You should follow [semver](https://semver.org/).
- `description`: a string to describe your API.

### Enums

Enums can be defined at three different levels in the specification: globally, within a service, or within a message type. They are placed in an array of enums at each level.

```json title="enum example"
"enums": [
    {
        "name": "UserRole",
        "description": "Represents the roles a user can have",
        "values": [
        {
            "name": "ADMIN",
            "value": 0,
            "description": "Administrator role"
        },
        {
            "name": "MANAGER",
            "value": 1,
            "description": "Manager role"
        },
        {
            "name": "USER",
            "value": 2,
            "description": "Regular user role"
        }
        ]
    }
]
```

We define enums with the following properties:

- `name`: The unique name of the enum.
- `description` (optional): A description of what the enum represents.
- `values`: An array of enum values, each with the following properties:
    - `name`: The name of the enum value.
    - `value`: The numerical or string value associated with the enum value. This is not optional since auto-assignation may cause major issues in case of updates.
    - `description` (optional): A description of the enum value.

You can define enums with numerical or string values by adjusting the value property accordingly.

### Errors

Errors can be defined at three levels: globally, within a service, or within a specific method.

```json title="error example"
"errors": [
    {
        "name": "Unauthorized",
        "description": "You are not authentified",
        "httpCode": 401,
        "messageType": "Unauthorized",
        "headers": [
            {
                "name": "Set-Cookie",
                "description": "this header will unset the authentication cookie"
            }
        ],
    },
    {
        "name": "ProductAlreadyExists",
        "description": "A product with the same ID already exists",
        "httpCode": 409,
        "messageType": "ProductAlreadyExistsError"
    }
]
```

We define errors with the following properties:

- `name`: The unique name of the error.
- `description`: A description of the error.
- `httpCode`: The HTTP status code associated with the error.
- `headers` (optional): An array of headers that can be included in the error response, each with the following properties:
    - `name`: The name of the header.
    - `description` : The description of the header.
- `messageType` (optional): The name of a message type that represents the error payload or additional error details.

### Message field

#### Possible Data Types for Fields

1. Primitive Types

    - `string`
    - `bool` (boolean)
    - `int32`
    - `int64`
    - `float64`
    - `double`
    - `bytes` (byte array)

2. Date and Time Types

    - `date` (date without time)
    - `datetime` (date and time)
    - `timestamp` (Unix timestamp)

3. Enum Types

    - Any enum defined within the specification can be used as a field type.

4. Message Types

    - Any message type defined within the specification can be used as a field type for nested structures.

5. Collection Types

    - `array<Type>` (an array of the specified type)
    - `map<KeyType, ValueType>` (a map with the specified key and value types)

#### Syntax for Defining Fields

*Primitive Types*

```json title=""
{
  "name": "fieldName",
  "type": "string"
},
{
  "name": "fieldName",
  "type": "bool"
},
{
  "name": "fieldName",
  "type": "int64"
},
```

*Date and Time Types*

```json title=""
{
  "name": "birthdate",
  "type": "date"
},
{
  "name": "lastLogin",
  "type": "datetime"
},
{
  "name": "createdAt",
  "type": "timestamp"
}
```

*Enum Types*

```json title=""
{
  "name": "userRole",
  "type": "UserRole"
}
```

*Message Types (Nested Structures)*

```json title=""
{
  "name": "address",
  "type": "Address"
}
```

*Arrays*

```json title=""
{
  "name": "tags",
  "type": "array<string>"
},
{
  "name": "orderHistory",
  "type": "array<Order>"
}
```

*Maps*

```json title=""
{
  "name": "metadata",
  "type": "map<string, string>"
},
{
  "name": "productInventory",
  "type": "map<string, int32>"
}
```

#### Additional Field Options

- `description` (optional): A description of the field.
- `default` (optional): A default value for the field.
- `required` (optional, boolean): Indicates whether the field is required or not.

*An array of dates*

```json title=""
{
  "name": "upcomingEvents",
  "type": "array<date>",
  "description": "A list of upcoming event dates"
}
```

*A map with enum keys and message type values*

```json title=""
{
  "name": "productVariants",
  "type": "map<ProductVariant, ProductDetails>",
  "description": "Product variants mapped to their details"
}
```

*A field with a default value*

```json title=""
{
  "name": "isActive",
  "type": "bool",
  "default": true,
  "description": "Indicates whether the user account is active"
}
```

*A required field*

```json title=""
{
  "name": "email",
  "type": "string",
  "required": true,
  "description": "The user's email address"
}
```
### Message field validation

Each message field for a request or a response can have a validations property, a map of validations.

```json title=""
{
  "name": "email",
  "type": "string",
  "required": true,
  "description": "The user's email address",
  "validations": {
    "isEmail": {
        "message": "You must enter a valid email."
    }
  }
},
{
  "name": "age",
  "type": "int32",
  "required": true,
  "description": "The user's age",
  "validations": {
    "min": {
        "value": 18,
        "message": "Your age must be over 18."
    },
    "max": {
        "value": 150,
        "message": "We do not accept vampires."
    }
  }
},
{
  "name": "city",
  "type": "string",
  "required": true,
  "description": "The user's city",
  "validations": {
    "lettersOnly": true,
    "max": {
        "value": 150,
        "message": "We do not accept vampires."
    }
  }
},
```

- The message is optional.
- The value is not always required depending on the validation.
- Depending on the type of validation addtiionnal option may be used.
- If there are no option set, just set it to true.

Depending on the type of field, the following validations are available.

#### String fields

| key | validation | options |
| --- | --- | --- |
| `ascii` | contains only ASCII chars<br>(no value) | |
| `base32` | base32 encoded<br>(no value) | |
| `base58` | base58 encoded<br>(no value) | |
| `base64` | base64 encoded<br>(no value) | |
| `BIC` | valid BIC (Bank Identification Code)<br>(no value) | |
| `BtcAddress` | valid BTC address.<br>(no value) | |
| `CreditCardNumer` | valid credit card number<br>(no value) | |
| `dataURI` | valid DataURI<br>(no value) | |
| `dateRFC3339` | valid [RFC 3339 date](https://www.rfc-editor.org/rfc/rfc3339)<br>(no value) | |
| `EAN` | valid EAN (European Article Number)<br>(no value) | |
| `email` | valid email<br>(no value) | |
| `enum` | is included in an array of strings<br>value: `[String; n]` | `caseSensitive`: boolean, default: `false` |
| `equals` | must equal the value<br>value: `string` | |
| `EthereumAddress` | valid Ethereum address.<br>(no value) | |
| `FQN` | valid fully qualified domain name (e.g. domain.com)<br>(no value) | |
| `FreightContainerID` | valid ISO 6346 shipping container identification<br>(no value) | |
| `hash` | valid hash<br>value: the algorithm; one of [`crc32`, `crc32b`, `md4`, `md5`, `ripemd128`, `ripemd160`, `sha1`, `sha256`, `sha384`, `sha512`, `tiger128`, `tiger160`, `tiger192`] | |
| `hexadecimal` | hexadecimal number<br>(no value) | |
| `hsl` | HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification<br>(no value) | |
| `IBAN` | valid IBAN (International Bank Account Number)<br>(no value) | `acceptedCountries`(optional): array of country codes |
| `idCardNumber` | valid id card number<br>(no value) | `countries`: array of country code matching [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `IMEI` | IMEI number, `###############` or `##-######-######-#` | `allowHyphens` (optional): boolean, default: `true` |
| `includes` | must include the value<br>value: `string` | `ignoreCase`(optional): boolean |
| `IP` | valid [IP adress](https://www.ibm.com/docs/en/ts3500-tape-library?topic=functionality-ipv4-ipv6-address-formats), v4 or v6<br>(no value) | |
| `IPv4` | valid [IPv4](https://www.ibm.com/docs/en/ts3500-tape-library?topic=functionality-ipv4-ipv6-address-formats)<br>(no value) | |
| `IPv6` | valid [IPv6](https://www.ibm.com/docs/en/ts3500-tape-library?topic=functionality-ipv4-ipv6-address-formats)<br>(no value) | |
| `ISBN` | valid ISBN (International Standard Book Number)<br>(no value) | |
| `ISIN` | valid [ISIN](https://www.isin.org/) (International Securities Identification Numbers)<br>(no value) | |
| `isLowerCase` | all the letters are in lowercase<br>(no value) | |
| `ISO31661Alpha2` | valid [ISO 31661 Alpha2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) 2 letters country code<br>(no value) | |
| `ISO31661Alpha3` | valid [ISO 31661 Alpha3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) 3 letters country code<br>(no value) | |
| `ISO4217` | valid [ISO4217](https://en.wikipedia.org/wiki/ISO_4217) currency code<br>(no value) | |
| `ISO6346` | valid [ISO 6346](https://en.wikipedia.org/wiki/ISO_6346) shipping container identification<br>(no value) | |
| `ISO6391` | valid [ISO 6391](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code<br>(no value) | |
| `ISO8601` | valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date<br>(no value) | |
| `ISRC` | valid [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code) (International Standard Recording Code) code for uniquely identifying sound recordings and music video recordings<br>(no value) | |
| `ISSN` | valid [ISSN](https://en.wikipedia.org/wiki/ISSN) (International Standard Serial Number) code to uniquely identify a serial publication<br>(no value) | |
| `isUpperCase` | all the letters are in uppercase<br>(no value) | |
| `json` | valid json<br>(no value) | |
| `JWT` | valid [JWT](https://jwt.io/) (Json Web Token)<br>(no value) | |
| `lenghExact` | has an exact lenght<br> value: `int` | |
| `lettersAndNumbersOnly` | contains only letters and numbers ; equivalent to a-zA-Z0-9<br>(no value) | `acceptSpaces`: boolean (default false) |
| `lettersOnly` | contains only letters ; equivalent to a-zA-Z<br>(no value) | `acceptSpaces`: boolean (default false) |
| `locale` | is a locale (eg: `en-GB`, `fr-FR` ), [ISO 639 Set 1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) - [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) <br>(no value) | `acceptedLocales`: array of locales |
| `luhnNumber` | matches a [Luhn number](https://en.wikipedia.org/wiki/Luhn_algorithm)<br>(no value) | |
| `macAddress` | valid [MAC address](https://en.wikipedia.org/wiki/MAC_address)<br>(no value) | |
| `magnetURI` | valid [Magnet URI](https://en.wikipedia.org/wiki/Magnet_URI_scheme)<br>(no value) | |
| `mailtoURI` | valid [Mailto URI](https://en.wikipedia.org/wiki/Mailto)<br>(no value) | |
| `maxLength` | has a max lenght<br> value: `int` | |
| `mimeType` | valid [MIME Type URI](https://en.wikipedia.org/wiki/Media_type)<br>(no value) | |
| `minLength` | has a min lenght<br> value: `int` | |
| `mobilePhone` | valid phone number<br>(no value) | `acceptedLocales`: array of locales |
| `mongoId` | valid [Mongo ObjectId](https://www.mongodb.com/docs/manual/reference/method/ObjectId/)<br>(no value) | |
| `numbersOnly` | contains only numbers ; equivalent to 0-9<br>(no value) | `acceptSpaces`: boolean (default false)<br>`acceptSign`: boolean (default false) |
| `octal` | valid [octal number](https://en.wikipedia.org/wiki/Octal)<br>(no value) | |
| `passportNumber` | valid passport number<br>(no value) | `countries`: array of country code matching [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `port` | valid [port number](https://en.wikipedia.org/wiki/Port_(computer_networking))<br>(no value) | |
| `postalCode` | valid postal code<br>(no value) | `countries`: array of country code matching [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `regex` | matches a [regular expression](https://en.wikipedia.org/wiki/Regular_expression)<br>value: `string` as a valid regex eg. `[hc]at` | |
| `rgbColor` | valid [RGB color](https://en.wikipedia.org/wiki/RGB_color_model)<br>(no value) | |
| `semVer` | valid [semver value](https://semver.org/)<br>(no value) | |
| `url` | valid [octal url](https://en.wikipedia.org/wiki/URL)<br>(no value) | |
| `urlsafe` | base64 encoded and urlsafe<br>(no value) | |
| `uuid` | valid 128 bits [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))<br>(no value) | |
| `vatNumber` | valid [VAT Number](https://en.wikipedia.org/wiki/VAT_identification_number)<br>(no value) | `countries`: array of country code matching [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `webColor` | [hexadecimal color](https://en.wikipedia.org/wiki/Web_colors)<br>(no value) | |

#### Numeric fields

| key | validation |
| --- | --- |
| `gt` | min value excluded (greater than)<br>value: `int or float` |
| `gte` | min value included (greater than or equal)<br>value: `int or float` |
| `lt` | max value excluded (lesser than)<br>value: `int or float` |
| `lte` | max value included (lesser than or equal)<br>value: `int or float` |
| `multipleOf` | can be divided by the value<br>value: `int or float` |

#### Date and Time fields

| key | validation |
| --- | --- |
| `gt` | min value excluded (greater than)<br>value: `date` |
| `gte` | min value included (greater than or equal)<br>value: `date` |
| `lt` | max value excluded (lesser than)<br>value: `date` |
| `lte` | max value included (lesser than or equal)<br>value: `date` |

#### Array and Map fields

| key | validation |
| --- | --- |
| `minItems` | minimum amount of items in the collection <br>value: `int` |
| `maxItems` | maximum amount of items in the collection <br>value: `int` |
| `unique` | specify is the items in the collection must be unique <br>value: `boolean`<br>default: `false` |

### Requests message types

Request message types define the structure of the data that needs to be sent from the client to the server when invoking an RPC method. Here's how we can represent them in the specification:

```json title="Request message type example"
{
  "name": "CreateUserRequest",
  "description": "Request for creating a new user",
  "fields": [
    {
      "name": "name",
      "type": "string",
      "description": "The user's full name",
      "validation": {
        "minLength": 2,
        "maxLength": 100
      },
      "required": true
    },
    {
      "name": "email",
      "type": "string",
      "description": "The user's email address",
      "validation": {
        "email": {
            "message": "You must enter a valid email"
        }
      },
      "required": true
    },
    {
      "name": "password",
      "type": "string",
      "description": "The user's password",
      "validation": {
        "minLength": 8
      },
      "required": true
    }
  ]
}
```

In this example, the CreateUserRequest message type defines the structure of the data that needs to be sent when creating a new user. It includes fields for name, email, and password, each with its own validation rules and descriptions.

### Middleware

```json title="middlewares example"
"middleware": [
  {
    "name": "AuthenticationMiddleware",
    "description": "Middleware for authenticating the request",
    "implementation": "./middleware/authenticating.rs",
    "order": "before"
  },
  {
    "name": "LoggingMiddleware",
    "description": "Middleware for logging the request and response",
    "implementation": "./middleware/logging.rs",
    "order": "before",
    "options": {
      "logLevel": "info"
    }
  },
  {
    "name": "CacheMiddleware",
    "description": "Middleware for caching the response",
    "implementation": "./middleware/caching.rs",
    "order": "after",
    "options": {
      "cacheExpiration": 3600
    }
  }
],
```

Each middleware component object in the array has the following properties:

- `name`: The unique name of the middleware component.
- `description` (optional): A description of the middleware component's purpose.
- `implementation`: contains a file path (e.g., ./middleware/authentication.rs)
- `order`: A string value indicating whether the middleware should be executed `before` or `after` the main method handler logic.
- `options` (optional): An object containing configuration options or settings specific to the middleware component.

During the code generation process, Athena parses the middleware array and identify the middleware components with custom implementations. For each custom middleware component, Athena generates a placeholder or an integration point within the generated code, allowing the developers to inject their custom implementation.
