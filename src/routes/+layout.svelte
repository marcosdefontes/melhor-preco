<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	// Custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="flex items-center justify-between px-6 py-2">
			<img
				src="/android-chrome-512x512.png"
				alt="Melhor Preço Logo"
				srcset=""
				class="h-auto w-10"
			/>
			<h1 class="text-lg font-bold uppercase text-primary-500">
				Melhor <span class="text-tertiary-700">Preço</span>
			</h1>
		</div>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<svelte:fragment slot="footer">Melhor preço</svelte:fragment>
</AppShell>
