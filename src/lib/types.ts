import type { InertiaForm } from '@inertiajs/svelte';
import type { Snippet, } from 'svelte';
import type { FullAutoFill } from 'svelte/elements';
import type { Writable } from 'svelte/store';

export type IForm = Writable<InertiaForm<Record<string, any>>>

/**
 * Props for the dynamic form component.
 * Generic type T is the shape of your form data (e.g., { name: string }).
 */
/**
 * Props for configuring and rendering a form component.
 *
 * @template T - The shape of the form data, defaults to Record<string, any>.
 *
 * @property {string} [form_name] - Optional identifier for the form.
 * @property {IField[]} fields - List of form field definitions to render.
 * @property {InertiaForm<T>|null} form - Inertia form store created with useForm<T>().
 * @property {IBtnSubmit} [btnSubmit] - Submit button configuration (text, classes, etc.).
 * @property {IBtnReset} [btnReset] - Reset button configuration.
 * @property {boolean} [realtime] - Whether to enable real-time syncing (optional).
 * @property {string} [class] - Optional CSS classes to apply to the <form> element.
 * @property {HTMLFormElement | null} ref - Optional HTML attributes to apply to the <form> element.
 * @property {Snippet} [children] - Optional children to render inside the form.
 * @property {'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'} method - HTTP method for the form submission.
 * @property {string} action - Optional action URL for the form submission.
 */
export interface IFormProps<T = Record<string, any>> {
    /**
     * Optional identifier for the form.
     */
    form_name?: string;

    /**
     * List of form field definitions to render.
     */
    fields: IField[];

    /**
     * Inertia form store created with useForm<T>().
     */
    form: IForm;

    /**
     * Submit button configuration (text, classes, etc.).
     */
    btnSubmit?: IBtnSubmit;

    /**
     * Reset button configuration.
     */
    btnReset?: IBtnReset;

    /**
     * Whether to enable real-time syncing (optional).
     */
    realtime?: boolean;

    /**
     * Optional CSS classes to apply to the <form> element.
     */
    class?: string;

    /**
     * Optional HTML attributes to apply to the <form> element.
     */
    ref: HTMLFormElement | null;

    /**
     * Optional children to render inside the form.
     */
    children?: Snippet;

    /**
     * HTTP method for the form submission.
     * This should match the methods supported by Inertia.
     * Defaults to POST.
     */
    method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

    /**
     * Optional action URL for the form submission.
     */
    action: string;
}

/**
 * Field definition used to render dynamic form inputs.
 */
export interface IField<T extends string = 'input' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'autocomplete'> {
    /**
     * Input type, maps to a component defined in field config.
     */
    type: T;

    /**
     * Field name, should match keys used in Inertia's useForm().
     */
    name: string;

    /**
     * Optional label for the field, used for accessibility and display.
     */
    label?: string;

    /**
     * Optional initial value for this field (can be ignored if useForm handles it).
     */
    value?: any;

    /**
     * optional loading state of the field, useful for async operations.
     * This can be used to show a spinner or disable the field while loading.
     */
    loading?: boolean;

    /**
     * Attributes or props passed directly to the rendered input.
     */
    attributes?: Attributes<T>;

    /**
     * Optional field label or description (text or object).
     */
    description?: string | string[];

    /**
     * Optional prefix icon/component rendered before the input.
     */
    prefix?: Snippet;

    /**
     * Optional suffix icon/component rendered before the input.
     */
    suffix?: Snippet;

    /**
     * List of options for select, radio, autocomplete, etc.
     */
    options?: Array<{ label: string; value: any }>;

    /**
     * Extra metadata for custom rendering (e.g., grid span, wrapper class).
     */
    extra?: Record<string, any>;
}

export type IFieldProps = IField & {
    isInvalid: boolean;
    float?: boolean;
};

/**
 * Generic form field attributes, narrowed by field type.
 */
export type Attributes<T extends string = 'input' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'autocomplete'> =
    T extends 'input' ? InputAttributes :
    T extends 'textarea' ? TextareaAttributes :
    T extends 'select' ? SelectAttributes :
    T extends 'checkbox' | 'radio' ? CheckboxAttributes :
    T extends 'file' ? FileAttributes :
    BaseAttributes;

/**
 * Common attributes shared across all fields.
 */
interface BaseAttributes {
    /**
     * Unique DOM ID.
     */
    id?: string;

    /**
     * Optional placeholder.
     */
    placeholder?: string;

    /**
     * Extra classes for styling.
     */
    class?: string[];

    /**
     * Disable the field.
     */
    disabled?: boolean;

    /**
     * Make the field read-only.
     */
    readonly?: boolean;

    /**
     * Optional autocomplete behavior.
     */
    autocomplete?: FullAutoFill | null | undefined;

    /**
     * Optional autocorrect setting (for mobile).
     */
    autocorrect?: "" | "off" | "on" | null | undefined;

    /**
     * Spellcheck toggle.
     */
    spellcheck?: boolean;
}

/**
 * Attributes specific to <input> fields.
 */
interface InputAttributes extends BaseAttributes {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'range';
    min?: number;
    max?: number;
    step?: number;
    pattern?: string;
    maxlength?: number;
    minlength?: number;
    inputmode?: 'text' | 'numeric' | 'decimal' | 'email' | 'tel' | 'url';
}

/**
 * Attributes specific to <textarea> fields.
 */
interface TextareaAttributes extends BaseAttributes {
    rows?: number;
    cols?: number;
    maxlength?: number;
    minlength?: number;
    wrap?: 'hard' | 'soft' | 'off';
}

/**
 * Attributes specific to <select> fields.
 */
interface SelectAttributes extends BaseAttributes {
    multiple?: boolean;
    size?: number;
}

/**
 * Attributes for checkbox and radio inputs.
 */
interface CheckboxAttributes extends BaseAttributes {
    value?: string | number | boolean;
    checked?: boolean;
}

/**
 * Attributes for file inputs.
 */
interface FileAttributes extends BaseAttributes {
    accept?: string;
    multiple?: boolean;
}


export interface AutoCompleteItems {
    title: string;
    value: any;
}

export type InputProps<T extends string = 'input' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'autocomplete'> = {
    value: any;
} & Attributes<T>

export interface IPrefix {
    tag: string;
    classes?: string[];
}

export interface ISubmit {
    type: string;
    text: string;
    classes: string[];
}

export interface IBtnSubmit {
    text?: string;
    classes?: string[];
}

export interface IBtnReset {
    text?: string;
    classes?: string[];
}