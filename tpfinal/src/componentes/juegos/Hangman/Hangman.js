import React from 'react';
import step0 from "./imagenes/0.png";
import step1 from "./imagenes/1.png";
import step2 from "./imagenes/2.png";
import step3 from "./imagenes/3.png";
import step4 from "./imagenes/4.png";
import step5 from "./imagenes/5.png";
import step6 from "./imagenes/6.png";
import {randomWord} from "./Word"





class Hangman extends React.Component{
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        className='botonHangman'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
    }


        return <div>      
          <section className="Ahorcado">
          <img src={this.props.images[this.state.mistake]} alt=""/>
          </section>

          <section className="TextPresentacion">
            
          <p><strong>Adivina la fruta que salvara al estudiante, haciendo click en las letras</strong></p>
          <p>Posibles frutas: manzana, naranja, uva, anana, banana, frutilla, kiwi, tomate, arandano, cereza, frambruesa, higo, lima, limon, mandarina, melon, melocoton, piña</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>

          <section className="CantErrores"><strong>Adivinanzas erróneas: {this.state.mistake} of {this.props.maxWrong}</strong> 
          </section>
          <p>{gameStat}</p>

          <button className='botonhangman' onClick={this.resetButton}>Reset</button>
          </section> 
    </div>
  
    }
}

export default Hangman
