<script>
	import Form from "$lib/components/Form.svelte";
	import { formProps } from "$lib/data.js";

</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<Form {...formProps} />