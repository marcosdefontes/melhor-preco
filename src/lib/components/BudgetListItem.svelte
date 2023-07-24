<script lang="ts">
	import type { Budget } from '../../types';

	export let budget: Budget;
</script>

<li class="card card-hover px-4 py-3">{budget.name}</li>
