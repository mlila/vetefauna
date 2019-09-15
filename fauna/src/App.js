import React, { Component } from 'react';
import logo from './logo.png'
import './App.css';

class Header extends Component {
  render() {
    const {
      title,
      subtitle

    } = this.props
    return (<div className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <div>
        <a
          className="App-link"
          href="https://www.facebook.com/veterinariasfauna1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
          </a>
        <a
          className="App-link"
          href="https://twitter.com/VeterinariaFau1"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a
          className="App-link"
          href="https://twitter.com/VeterinariaFau1"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </div>

    </div>

    )
  }
}
class Menu extends Component {
  render() {
    return (<div>
      <nav>
        <ul className="Menu">
          <li><a className="MenuItem" title="La Clinica" href="#">La Clinica</a></li>
          <li><a className="MenuItem" title="El Equipo" href="#">El Equipo</a></li>
          <li><a className="MenuItem" title="Servicios" href="#">Servicios</a></li>
          <li><a className="MenuItem" title="Contáctanos" href="#">Contáctanos</a></li>
          <li><a className="MenuItem" title="Blog" href="#">Blog</a></li>
        </ul>
      </nav>

    </div>)
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >

          <Header title='VETERINARIA FAUNA' subtitle='Clínica Veterinaria general y Pet-shop' />
          <Menu />

        </header>
      </div>
    );
  }
}

export default App;
