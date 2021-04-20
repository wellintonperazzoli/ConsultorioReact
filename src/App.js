import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  state = {
    data : {},
  };
  

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1JLFK9hiizH_IkT1taevof1SP1vDFPyIstvi7JBms0a8',
      callback: googleData => {
        this.setState({ 
          data :  googleData,     
        });
        console.log(googleData);
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Teste 123</h1>
        <header className="App-header">
          <table>
            <thead>
                <tr>
                  <th>Nome</th>
                  <th>Valor</th>
                </tr>
            </thead>
            <tbody>
              {this.state.data.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{i.nome}</td>
                    <td>{i.valor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;