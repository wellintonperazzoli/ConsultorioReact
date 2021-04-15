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
      key: '1c_b6jA-wJsEGmELpZN9mVo4wrBxVo5q18-u5Xo49n1w',
      callback: googleData => {
        this.setState({ 
          data :  googleData,     
        });
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="App">
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