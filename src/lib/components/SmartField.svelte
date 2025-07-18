<script lang="ts">
	import { getComponent } from '$lib/componentRegistry.svelte.js';
	import type { IFieldProps } from '$lib/types.js';
	import Label from './Label.svelte';
	import Message from './Message.svelte';
	import Spinner from './Spinner.svelte';

	let {
		type,
		name,
		value = $bindable(null),
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

<div class="relative w-full min-w-[200px] mt-4">
	{#if (type === 'checkbox' || type === 'radio') && !options}
		{#await InputComponent then Component}
			<Component.default {name} {...restProps} bind:value {...attributes} options={[{label, value:true}]} />
		{:catch error}
			<p class="text-red-500">Error loading component: {error.message}</p>
		{/await}
	{:else}
		<Label {id} {label} {float} />
	
		<div class="flex items-center rounded-md bg-white dark:bg-slate-600 dark:text-slate-100 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
			{#if loading}
				<span class="shrink-0 text-slate-400">
					<Spinner />
				</span>
			{:else if suffix}
				<span class="shrink-0 text-slate-400">
					{@render suffix()}
				</span>
			{/if}
	
			{#await InputComponent then Component}
				<Component.default {name} {...restProps} bind:value {...attributes} {options} />
			{:catch error}
				<p class="text-red-500">Error loading component: {error.message}</p>
			{/await}
	
			{#if prefix}
				<span class="shrink-0 text-slate-400">
					{@render prefix()}
				</span>
			{/if}
		</div>
	{/if}
	{#if description}
		<Message message={description} {isInvalid} />
	{/if}
</div>
