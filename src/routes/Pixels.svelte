<script>
    /** @type {number[][]} */
    export let pixels;

    /** @type {number} */
    export let currentColorIndex;

    /** @type string[] */
    export let colors;

    /**
     * @param x {number}
     * @param y {number}
     */
    function paint(x, y) {
        pixels[y][x] = currentColorIndex;
    }
</script>

<table>
    <tbody>
        {#each pixels as row, y}
            <tr>
                {#each row as colorIndex, x}
                    <td>
                        <button style="background-color: {colors[colorIndex]};" on:click={() => paint(x, y)}></button>
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

	button:hover {
		transform: scale(1.5);
	}
</style>