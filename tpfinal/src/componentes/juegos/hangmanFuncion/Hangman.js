import React, {useState} from 'react';

const palabras = [
    {fruta: "MANZANA", pista: "Es roja"},
    {fruta: "NARANJA", pista: "Su color le da nombre"},
    {fruta: "UVA", pista: "Crece en vides"},
    {fruta: "ANANA", pista: "Puede ir en la pizza, pero a la gente no le gusta"},
    {fruta: "BANANA", pista: "Tiene mucho potacio"},
    {fruta: "FRUTILLA", pista: "Existe una serie infantil con su nombre en diminutibo"},
    {fruta: "KIWI", pista: "Tambien es el nombre de un pajaro incapaz de volar"},
    {fruta: "TOMATE", pista: "Se la usa en las ensaladas, por lo que se piensa que es una verdura"},
    {fruta: "ARANDANO", pista: "Es un frunto del bosque"},
    {fruta: "CEREZA", pista: "Es roja"},
    {fruta: "FRAMBRUESA", pista: "Es roja"},
    {fruta: "HIGO", pista: "Es roja"},
    {fruta: "LIMA", pista: "XXXX limon"},
    {fruta: "LIMON", pista: "Lima XXXXX"},
    {fruta: "MANDARINA", pista: "Es de color naranja, pero no es una naranja"},
    {fruta: "MELON", pista: "Cuando hace calor se lo parte y rellena con vino"},
    {fruta: "MELOCOTON", pista: "Es roja"},
    {fruta: "PIÑA", pista: "Tambien es como se le dice a una trompada"}
] //diccionario

export default function Hangman() {

    const [word, setWord] = useState(""); // palabra que va a aparecer 
    const [pista, setPista] = useState("");

    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Array de las letras que apareceran en el teclado

    const [correctGuesses, setCorrectGuesses] = useState([])//Letras correctas, se usa el useState para poder manipular sus valores  

    const maskedWord = word.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" "); //La letras de las palabras se separan en un string y se las enmascara , también hay un if que marca que si se presiona la letra correcta aparecerá dicha, sino se mantendra en "_"

    const [wrongLetter, setWrongLetter] = useState (0); //Contador de letras incorrectas, este se encarga de guardar cuantos errores se cometieron
    
    
    const reinicioTurno = () => {
        const palabra = palabras[Math.floor(Math.random() * palabras.length)]
        setWord(palabra.fruta)
        setPista(palabra.pista)
        setCorrectGuesses([])
        setWrongLetter(0)
    }

    let trollface = "./img/0.png"//El ahorcado
    if (wrongLetter === 1) trollface="./img/1.png"
    if (wrongLetter === 2) trollface="./img/2.png"
    if (wrongLetter === 3) trollface="./img/3.png"
    if (wrongLetter === 4) trollface="./img/4.png"
    if (wrongLetter === 5) trollface="./img/5.png"
    if (wrongLetter === 6) trollface="./img/6.png"
    if (wrongLetter > 6) trollface="./img/6.png"
    // Dependiendo de la cantidad de errores se irán apareciendo las extremidades del ahorcado, hasta llegar al gameover
    

    return  <div>
            <button onClick={reinicioTurno}>Jugar</button>
            <div>
                <p>Errores: {wrongLetter}/6</p> 
                <img src={trollface} alt='' />
            </div>
            <p>{maskedWord}</p>
            {
                //se mapea el alphabet dando lugar al teclado, además de que hay un onClick que sirve para detectar las letras en caso de ser presionadas.
            alphabets.map((alphabet, index) => 
            <button key={index} onClick={() => {
                if (wrongLetter < 6){ // el if indica que las teclas serán detectadas solo en caso de que este dentro del margen de intentos, si los intentos fallidos llegan a 6 ya no las detectará y terminará el juego
                    if (word.includes(alphabet)) {
                        setCorrectGuesses([...correctGuesses, alphabet]); 
                    } else { //En caso de que las letras no sean correctas los intentos disminuiran y el contador de intentos fallidos aumentara
                        setWrongLetter(wrongLetter+1);
                    }
                }
            }}>{alphabet}</button>)
            }
            <h1>
            {
                !maskedWord.includes("_")  ? "Precione el boton JUGAR para general una palabra aleatoria." : "" //En caso de que la palabra ya no contenga "_" aparece el mensaje de victoria
            }
            </h1>{
                wrongLetter < 6 ? "Ayuda: " +pista : ""
            }
            <h1>
            {
                wrongLetter > 5 ? "La respuesta era: " + word : "" //En caso de que el juego haya terminado y no hayas ganado aparecera el texto de derrota
            }
            </h1>
            
            </div>
}