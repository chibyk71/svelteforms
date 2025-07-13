<script lang="ts">
	import { getComponent } from '$lib/componentRegistry.svelte.js';
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

	const InputComponent = getComponent(type);
</script>

<div class="relative w-full max-w-sm min-w-[200px] [not:first-child]:mt-4">
	<Label {id} {label} {float} />

	<div class="relative">
		{#if loading}
			<span
				class="absolute top-1/2 right-2 flex -translate-y-1/2 transform items-center justify-center"
			>
				<Spinner />
			</span>
		{:else if suffix}
			<span class="absolute top-1/2 right-2 -translate-y-1/2 transform text-slate-400">
				{@render suffix()}
			</span>
		{/if}

		<!-- TODO: replace with the appropriate input type -->
         {#await InputComponent}
            <!-- \ is pending -->
            
         {:then Component}
            <Component.default />
         {:catch error}
            <!-- \ was rejected -->
         {/await}

		{#if prefix}
			<span class="absolute top-1/2 left-2 -translate-y-1/2 transform text-slate-400">
				{@render prefix()}
			</span>
		{/if}

		{#if description}
			<Message message={description} {isInvalid} />
		{/if}
	</div>
</div>
