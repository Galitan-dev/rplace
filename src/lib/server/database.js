const db = new Map();

const colorCount = 7;

/**
 * @param {number} size
 */
function makePixels(size) {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => Math.floor(Math.random() * colorCount)));
}

db.set('pixels', makePixels(25));
db.set('placementDates', new Map());

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

/**
 * @param {string} userid 
 * @returns {Date}
 */
export function getLastPlacementDate(userid) {
    /** @type {Map<string, Date>} */
    const placementDates = db.get('placementDates');

    return placementDates.get(userid) ?? new Date(Date.now() - 3000);
}

/**
 * @param {string} userid 
 * @param {Date} date 
 */
export function setLastPlacementDate(userid, date) {
    /** @type {Map<string, Date>} */
    const placementDates = db.get('placementDates');

    placementDates.set(userid, date);
}
