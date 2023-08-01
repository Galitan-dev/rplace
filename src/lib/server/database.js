const db = new Map();

const colorCount = 7;

/**
 * @param {number} size
 */
function makePixels(size) {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => Math.floor(Math.random() * colorCount)));
}

db.set('pixels', makePixels(25));

export function getPixels() {
    return db.get('pixels');
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} colorIndex
 */
export function setPixel(x, y, colorIndex) {
    db.get('pixels')[y][x] = colorIndex;
}
