<script lang="ts">
	let { message, isInvalid }: { message: string | string[]; isInvalid: boolean } = $props();
</script>

{#snippet displayError(msg: string)}
	<p aria-invalid={isInvalid} class="mt-2 flex items-start text-xs [aria-invalid=true]:!text-red-500 dark:text-slate-200 text-slate-400">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="mr-1.5 h-4 w-4"
		>
			<path
				fill-rule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
				clip-rule="evenodd"
			/>
		</svg>

        {msg}
	</p>
{/snippet}

{#if Array.isArray(message)}
	{#each message as msg}
		{@render displayError(msg)}
	{/each}
{:else}
	{@render displayError(message)}
{/if}
