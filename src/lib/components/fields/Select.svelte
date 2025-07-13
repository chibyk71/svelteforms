<script lang="ts">
	import { cn } from "$lib/index.js";
	import type { InputProps } from "$lib/types.js";

    let { options, class:className, value = $bindable(null), ...restProps }: InputProps<'select'> & {
        options: Array<{ label: string; value: any }>
    } = $props();
    // This component is a simple select dropdown with options.
</script>

<div class="relative">
	<select {value} {...restProps} class={cn("ease peer w-full cursor-pointer appearance-none rounded border border-slate-200 bg-transparent py-2 pr-8 pl-3 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none", className)}
	>
		{#each options as { label, value } (value)}
            <option value={value}>{label}</option>
        {/each}
	</select>
	<svg xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.2"
		stroke="currentColor"
		class="absolute top-2.5 right-2.5 ml-1 h-5 w-5 text-slate-700"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
		/>
	</svg>
</div>
