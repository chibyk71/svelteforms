<script lang="ts">
	import type { IFieldProps } from '$lib/types.js';
	import Label from './Label.svelte';
	import Message from './Message.svelte';
	import Spinner from './Spinner.svelte';

	let {
		type,
		name,
		value = $bindable(''),
		description,
		prefix,
		options,
		attributes,
		label,
        suffix,
		float = false,
        isInvalid = false,
        loading = false,
		...restProps
	}: IFieldProps = $props();

	const id = name || `field-${Math.random().toString(36).substr(2, 9)}`;

	label = label || name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ');
</script>

<div class="relative w-full max-w-sm min-w-[200px] [not:first-child]:mt-4">
	<Label {id} {label} {float} />

	<div class="relative">
        {#if loading}
            <span class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <Spinner />
            </span>
        {:else if suffix}
            <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400">
                {@render suffix()}
            </span>
        {/if}

        <!-- TODO: replace with the appropriate input type -->
		

        {#if prefix}
            <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400">
                {@render prefix()}
            </span>
        {/if}
        
        {#if description}
            <Message message={description} {isInvalid} />
        {/if}
	</div>
</div>
