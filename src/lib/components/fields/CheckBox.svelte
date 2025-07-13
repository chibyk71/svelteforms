<div class="relative flex flex-col gap-1 p-2">
	<div
		role="button"
		class="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
	>
		<label
			for="check-vertical-list-group"
			class="flex w-full cursor-pointer items-center px-3 py-2"
		>
			<div class="inline-flex items-center">
				<label class="relative flex cursor-pointer items-center" for="check-vertical-list-group">
					<input
						type="checkbox"
						class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-slate-800 checked:bg-slate-800 hover:shadow-md"
						id="check-vertical-list-group"
					/>
					<span
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3.5 w-3.5"
							viewBox="0 0 20 20"
							fill="currentColor"
							stroke="currentColor"
							stroke-width="1"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
				</label>
				<label class="ml-2 cursor-pointer text-sm text-slate-600" for="check-vertical-list-group">
					React
				</label>
			</div>
		</label>
	</div>
	<div
		role="button"
		class="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
	>
		<label
			for="check-vertical-list-group2"
			class="flex w-full cursor-pointer items-center px-3 py-2"
		>
			<div class="inline-flex items-center">
				<label class="relative flex cursor-pointer items-center" for="check-vertical-list-group2">
					<input
						type="checkbox"
						class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-slate-800 checked:bg-slate-800 hover:shadow-md"
						id="check-vertical-list-group2"
					/>
					<span
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3.5 w-3.5"
							viewBox="0 0 20 20"
							fill="currentColor"
							stroke="currentColor"
							stroke-width="1"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
				</label>
				<label class="ml-2 cursor-pointer text-sm text-slate-600" for="check-vertical-list-group2">
					Vue.js
				</label>
			</div>
		</label>
	</div>
</div>

{#snippet checkbox()}
	<div role="button" class="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
		<label for="check-vertical-list-group3" class="flex w-full cursor-pointer items-center px-3 py-2">
			<div class="inline-flex items-center">
				<label class="relative flex cursor-pointer items-center" for="check-vertical-list-group3">
					<input
						type="checkbox"
						class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-slate-800 checked:bg-slate-800 hover:shadow-md"
						id="check-vertical-list-group3"
					/>
					<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3.5 w-3.5"
							viewBox="0 0 20 20"
							fill="currentColor"
							stroke="currentColor"
							stroke-width="1"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
				</label>
				<label class="ml-2 cursor-pointer text-sm text-slate-600" for="check-vertical-list-group3">
					Svelte.js
				</label>
			</div>
		</label>
	</div>
{/snippet}
