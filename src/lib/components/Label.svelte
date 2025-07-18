<script lang="ts">
	import { base } from "$app/paths";
	import { cn } from "$lib/index.js";

    let { id, label, float, class:classes }: { id:string, label:string, float: boolean, class?: string } = $props();

	let baseClass = 'mb-2 block text-base/tight text-slate-600 dark:text-slate-200';
</script>

{#if float}
	<label for={id}
		class={cn(base, "absolute top-2.5 left-2.5 origin-left transform cursor-text bg-white px-1 transition-all peer-focus:-top-2 peer-focus:left-2.5 peer-focus:scale-90 peer-focus:text-xs peer-focus:text-slate-400", classes)}>
		{label}
	</label>
{:else}
	<label for={id} class={cn(baseClass, classes)}> {label} </label>
{/if}
