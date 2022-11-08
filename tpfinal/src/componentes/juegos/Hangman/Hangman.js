import React from 'react';

import step0 from "./asset/imagenes/0.png";
import step1 from "./asset/imagenes/1.png";
import step2 from "./asset/imagenes/2.png";
import step3 from "./asset/imagenes/3.png";
import step4 from "./asset/imagenes/4.png";
import step5 from "./asset/imagenes/5.png";
import step6 from "./asset/imagenes/6.png";
import {randomWord} from "./componentes/Word"
import BtnH from './componentes/BtnH';
import './componentes/css/Hangman.css'




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
        className='btn btn-lg btn-primary m-2'
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

          <button className='btn' onClick={this.resetButton}>Reset</button>
          </section> 
          <BtnH/>
    </div>
  
    }
}

export default Hangman
