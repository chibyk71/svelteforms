<script lang="ts">
	import { InertiaForm } from '@inertiajs/svelte';
	import type { IForm, IFormProps } from "$lib/types.js";
	import { setContext } from "svelte";
	import FieldRender from './FieldRender.svelte';

	let { form, fields, form_name, btnSubmit, btnReset, realtime, class: classes = '', ref = $bindable(null), children, action, method }: IFormProps = $props();

	const id = form_name || `form-${Math.random().toString(36).substr(2, 9)}`;

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		$form.submit({url: action, method}, {
			onSuccess() {

			}
		});
	}

	setContext('form', form);
</script>

<form {action} method={method == 'GET'? 'GET': 'POST'} class={`form ${classes}`} {id} onsubmit={(e)=>handleSubmit(e)}>
	{#if fields.length > 0}
		<FieldRender { fields } />
	{:else}
		{@render children?.()}
	{/if}
</form>