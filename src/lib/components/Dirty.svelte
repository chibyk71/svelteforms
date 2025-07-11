<script lang="ts">
	import type { IField } from '$lib/types.js';
	import Message from './Message.svelte';

    let { field }: { field: IField } = $props();
</script>

{#if }
	{#each field.validation.errors as error}
		<Message message={error} />
	{/each}
{/if}
