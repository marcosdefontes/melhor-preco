<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	// Custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';
</script>

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
