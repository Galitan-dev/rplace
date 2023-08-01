<script>
	import { pixels } from '$lib/pixels';

    
    /** @type {string} */
     export let currentColor;

    /**
     * @param x {number}
     * @param y {number}
     */
    function paint(x, y) {
        pixels.update((rows) => {
            rows[y][x] = currentColor;
            return rows;
        });
    }
</script>

<table>
    <tbody>
        {#each $pixels as row, y}
            <tr>
                {#each row as color, x}
                    <td 
                        style="background-color: {color};" 
                        on:click={() => paint(x, y)} 
                        on:keydown={(e) => {
                            if (e.key == "Enter") {
                                paint(x, y);
                            }
                        }}
                    ></td>
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
	
	td {
		height: 20px;
		width: 20px;
        cursor: crosshair;
	}

	td:hover {
		transform: scale(1.5);
	}
</style>