import { PropType } from 'vue'

export enum SchemaTypes {
    NUMBER = 'number',
    INTEGER = 'integer',
    STRING = 'string',
    OBJECT = 'object',
    ARRAY = 'array',
    BOOLEAN = 'boolean',
}

export interface Schema {
    type: SchemaTypes | string;
    const?: any;
    format?: string;
    default?: any;
    properties?: {
        [key: string]: Schema | { $refs: string}
    },
    [key: string]: any;
}

export const FiledPropsDefine = {
    schema: {
        type: Object as PropType<Schema>,
        required: true
    },
    value: {
        required: true
    },
    onChange: {
        type: Function as PropType<(v: any) => void>,
        required: true
    }
} as const;