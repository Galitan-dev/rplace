import * as database from '$lib/server/database.js';

export function load() {
    const pixels = database.getPixels();

    return { pixels };
}
