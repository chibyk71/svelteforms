<script lang="ts">
	import type { IField } from '$lib/types.js';
	import Label from './Label.svelte';

	let {
		type,
		name,
		value,
		description,
		prefix,
		options,
		attributes,
		label,
        suffix,
		float = false,
		...restProps
	}: IField & { float: boolean } = $props();

	const id = name || `field-${Math.random().toString(36).substr(2, 9)}`;

	label = label || name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ');
</script>

<div class="relative w-full max-w-sm min-w-[200px] [not:first-child]:mt-4">
	<Label {id} {label} {float} />

	<div class="relative">
		<input
			type="email"
			class="ease w-full rounded-md border border-slate-200 bg-transparent py-2 pr-3 pl-20 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
			placeholder="Enter your text"
		/>

        {#if prefix}
            <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400">
                {@render prefix()}
            </span>
        {/if}
		<button
			class="absolute top-1 left-1 rounded border border-transparent bg-slate-800 px-2.5 py-1 text-center text-sm text-white shadow-sm transition-all hover:bg-slate-700 hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
		>
			Search
		</button>
	</div>
</div>
