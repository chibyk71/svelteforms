<script lang="ts">
	import { cn } from '$lib/index.js';
	import type { Attributes } from '$lib/types.js';

	let { value = $bindable(null), options, checked, name, class:className, ...attr }: Attributes<'radio'> & { options: {label: string, value: any}[] } = $props();

    if (!name) name = `radio-${Math.random().toString(36).substr(2, 9)}`
</script>

<div class="flex flex-col gap-10">
	{#each options as option, i}
        <div class="inline-flex items-center">
            <label class="relative flex cursor-pointer items-center" for={name+'-'+i}>
                <input {name} type="radio" class={cn("peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400", className )} id={name+'-'+i} {...attr} value={option.value} bind:group={value} {checked} aria-checked={checked ? 'true' : 'false'}/>
                <span
                    class="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100 dark:bg-slate-200"
                ></span>
            </label>
            <label class="ml-2 cursor-pointer text-sm text-slate-600" for={name+'-'+i}>
                <p>{option.label}</p>
            </label>
        </div>
    {/each}
</div>
