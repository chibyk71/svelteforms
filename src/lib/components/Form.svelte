<script lang="ts">
	import { useForm } from '@inertiajs/svelte';
	import type { IFormProps } from '$lib/types.js';
	import { setContext } from 'svelte';
	import FieldRender from './FieldRender.svelte';
	import { cn } from '$lib/index.js';
	import Button from './fields/Button.svelte';

	let {
		form,
		fields,
		form_name,
		buttons,
		realtime,
		class: classes = '',
		ref = $bindable(null),
		children,
		action,
		method,
		footer,
		header,
		data
	}: IFormProps = $props();

	const id = form_name || `form-${Math.random().toString(36).substr(2, 9)}`;

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		$form.submit(
			{ url: action, method },
			{
				onSuccess() {}
			}
		);
	}

	form = form || useForm(data || {});

	setContext('form', form);
</script>

<form
	{action}
	method={method == 'GET' ? 'GET' : 'POST'}
	class={cn('flex flex-col gap-x-4', classes)}
	{id}
	onsubmit={(e) => handleSubmit(e)}
>
	{#if header && typeof header === 'function'}
		{@render header()}
	{:else if typeof header === 'object'}
		<header class="rounded-t-lg bg-slate-50 dark:bg-slate-800 p-4">
			<h2 class="text-lg font-medium text-slate-800 dark:text-slate-100">{header.title}</h2>
			<p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{header.subtitle}</p>
		</header>
	{/if}
	<div class="bg-white dark:bg-slate-700 p-4 flex items-center gap-y-4 relative divide-y divide-slate-100 dark:divide-slate-700">
		{#if fields.length > 0}
			<FieldRender {fields} />
		{:else}
			{@render children?.()}
		{/if}
	</div>

	<footer class="bg-slate-50 dark:bg-slate-800 rounded-b-lg p-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
		{#if footer}
			{@render footer()}
		{:else if buttons}
			<div class="flex items-center gap-3 justify-end w-full">
				{#each buttons as button}
					<Button {...button} />
				{/each}
			</div>
		{:else}
			<Button />
		{/if}
	</footer>
</form>
