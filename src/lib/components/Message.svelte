<script lang="ts">

    let { message }: { message: string|string[] } = $props()
</script>

{#snippet displayError(msg:string)}
    <span class="error invalid-feedback">{msg}</span>
{/snippet}

{#if Array.isArray(message)}
    {#each message as msg}
        {@render displayError(msg)}
    {/each}
{:else }
    {@render displayError(message)}
{/if}
