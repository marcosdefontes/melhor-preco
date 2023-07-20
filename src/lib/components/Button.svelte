<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: 'primary' | 'secondary' = 'secondary';
	const dispatch = createEventDispatcher();
	/**
	 * Button click handler
	 */
	function onClick(event: any) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class:bg-primary={type == 'primary'}
	class:text-white={type == 'primary'}
	class:hover:bg-primary-400={type == 'primary'}
	class:bg-primary-100={type == 'secondary'}
	class:hover:bg-primary-200={type == 'secondary'}
	class:text-primary={type == 'secondary'}
	class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
	on:click={onClick}
>
	Click here
</button>
