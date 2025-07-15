<script lang="ts">
	import { InertiaForm, useForm } from '@inertiajs/svelte';
	import type { IForm, IFormProps } from "$lib/types.js";
	import { setContext } from "svelte";
	import FieldRender from './FieldRender.svelte';
	import { cn } from '$lib/index.js';
	import Button from './fields/Button.svelte';

	let { form, fields, form_name, buttons, realtime, class: classes = '', ref = $bindable(null), children, action, method, footer }: IFormProps = $props();

	const id = form_name || `form-${Math.random().toString(36).substr(2, 9)}`;

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		$form.submit({url: action, method}, {
			onSuccess() {

			}
		});
	}

	form = form || useForm({})

	setContext('form', form);
</script>

<form {action} method={method == 'GET'? 'GET': 'POST'} class={cn("flex flex-col gap-4", classes)} {id} onsubmit={(e)=>handleSubmit(e)}>
	{#if fields.length > 0}
		<FieldRender { fields } />
	{:else}
		{@render children?.()}
	{/if}
	<div class="footer">
		{#if footer}
		  	{@render footer()}
		{:else}
			{#if buttons}
				{#each buttons as button}
					<Button {...button} />
				{/each}
			{:else}
				<Button />
			{/if}
		{/if}
	</div>
</form>