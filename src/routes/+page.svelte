<script>
	import { PUBLIC_PUSHER_CLUSTER, PUBLIC_PUSHER_KEY } from '$env/static/public';
	import ColorPicker from './ColorPicker.svelte';
	import Pixels from "./Pixels.svelte";
	import Channels from 'pusher-js';

	export let data;

	let currentColorIndex = 0;
	let timeout = false;
	const colors = ["#EC4E20", "#04A777", "#2274A5", "#613F75", "#FFBC0A", "#FBFEF9", "#27233A"];

	const channels = new Channels(PUBLIC_PUSHER_KEY, {
		cluster: PUBLIC_PUSHER_CLUSTER
	});
	const channel = channels.subscribe('pixels');

	channel.bind('pixel-change', function (/** @type {{ x: number, y:number, colorIndex: number}} */ { x, y, colorIndex }) {
		data.pixels[y][x] = colorIndex;
	});

	/**
	 * @param {CustomEvent} event
	 */
	async function paint(event) {
		const { x, y } = event.detail;
		const initialColorIndex = data.pixels[y][x];

		data.pixels[y][x] = currentColorIndex;
		timeout = true;

		const response = await fetch(`/${x}x${y}`, {
			method: 'PUT',
			body: JSON.stringify({ colorIndex: currentColorIndex }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			setTimeout(() => timeout = false, 3000);
		} else {
			data.pixels[y][x] = initialColorIndex;
			timeout = false;
		}
	}
</script>

<main>
	<Pixels {colors} pixels={data.pixels} {timeout} on:paint={paint} />

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
