import type { IForm, IFormProps } from "./types.js";

export const formProps: IFormProps = {
    form_name: "userRegistration",
    fields: [
        {
            type: 'input',
            name: 'username',
            label: 'Username',
            value: '',
            attributes: {
                id: 'username',
                placeholder: 'Enter your username',
                required: true,
                class: ['border', 'rounded', 'p-2']
            },
            description: 'Your unique username for the platform.'
        },
        {
            type: 'input',
            name: 'email',
            label: 'Email',
            value: '',
            attributes: {
                id: 'email',
                placeholder: 'Enter your email',
                required: true,
                type: 'email',
                class: ['border', 'rounded', 'p-2']
            },
            description: 'We will send a confirmation email to this address.'
        },
        {
            type: 'input',
            name: 'password',
            label: 'Password',
            value: '',
            attributes: {
                id: 'password',
                placeholder: 'Enter your password',
                required: true,
                type: 'password',
                class: ['border', 'rounded', 'p-2']
            },
            description: 'Choose a strong password.'
        },
        {
            type: 'checkbox',
            name: 'terms',
            label: 'I agree to the terms and conditions',
            value: false,
            attributes: {
                id: 'terms',
                required: true,
                class: ['mr-2']
            },
        }
    ],
    buttons: [
        {
            text: 'Submit',
            type: 'submit',
            class: 'bg-blue-500 text-white rounded p-2',
        },
        {
            text: 'Reset',
            type: 'reset',
            class: 'bg-gray-300 text-black rounded p-2',
        }
    ],
    realtime: true,
    class: 'my-form-class',
    ref: null, // Replace with actual HTMLFormElement reference if needed
    action: '/register',
    method: 'POST',
    header: { title: 'User  Registration', subtitle: 'Please fill in the details below.' },
};
