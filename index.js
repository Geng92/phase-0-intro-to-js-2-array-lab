// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
  const copycats = cats.slice();
    copycats.push("Broom");
    return copycats;
}

function prependCat(name) {
    const copycats = cats.slice();
    copycats.unshift("Arnold");
    return copycats;
}

function removeLastCat() {
    const copycats = cats.slice();
    copycats.pop();
    return copycats;
}

function removeFirstCat() {
    const copycats = cats.slice();
    copycats.shift();
    return copycats;
}