<script lang="ts">
	import { cn } from "$lib/index.js";
	import type { Attributes } from "$lib/types.js";

    let { type = 'text', name, value = $bindable(''), class:className, ...restProps }: {
        name?: string;
        value?: string;
    } & Attributes<'input'> = $props();
</script>

<input {type} class={cn("ease peer w-full rounded-md border border-slate-200 bg-transparent py-2 pr-3 pl-3 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none", className)} bind:value={value} {name} {...restProps}/>
