<script>
    /** @type {number} */
    export let currentColorIndex;

    /** @type {string[]}*/
    export let colors;

    /**
     * @param colorIndex {number}
     */
    function pick(colorIndex) {
        currentColorIndex = colorIndex;
    }
</script>

<table>
    <tr>
        {#each colors as color, colorIndex}
            <td
                style="background-color: {color};"
                on:click={() => pick(colorIndex)}
                on:keydown={(e) => {
                    if (e.key === 'Enter') {
                        pick(colorIndex);
                    }
                }}
                aria-current={currentColorIndex === colorIndex}
            ></td>
        {/each}
    </tr>
</table>


<style>
	table {
		border-spacing: 0;
	}
	
	td {
		height: 40px;
		width: 40px;
        cursor: crosshair;
	}

	td:hover {
		transform: scale(1.1);
	}

    td[aria-current='true'] {
        outline: 2px solid var(--color);
    }
</style>
