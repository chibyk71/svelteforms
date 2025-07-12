<script lang="ts">
    let { type = 'email', name, value = '', ...restProps }: {
        type?: string;
        name?: string;
        value?: string;
        [key: string]: any;
    } = $props();
</script>

<input
	type="email"
	class="ease w-full rounded-md border border-slate-200 bg-transparent py-2 pr-3 pl-20 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
	{...restProps}
/>
