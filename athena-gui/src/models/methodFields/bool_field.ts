import { z } from 'zod';
import { APISpecFieldTypeKeysEnum, BaseAPISpecMethodField } from './baseField';

export const BoolField = BaseAPISpecMethodField.extend({
    field_type: z.literal(APISpecFieldTypeKeysEnum.enum.Enum),
});
export type BoolField = z.infer<typeof BoolField>;
