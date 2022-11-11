var personajes = [
    "manzana",
    "naranja",
    "uva",
    "anana",
    "banana",
    "frutilla",
    "kiwi",
    "tomate",
    "arandano",
    "cereza",
    "frambruesa",
    "higo",
    "lima",
    "limon",
    "mandarina",
    "melon",
    "melocoton",
    "piña",
]

function randomWord() {
  return personajes[Math.floor(Math.random() * personajes.length)]
}

export { randomWord }