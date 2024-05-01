import { z } from 'zod';
import { APISpecFieldTypeKeysEnum, BaseAPISpecMethodField } from './baseField';

export const NumberValidation = z.object({
    value: z.number(),
    message: z.string().optional(),
});
export type NumberValidation = z.infer<typeof NumberValidation>;

export enum NumberValidationKeys {
    gt = 'gt',
    gte = 'gte',
    lt = 'lt',
    lte = 'lte',
    multipleOf = 'multipleOf',
}
export const NumberValidationKeysEnum = z.nativeEnum(NumberValidationKeys);
export type NumberValidationKeysEnum = z.infer<typeof NumberValidationKeysEnum>;

export const NumberValidationKeysDisplay = {
    [NumberValidationKeys.gt]: 'Greater Than',
    [NumberValidationKeys.gte]: 'Greater Than Or Equal',
    [NumberValidationKeys.lt]: 'Lesser Than',
    [NumberValidationKeys.lte]: 'Lesser Than Or Equal',
    [NumberValidationKeys.multipleOf]: 'Multiple Of',
};

export const NumberField = BaseAPISpecMethodField.extend({
    field_type: z.union([
        z.literal(APISpecFieldTypeKeysEnum.enum.Double),
        z.literal(APISpecFieldTypeKeysEnum.enum.Float64),
        z.literal(APISpecFieldTypeKeysEnum.enum.Int32),
        z.literal(APISpecFieldTypeKeysEnum.enum.Int64),
    ]),
    validations: z.object({
        [NumberValidationKeys.gt]: NumberValidation.optional(),
        [NumberValidationKeys.gte]: NumberValidation.optional(),
        [NumberValidationKeys.lt]: NumberValidation.optional(),
        [NumberValidationKeys.lte]: NumberValidation.optional(),
        [NumberValidationKeys.multipleOf]: NumberValidation.optional(),
    }).optional(),
});
export type NumberField = z.infer<typeof NumberField>;