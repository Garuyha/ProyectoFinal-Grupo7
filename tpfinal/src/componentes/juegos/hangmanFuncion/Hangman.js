import React, {useState} from 'react';

const palabras = [
    "MANZANA",
    "NARANJA",
    "UVA",
    "ANANA",
    "BANANA",
    "FRUTILLA",
    "KIWI",
    "TOMATE",
    "ARANDANO",
    "CEREZA",
    "FRAMBRUESA",
    "HIGO",
    "LIMA",
    "LIMON",
    "MANDARINA",
    "MELON",
    "MELOCOTON",
    "PIÑA",
]

export default function Hangman() {

        const word = "GAY";

    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [correctGuesses, setCorrectGuesses] = useState([])    

    const maskedWord = word.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");

    const [incorretWord, setIncorretWord] = useState (0);   
    
    let trollface = "./img/0.png"

    if (incorretWord === 1) trollface="./img/1.png"
    if (incorretWord === 2) trollface="./img/2.png"
    if (incorretWord === 3) trollface="./img/3.png"
    if (incorretWord === 4) trollface="./img/4.png"
    if (incorretWord === 5) trollface="./img/5.png"
    if (incorretWord === 6) trollface="./img/6.png"
    if (incorretWord > 6) trollface="./img/6.png"
    

    return  <div>
            <div>
                
                <p>Puntaje: {incorretWord}/6</p>
                <img src={trollface} alt='' />
            </div>
            <p>{maskedWord}</p>
            {
            alphabets.map((alphabet, index) => 
            <button key={index} onClick={() => {
                if (incorretWord < 6){
                    if (word.includes(alphabet)) {
                        setCorrectGuesses([...correctGuesses, alphabet]); 
                    } else {
                        setIncorretWord(incorretWord+1);
                    }
                }
            }}>{alphabet}</button>)
            }
            <h1>
            {
                !maskedWord.includes("_")  ? "GANASTE EA EA EA" : ""
            }
            </h1>
            <h1>
            {
                incorretWord > 5 ? "Has perdido kpo, ahora embargaremos tu casa" : ""
            }
            </h1>
            
            </div>
}