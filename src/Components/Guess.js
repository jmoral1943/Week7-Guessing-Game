import React from 'react';
import ScoreBoard from './ScoreBoard';

class Guess extends React.Component {
  state = {
    guesses: 0,
    highScoreStandard: 0,
    highScoreExpert: 0,
  }

  handleGameType = () => {
    if (this.props.gameType === "standard") {
      let newNumber = Math.ceil((Math.random() * 10));
      this.setState({
        numberGenerated: newNumber
      })
    }
    if (this.props.gameType === "expert") {
      let newNumber = Math.ceil((Math.random() * 100));
      this.setState({
        numberGenerated: newNumber
      })
    }
  }

  handleCheck = () => {
    let numberGuessed = document.querySelector('input[name="numberGuessed"]').value;
    if (numberGuessed === "") {
      alert("Guess something");
      return;
    }

    numberGuessed = Number(numberGuessed);
    if (numberGuessed <= 0) {
      alert("Enter a number greater than 1");
      return;
    }

    if (this.props.gameType === "expert") {
      if (numberGuessed > 100) {
        alert("Enter a number less than 100");
        return;
      }

      if (numberGuessed === this.props.numberGenerated) {
        alert(`You've won! it took you ${this.state.guesses} guesses`)
  
        if (this.state.highScoreExpert === 0) {
          this.setState({
            highScoreExpert: this.state.guesses
          })
        } else if (this.state.guesses < this.state.highScoreExpert) {
          this.setState({
            highScoreExpert: this.state.guesses
          })
          alert("Great job! Getting a new Score")
        }
        this.setState({
          guesses: 0
        })
      } else if (numberGuessed > this.props.numberGenerated) {
        let numberOfGuesses = this.state.guesses + 1;
        this.setState({
          guesses: numberOfGuesses
        })
        alert('Too high');
      } else if (numberGuessed < this.props.numberGenerated) {
        let numberOfGuesses = this.state.guesses + 1;
        this.setState({
          guesses: numberOfGuesses
        })
        alert('Too low');
      }
    } else if (this.props.gameType === "standard") {
      if (numberGuessed > 10) {
        alert("Enter a number less than 10");
        return;
      }

      if (numberGuessed === this.props.numberGenerated) {
        alert(`You've won! it took you ${this.state.guesses} guesses`)
  
        if (this.state.highScoreStandard === 0) {
          this.setState({
            highScoreStandard: this.state.guesses
          })
        } else if (this.state.guesses < this.state.highScoreStandard) {
          this.setState({
            highScoreStandard: this.state.guesses
          })
          alert("Great job! Getting a new Score")
        }
        this.setState({
          guesses: 0
        })
      } else if (numberGuessed > this.props.numberGenerated) {
        let numberOfGuesses = this.state.guesses + 1;
        this.setState({
          guesses: numberOfGuesses
        })
        alert('Too high');
      } else if (numberGuessed < this.props.numberGenerated) {
        let numberOfGuesses = this.state.guesses + 1;
        this.setState({
          guesses: numberOfGuesses
        })
        alert('Too low');
      }
    }
  }

  componentDidMount() {
    this.props.handleGameType();
    
  }

  render() {
    return(
      <div className="Guess">
        <div>
          <input type="text" name="numberGuessed"></input>
          <button type="button" onClick={this.handleCheck}>Check!</button>
          <button type="button" onClick={() => {
            this.props.handleGameType()
            alert("Reset, try guessing another number!")
            this.setState({
              guesses: 0
            })
          }}
          >Reset</button>
        </div>
        <ScoreBoard 
          highScoreStandard={this.state.highScoreStandard}
          highScoreExpert={this.state.highScoreExpert}
          guesses={this.state.guesses}
          />
      </div>
    );
  }
}

export default Guess;