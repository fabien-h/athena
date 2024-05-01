import { z } from 'zod';
import { APISpecFieldTypeKeysEnum, BaseAPISpecMethodField } from './baseField';

export const DateValidation = z.object({
    value: z.number(),
    message: z.string().optional(),
});
export type DateValidation = z.infer<typeof DateValidation>;

export enum DateValidationKeys {
    gt = 'gt',
    gte = 'gte',
    lt = 'lt',
    lte = 'lte',
}
export const DateValidationKeysEnum = z.nativeEnum(DateValidationKeys);
export type DateValidationKeysEnum = z.infer<typeof DateValidationKeysEnum>;

export const DateValidationKeysDisplay = {
    [DateValidationKeys.gt]: 'Greater Than',
    [DateValidationKeys.gte]: 'Greater Than Or Equal',
    [DateValidationKeys.lt]: 'Lesser Than',
    [DateValidationKeys.lte]: 'Lesser Than Or Equal',
};

export const DateField = BaseAPISpecMethodField.extend({
    field_type: z.union([
        z.literal(APISpecFieldTypeKeysEnum.enum.Date),
        z.literal(APISpecFieldTypeKeysEnum.enum.DateTime),
        z.literal(APISpecFieldTypeKeysEnum.enum.Timestamp),
    ]),
    validations: z.object({
        [DateValidationKeys.gt]: DateValidation.optional(),
        [DateValidationKeys.gte]: DateValidation.optional(),
        [DateValidationKeys.lt]: DateValidation.optional(),
        [DateValidationKeys.lte]: DateValidation.optional(),
    }).optional(),
});
export type DateField = z.infer<typeof DateField>;
