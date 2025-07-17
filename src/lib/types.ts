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
     * This can be used to uniquely identify the form instance, especially when dealing with multiple forms on the same page.
     */
    form_name?: string;

    /**
     * List of form field definitions to render.
     * Each field should conform to the IField interface, which defines the structure and properties of the form fields.
     */
    fields: IField[];

    /**
     * Inertia form store created with useForm<T>().
     * This object manages the form state and handles submissions, validation, and other form-related logic.
     */
    form?: IForm;

    /**
     * Optional data object to pre-fill the form fields.
     * This can be used to set initial values for the form fields when the form is rendered.
     */
    data?: T;

    /**
     * Optional button props to be used in rendering buttons at the footer of the form.
     * This allows for customization of button appearance and behavior, such as text, styles, and click handlers.
     */
    buttons?: ButtonProp[];

    /**
     * Whether to enable real-time syncing (optional).
     * If true, the form will automatically sync its state with the server as the user makes changes.
     */
    realtime?: boolean;

    /**
     * Optional CSS classes to apply to the <form> element.
     * This allows for custom styling of the form element using Tailwind CSS or other CSS frameworks.
     */
    class?: string;

    /**
     * Optional reference to the HTMLFormElement.
     * This can be used to directly manipulate the form element or access its properties and methods.
     */
    ref: HTMLFormElement | null;

    /**
     * Optional children to render inside the form.
     * This allows for additional content, such as headings or instructions, to be included within the form.
     */
    children?: Snippet;

    /**
     * HTTP method for the form submission.
     * This should match the methods supported by Inertia. Defaults to POST.
     * Common methods include POST for creating resources, GET for retrieving data, and PUT/PATCH for updating resources.
     */
    method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

    /**
     * Optional action URL for the form submission.
     * This is the endpoint where the form data will be sent when the form is submitted.
     */
    action: string;

    /**
     * Optional header content to render above the form.
     * This can be used to display a title or instructions related to the form.
     */
    header?: Snippet | {title:  string, subtitle?: string};

    /**
     * Optional footer content to render below the form.
     * This can be used to display additional information or actions related to the form, such as disclaimers or links.
     */
    footer?: Snippet;
}


/**
 * ButtonProp defines the properties for a customizable button component.
 */
export type ButtonProp = {
    /**
     * Optional text to display on the button.
     * If not provided, the button may render children instead.
     */
    text?: string;

    /**
     * Optional CSS classes to apply to the button.
     * This allows for custom styling using Tailwind CSS or other CSS frameworks.
     */
    class?: string;

    /**
     * Optional snippet to render on the left side of the button.
     * This can be used to include icons or other elements alongside the button text.
     */
    left?: Snippet;

    /**
     * Optional snippet to render on the right side of the button.
     * This can be used for additional icons or elements that should appear after the button text.
     */
    right?: Snippet;

    /**
     * Optional loading state for the button.
     * If true, the button may display a loading spinner or change its appearance to indicate that an action is in progress.
     */
    loading?: boolean;

    /**
     * Optional type of the button.
     * This determines the button's behavior in forms. Common values include:
     * - "submit": Submits the form.
     * - "button": A generic button with no default behavior.
     * - "reset": Resets the form fields to their initial values.
     * Defaults to "submit" if not specified.
     */
    type?: "submit" | "button" | "reset" | null | undefined;

    /**
     * Optional variant for styling the button.
     * This can be used to apply different visual styles, such as:
     * - 'standard': Default button style.
     * - 'outline': Button with an outlined border.
     * - 'text': Button with no background, typically used for text links.
     * - 'gradient': Button with a gradient background.
     */
    variant?: 'standard' | 'outline' | 'text' | 'gradient';

    /**
     * Optional flag to indicate if the button should have rounded corners.
     * If true, the button will have a rounded appearance; otherwise, it will have sharp corners.
     */
    rounded?: boolean;

    /**
     * Optional click event handler for the button.
     * This function will be called when the button is clicked, allowing for custom behavior.
     * @param e - The MouseEvent object representing the click event.
     */
    onclick?: (e: MouseEvent) => void;

    /**
     * Optional snippet to render custom content inside the button.
     * This allows for more complex button content, such as icons or formatted text.
     */
    children?: Snippet; 
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
    isInvalid?: boolean;
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

    name?: string;

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

    /**
     * Optional 
    */
    required?: boolean;
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
    wrap?: 'hard' | 'soft';
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
    value?: string | number | boolean| null;
    checked?: boolean;
    name: string;
}

/**
 * Attributes for file inputs.
 */
interface FileAttributes extends BaseAttributes {
    accept?: string;
    multiple?: boolean;
    files: FileList;
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