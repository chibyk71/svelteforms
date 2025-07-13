<script lang="ts">
    import { cn } from "$lib/index.js";
    import type { Snippet } from "svelte";
    import Spinner from "../Spinner.svelte";

    let { 
        text = 'Submit', 
        class: className, 
        left, 
        right, 
        loading, 
        type = 'submit', 
        variant = 'standard', 
        rounded = false, 
        ...restProps 
    }: { 
        text?: string; 
        class?: string; 
        left?: Snippet; 
        right?: Snippet; 
        loading: boolean; 
        type?: "submit" | "button" | "reset" | null | undefined; 
        variant?: 'standard' | 'outline' | 'text' | 'gradient'; 
        rounded?: boolean; 
    } = $props();

    // Define base styles
    const baseStyles = "flex items-center px-4 py-2 text-center text-sm transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

    // Define variant styles
    const variantStyles = {
        standard: "rounded-md border border-transparent bg-slate-800 text-white shadow-sm hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none",
        outline: "rounded-full border border-slate-300 text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800",
        text: "rounded-full border border-transparent text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100",
        gradient: "rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 text-white shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700"
    };

    // Combine styles
    const buttonClass = cn(baseStyles, variantStyles[variant], className);
</script>

<button class={buttonClass} {type} {...restProps}>
    {#if loading}
        <Spinner />
    {:else}
        {@render left?.()}
    {/if}

    {text}

    {@render right?.()}
</button>