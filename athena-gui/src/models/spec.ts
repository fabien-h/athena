import { z } from "zod";
import { HttpErrorResponseStatusCode } from "./constants/http_codes";
import { NumberField } from "./methodFields/number_field";
import { DateField } from "./methodFields/date_field";
import { BytesField } from "./methodFields/bytes_field";
import { EnumField } from "./methodFields/enum_field";
import { StringField } from "./methodFields/string_field";
import { BoolField } from "./methodFields/bool_field";

export const APIVersion = z.string().refine((val) => {
    const parts = val.split('.');
    return parts.length === 3 && parts.every((part) => /^\d+$/.test(part));
}, 'Invalid semantic version');
export type APIVersion = z.infer<typeof APIVersion>;

export const APILicence = z.object({
    name: z.string(),
    url: z.string().optional(),
});
export type APILicence = z.infer<typeof APILicence>;

export const APIInfos = z.object({
    name: z.string(),
    version: APIVersion,
    description: z.string(),
    licence: APILicence,
});
export type APIInfos = z.infer<typeof APIInfos>;

export const APISpecHeader = z.object({
    name: z.string(),
    description: z.string(),
});
export type APISpecHeader = z.infer<typeof APISpecHeader>;

export const APISpecError = z.object({
    name: z.string(),
    description: z.string(),
    http_code: HttpErrorResponseStatusCode,
    message_type: z.string(),
    headers: z.array(APISpecHeader),
});
export type APISpecError = z.infer<typeof APISpecError>;

export const APISpecMethodField = z.union([
    BoolField,
    BytesField,
    DateField,
    EnumField,
    NumberField,
    StringField,
]);
export type APISpecMethodField = z.infer<typeof APISpecMethodField>;

export const APISpecEnumValue = z.object({
    value: z.string(),
    description: z.string(),
});
export type APISpecEnumValue = z.infer<typeof APISpecEnumValue>;

export const APISpecEnum = z.object({
    name: z.string(),
    description: z.string(),
    values: z.array(APISpecEnumValue),
});
export type APISpecEnum = z.infer<typeof APISpecEnum>;

export const APISpecMethod = z.object({
    name: z.string(),
    description: z.string(),
    enums: z.array(APISpecEnum),
    errors: z.array(APISpecError),
    request_headers: z.array(APISpecHeader),
    request_fields: z.array(APISpecMethodField),
    response_headers: z.array(APISpecHeader),
    response_fields: z.array(APISpecMethodField),
});
export type APISpecMethod = z.infer<typeof APISpecMethod>;

export const APISpecService = z.object({
    name: z.string(),
    description: z.string(),
    enums: z.array(APISpecEnum),
    errors: z.array(APISpecError),
    request_headers: z.array(APISpecHeader),
    response_headers: z.array(APISpecHeader),
    methods: z.array(APISpecMethod),
});
export type APISpecService = z.infer<typeof APISpecService>;

export const APISpecGlobal = z.object({
    enums: z.array(APISpecEnum),
    errors: z.array(APISpecError),
    request_headers: z.array(APISpecHeader),
    response_headers: z.array(APISpecHeader),
});
export type APISpecGlobal = z.infer<typeof APISpecGlobal>;

export const APISpec = z.object({
    infos: APIInfos,
    global: APISpecGlobal,
    services: z.array(APISpecService),
});
export type APISpec = z.infer<typeof APISpec>;
