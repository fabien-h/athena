import { z } from 'zod';
import { APISpecFieldTypeKeysEnum, BaseAPISpecMethodField } from './baseField';

export const EnumLocalization = z.enum(['method', 'service', 'global']);
export type EnumLocalization = z.infer<typeof EnumLocalization>;

export const EnumField = BaseAPISpecMethodField.extend({
    field_type: z.literal(APISpecFieldTypeKeysEnum.enum.Enum),
    validations: z.object({
        enum_name: z.string(),
        enum_localization: EnumLocalization.default('global'),
    })
});
export type EnumField = z.infer<typeof EnumField>;

