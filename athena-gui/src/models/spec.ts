import { z } from "zod";
import { HttpErrorResponseStatusCode } from "./constants/http_codes";

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

export const ByteValidation = z.object({
    value: z.number().int(),
    message: z.string().optional(),
});
export type ByteValidation = z.infer<typeof ByteValidation>;

export const BytePatternValidation = z.object({
    pattern: z.string(),
    message: z.string().optional(),
});
export type BytePatternValidation = z.infer<typeof BytePatternValidation>;

export const ByteValidationsRules = z.discriminatedUnion('type', [
    z.object({ type: z.literal('minlength'), value: ByteValidation }),
    z.object({ type: z.literal('maxlength'), value: ByteValidation }),
    z.object({ type: z.literal('exactlength'), value: ByteValidation }),
    z.object({ type: z.literal('pattern'), value: BytePatternValidation }),
]);
export type ByteValidationsRules = z.infer<typeof ByteValidationsRules>;

export const BytesField = z.object({
    validations: z.record(ByteValidationsRules).optional(),
});
export type BytesField = z.infer<typeof BytesField>;

export const DateValidation = z.object({
    value: z.number().int(),
    message: z.string().optional(),
});
export type DateValidation = z.infer<typeof DateValidation>;

export const DateValidationsRules = z.discriminatedUnion('type', [
    z.object({ type: z.literal('gt'), value: DateValidation }),
    z.object({ type: z.literal('gte'), value: DateValidation }),
    z.object({ type: z.literal('lt'), value: DateValidation }),
    z.object({ type: z.literal('lte'), value: DateValidation }),
]);
export type DateValidationsRules = z.infer<typeof DateValidationsRules>;

export const DateField = z.object({
    validations: z.record(DateValidationsRules).optional(),
});
export type DateField = z.infer<typeof DateField>;

export const EnumValidation = z.object({
    value: z.array(z.string()),
    message: z.string().optional(),
});


export const EnumValidationsRules = z.discriminatedUnion('type', [
    z.object({ type: z.literal('matches'), value: EnumValidation }),
]);

export const EnumField = z.object({
    validations: z.record(EnumValidationsRules).optional(),
});

export const NumberValidation = z.object({
    value: z.number().int(),
    message: z.string().optional(),
});

export const NumberValidationsRules = z.discriminatedUnion('type', [
    z.object({ type: z.literal('gt'), value: NumberValidation }),
    z.object({ type: z.literal('gte'), value: NumberValidation }),
    z.object({ type: z.literal('lt'), value: NumberValidation }),
    z.object({ type: z.literal('lte'), value: NumberValidation }),
    z.object({ type: z.literal('multipleOf'), value: NumberValidation }),
]);

export const NumericField = z.object({
    validations: z.record(NumberValidationsRules).optional(),
});


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

export const BoolField = z.object({});
export type BoolField = z.infer<typeof BoolField>;

export const APISpecFieldType = z.discriminatedUnion('type', [
    z.object({ type: z.literal('Bool'), value: BoolField }),
    z.object({ type: z.literal('Int32'), value: NumericField }),
    z.object({ type: z.literal('Int64'), value: NumericField }),
    z.object({ type: z.literal('Float64'), value: NumericField }),
    z.object({ type: z.literal('Double'), value: NumericField }),
    z.object({ type: z.literal('Bytes'), value: BytesField }),
    z.object({ type: z.literal('Date'), value: DateField }),
    z.object({ type: z.literal('DateTime'), value: DateField }),
    z.object({ type: z.literal('Timestamp'), value: DateField }),
    z.object({ type: z.literal('Enum'), value: EnumField }),
]);

export const APISpecRequestField = z.object({
    name: z.string(),
    field_type: APISpecFieldType,
    description: z.string().optional(),
    default: z.any().optional(),
    required: z.boolean().optional(),
});
export type APISpecRequestField = z.infer<typeof APISpecRequestField>;

export const APISpecEnumValue = z.object({
    name: z.string(),
    value: z.number().int(),
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
    response_headers: z.array(APISpecHeader),
    request_fields: z.array(APISpecRequestField),
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
