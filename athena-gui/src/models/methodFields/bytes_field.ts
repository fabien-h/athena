import { z } from 'zod';
import { APISpecFieldTypeKeysEnum, BaseAPISpecMethodField } from './baseField';

export const BytesValidation = z.object({
    value: z.string(),
    message: z.string().optional(),
});
export type BytesValidation = z.infer<typeof BytesValidation>;

export enum BytesValidationKeys {
    minlength = 'minlength',
    maxlength = 'maxlength',
    exactlength = 'exactlength',
    pattern = 'pattern',
}
export const BytesValidationKeysEnum = z.nativeEnum(BytesValidationKeys);
export type BytesValidationKeysEnum = z.infer<typeof BytesValidationKeysEnum>;

export const BytesValidationKeysDisplay = {
    [BytesValidationKeys.minlength]: 'Min length',
    [BytesValidationKeys.maxlength]: 'Max length',
    [BytesValidationKeys.exactlength]: 'Exact ength',
    [BytesValidationKeys.pattern]: 'Pattern',
};

export const BytesField = BaseAPISpecMethodField.extend({
    field_type: z.literal(APISpecFieldTypeKeysEnum.enum.Bytes),
    validations: z.object({
        [BytesValidationKeys.minlength]: BytesValidation.optional(),
        [BytesValidationKeys.maxlength]: BytesValidation.optional(),
        [BytesValidationKeys.exactlength]: BytesValidation.optional(),
        [BytesValidationKeys.pattern]: BytesValidation.optional(),
    }).optional(),
});
export type BytesField = z.infer<typeof BytesField>;
