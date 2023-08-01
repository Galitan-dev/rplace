<script>
    import "../app.css";
	import Header from "./Header.svelte";
</script>

<svelte:head>
	<title>r/place</title>
	<meta name="description" content="Sveltekit r/place, for practice" />
</svelte:head>

<Header />

<slot />
