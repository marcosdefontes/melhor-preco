<script lang="ts">
	import BudgetListItem from '$lib/components/BudgetListItem.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul class="flex flex-col gap-2">
	{#each data.budgets as item (item.name)}
		<BudgetListItem budget={item} />
	{/each}
</ul>
