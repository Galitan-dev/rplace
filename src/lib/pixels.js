import { writable } from 'svelte/store';

const size = 25;

export const colors = ["#EC4E20", "#04A777", "#2274A5", "#613F75", "#FFBC0A", "#FBFEF9", "#27233A"];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function createPixels() {
    return Array.from({ length: size }, () => Array.from({ length: size }, randomColor));
}

export const pixels = writable(createPixels());
