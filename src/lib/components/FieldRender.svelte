<script lang="ts">
	import type { IField, IForm } from "$lib/types.js";
	import { getContext } from "svelte";
	import SmartField from "./SmartField.svelte";

    let { fields } : {fields: IField[]} = $props()

    const form = getContext<IForm | null>('form');
</script>

<div class="block w-full">
    {#each fields as field}
        <SmartField {...field} />
    {/each}
</div>