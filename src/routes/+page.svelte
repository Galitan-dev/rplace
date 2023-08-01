<script>
	import { colors } from '$lib/pixels'
	import ColorPicker from './ColorPicker.svelte';
	import Pixels from "./Pixels.svelte";

	let currentColor = colors[0];
</script>

<main>
	<Pixels {currentColor} />

	<ColorPicker bind:currentColor />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
</style>
