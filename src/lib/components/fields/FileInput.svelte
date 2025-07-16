<script lang="ts">
	import type { Attributes } from '$lib/types.js';
	import Button from './Button.svelte';

	let {  files = $bindable(), multiple = false, ...attr }: Attributes<'file'> = $props();
    let dropZone: HTMLDivElement|null = $state(null);

    let internalFiles: File[] = $state([]);

    $effect(() => {
        internalFiles = Array.from(files);
    })

    function toFileList(files: File[]): FileList {
        const dt = new DataTransfer();
        for (const file of files) dt.items.add(file);
        return dt.files;
    }

	// Highlight drop zone when dragging over
	const dragenter = (e: DragEvent & { currentTarget: HTMLDivElement }) => {
		e.preventDefault();
		e.currentTarget?.classList.add('border-slate-400', 'bg-slate-50');
	};

	// Remove highlight when leaving
	const dragleave = (e: DragEvent & { currentTarget: HTMLDivElement }) => {
		e.preventDefault();
		e.currentTarget.classList.remove('border-slate-400', 'bg-slate-50');
	};

	const dragdrop = (event: DragEvent & { currentTarget: HTMLDivElement }) => {
        event.preventDefault();
        if (!event.dataTransfer?.files) return;

        const dropped = Array.from(event.dataTransfer.files);
        // optional: sync input
        files = toFileList(dropped);
	};

    /**
     * Clear files
     */
	function clearFiles() {
		files = new DataTransfer().files;
		dropZone?.classList.remove('border-slate-400', 'bg-slate-50');
	}

    /**
     * Format file size
     * @param bytes {number} - File size in bytes
     */
	function formatFileSize(bytes: number) {
		if (bytes < 1024) return bytes + ' bytes';
		else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
		else return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
	}


	function removeFile(file: File) {
		internalFiles = internalFiles.filter(f => f.name !== file.name);
        files = toFileList(internalFiles);
	}
</script>

<div class="flex items-center gap-3">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="inline-file-upload relative h-10 rounded-md border border-dashed border-slate-300 hover:border-slate-400 transition-colors" bind:this={dropZone} ondrop={dragdrop} ondragenter={dragenter} ondragover={dragenter} ondragleave={dragleave}>
        <input bind:files={files} {...attr} type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple>
        <label for="fileInput" class="flex items-center justify-center h-full px-4 py-2 cursor-pointer">
            <span class="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3-3m3 3v12m0-12v12" />
                </svg>
                <span class="whitespace-nowrap">Select or drop files</span>
            </span>
        </label>
    </div>
      
    <button type="button" class="text-xs text-slate-500 hover:text-slate-700" onclick={clearFiles}>Clear</button>
</div>
<div class="mt-2 space-y-2 text-sm text-slate-600" class:hidden={files.length < 1}>
    {#each files as file, index}
        {@render Preview(file)}
        {#if index < files.length - 1}
            <hr class="my-2 border-slate-200">
        {/if}
      
    {/each}
</div>

{#snippet Preview(file: File)}
    <div class="grid grid-cols-[auto_1fr_auto] rtl:grid-cols-[1fr_auto_auto] items-center preset-tonal gap-4 px-4 py-2 rounded" id='file-s1-s1:item:{file.name}'>
        <p id="file:s1-s1:item-name:IMG_20230601_074908_225.jpg" class="text-sm flex items-center gap-4">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </span><!---->
            <span>{file.name}</span>
        </p>
        <p data-scope="file-upload" id="file:s1-s1:item-size:{file.name}" class="text-xs opacity-60">{formatFileSize(file.size)}</p> 

        <Button type="button" class="text-slate-500 hover:text-slate-700" onclick={() => removeFile(file)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </Button>
    </div>
{/snippet}