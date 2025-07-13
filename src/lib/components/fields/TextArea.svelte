<script lang="ts">
	import { cn } from "$lib/index.js";
	import type { Attributes } from "$lib/types.js";

    let { name, value = '', class:className, ...restProps }: { name?: string; value?: string; } & Attributes<'textarea'> = $props();
</script>

<textarea bind:value class={cn("peer border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 h-full min-h-[100px] w-full resize-none rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline transition-all placeholder-shown:border focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0", className)} {...restProps} {name}>
</textarea>
