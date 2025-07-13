// componentRegistry.ts
import type { SvelteComponent } from 'svelte';
import { writable, get } from 'svelte/store';

/** All supported field types */
export type FieldType =
    | 'input'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'autocomplete'
    | 'date';

/** Type for dynamic import of Svelte components */
export type FieldComponentMap = Record<
    FieldType,
    () => Promise<{ default: SvelteComponent }>
>;

const asSvelteComponent = <T extends SvelteComponent>(component: unknown) =>
  component as { default: T };

/** Default component map */
const defaultComponentMap: FieldComponentMap = {
    input: () => import('./components/fields/Input.svelte').then(asSvelteComponent),
    // textarea: () => import('./fields/Textarea.svelte'),
    select: () => import('./components/fields/Select.svelte').then(asSvelteComponent),
    // checkbox: () => import('./fields/Checkbox.svelte'),
    // radio: () => import('./fields/Radio.svelte'),
    // file: () => import('./fields/FileInput.svelte'),
    // autocomplete: () => import('./fields/Autocomplete.svelte'),
    // date: () => import('./fields/Input.svelte') // Default to Input; can be swapped
};

/** Writable store to hold the current component map */
const componentRegistry = writable<FieldComponentMap>(defaultComponentMap);

/**
 * Replace or extend the current component map with a custom one.
 * @param customMap - Partial map of field types to component loaders
 */
export function setComponentMap(customMap: Partial<FieldComponentMap>) {
    componentRegistry.update((current) => ({
        ...current,
        ...customMap
    }));
}

/**
 * Get the component loader for a given field type.
 * @param type - Field type to load component for
 */
export function getComponent(type: FieldType): Promise<{ default: typeof SvelteComponent<any> }> {
    const map = get(componentRegistry);
    return map[type]?.() ?? Promise.reject(new Error(`Component for "${type}" not found`));
}

/**
 * Helper to generate a complete component map by merging defaults with overrides.
 * @param overrides - Optional overrides to default map
 */
export function createFieldComponentMap(
    overrides: Partial<FieldComponentMap> = {}
): FieldComponentMap {
    return {
        ...defaultComponentMap,
        ...overrides
    };
}

export default componentRegistry;
