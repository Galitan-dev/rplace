<script>
	import ColorPicker from './ColorPicker.svelte';
	import Pixels from "./Pixels.svelte";

	export let data;

	let currentColorIndex = 0;
	const colors = ["#EC4E20", "#04A777", "#2274A5", "#613F75", "#FFBC0A", "#FBFEF9", "#27233A"];
</script>

<main>
	<Pixels {currentColorIndex} {colors} pixels={data.pixels} />

	<ColorPicker bind:currentColorIndex {colors} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
</style>
