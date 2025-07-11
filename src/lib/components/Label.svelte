<script lang="ts">
    let { id, label, float }: { id:string, label:string, float: boolean } = $props();
</script>

{#if float}
	<label
		for={id}
		class="absolute top-2.5 left-2.5 origin-left transform cursor-text bg-white px-1 text-sm text-slate-400 transition-all peer-focus:-top-2 peer-focus:left-2.5 peer-focus:scale-90 peer-focus:text-xs peer-focus:text-slate-400"
	>
		{label}
	</label>
{:else}
	<label for={id} class="mb-2 block text-sm text-slate-600"> {label} </label>
{/if}
