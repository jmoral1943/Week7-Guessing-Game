import React from 'react';
import './Styles/styles.scss'
import Guess from './Components/Guess';
class App extends React.Component {
  state = {
    gameSelected: false,
    gameType: "",
    numberGenerated: 0,
    standard: true
  }


  handleGame = (gameType) => {
    this.setState({
      gameSelected: true
    })

    if (gameType === "standard") {
      this.handleGameType()
      this.setState({
        gameType: "standard",
        standard: true
      })
    }
    if (gameType === "expert") {
      this.handleGameType()
      this.setState({
        gameType: "expert",
        standard: false
      })
    }
  }

  handleGameType = () => {
    if (this.state.gameType === "standard") {
      let newNumber = Math.ceil((Math.random() * 10));
      this.setState({
        numberGenerated: newNumber
      })
    }
    if (this.state.gameType === "expert") {
      let newNumber = Math.ceil((Math.random() * 100));
      this.setState({
        numberGenerated: newNumber
      })
    }
  }

  render() {

    let phrase = this.state.standard ? "Pick any number from 1 to 10" : "Pick any number from 1 to 100"
    return (
      <div>
        <header>
          <h1>Start Game</h1>
        </header>
        <button onClick={() => this.handleGame("standard")}>Standard</button>
        <button onClick={() => this.handleGame("expert")}>Expert</button>
        
        { this.state.gameSelected ?
          <div>
            <p>{phrase}</p>
            <Guess 
              gameType={this.state.gameType} 
              numberGenerated={this.state.numberGenerated}
              handleGameType={this.handleGameType}
              /> 
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
