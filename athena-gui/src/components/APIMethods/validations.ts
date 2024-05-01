import { APISpecFieldTypeKeys, type APISpecFieldTypeKeysEnum } from "../../models/methodFields/baseField";
import { BytesValidationKeysDisplay } from "../../models/methodFields/bytes_field";
import { DateValidationKeysDisplay } from "../../models/methodFields/date_field";
import { NumberValidationKeysDisplay } from "../../models/methodFields/number_field";
import { StringValidationKeysDisplay } from "../../models/methodFields/string_field";

export const getPossibleValidations = (field_type: APISpecFieldTypeKeysEnum) => {
    let base_keys = {};

    if (
        field_type === APISpecFieldTypeKeys.Date
        || field_type === APISpecFieldTypeKeys.DateTime
        || field_type === APISpecFieldTypeKeys.Timestamp
    ) {
        base_keys = DateValidationKeysDisplay;
    }

    if (
        field_type === APISpecFieldTypeKeys.Int32
        || field_type === APISpecFieldTypeKeys.Int64
        || field_type === APISpecFieldTypeKeys.Float64
        || field_type === APISpecFieldTypeKeys.Double
    ) {
        base_keys = NumberValidationKeysDisplay;
    }

    if (
        field_type === APISpecFieldTypeKeys.String
    ) {
        base_keys = StringValidationKeysDisplay;
    }

    if (
        field_type === APISpecFieldTypeKeys.Bytes
    ) {
        base_keys = BytesValidationKeysDisplay;
    }

    return Object.entries(base_keys).map(
        ([key, value]) => ({
            label: value,
            value: key,
        })
    );
};