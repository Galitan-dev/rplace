<script>
    import { colors } from "$lib/pixels";

    /** @type {string} */
    export let currentColor;

    /**
     * @param color {string}
     */
    function pick(color) {
        currentColor = color;
    }
</script>

<table>
    <tr>
        {#each colors as color}
            <td
                style="background-color: {color};"
                on:click={() => pick(color)}
                on:keydown={(e) => {
                    if (e.key === 'Enter') {
                        pick(color);
                    }
                }}
                aria-current={currentColor === color}
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
