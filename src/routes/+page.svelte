<script>
	import { colors } from '$lib/pixels'
	import ColorPicker from './ColorPicker.svelte';
	import Pixels from "./Pixels.svelte";

	let currentColor = colors[0];
</script>

<svelte:head>
	<title>r/place</title>
	<meta name="description" content="Sveltekit r/place, for practice" />
</svelte:head>

<main>
	<h1>r/place</h1>

	<Pixels {currentColor} />

	<ColorPicker bind:currentColor />
</main>

<style>
	main {
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	h1 {
		margin-top: 50px;
	}
</style>
