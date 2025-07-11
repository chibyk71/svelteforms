<script lang="ts">
	import type { IField, IForm } from "$lib/types.js";
	import { getContext } from "svelte";

    let { fields } : {fields: IField[]} = $props()

    const form = getContext<IForm | null>('form');
</script>

<div class="">

</div>