<script>
    import { createEventDispatcher } from 'svelte';

    /** @type {number[][]} */
    export let pixels;

    /** @type string[] */
    export let colors;

    export let timeout = false;

    const dispatch = createEventDispatcher();
</script>

<table>
    <tbody>
        {#each pixels as row, y}
            <tr>
                {#each row as colorIndex, x}
                    <td>
                        <button disabled={timeout} style="background-color: {colors[colorIndex]};" on:click={() => dispatch("paint", { x, y })}></button>
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
	table {
		border-spacing: 0;
        border-radius: 10px;
        overflow: hidden;
	}

	button {
        display: block;
		height: 20px;
		width: 20px;
        cursor: crosshair;
        border: none;
	}

    button:disabled {
        cursor: wait;
    }

	button:hover {
		transform: scale(1.5);
	}
</style>