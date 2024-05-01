import { z } from "zod";

export const APISpecFieldTypeKeys = {
    Bool: 'Bool',
    Bytes: 'Bytes',
    Date: 'Date',
    DateTime: 'DateTime',
    Double: 'Double',
    Enum: 'Enum',
    Float64: 'Float64',
    Int32: 'Int32',
    Int64: 'Int64',
    String: 'String',
    Timestamp: 'Timestamp',
} as const;
export const APISpecFieldTypeKeysEnum = z.nativeEnum(APISpecFieldTypeKeys);
export type APISpecFieldTypeKeysEnum = z.infer<typeof APISpecFieldTypeKeysEnum>;

export const BaseAPISpecMethodField = z.object({
    name: z.string(),
    description: z.any().optional(),
    default: z.any().optional(),
    required: z.boolean().optional(),
});