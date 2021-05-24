'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Digite o nome do usuário no Github' />
        </div>
        <div className='user-info'>
          <img src='https://avatars.githubusercontent.com/u/7318326?v=4' />
          <h1>
            <a href='https://github.com/kelsonthony'>kelsonthony</a>
          </h1>

          <ul className='repos-info'>
            <li> Repositórios: 123</li>
            <li>Seguidores: 123</li>
            <li>Seguindo: 123</li>
          </ul>

          <div className='actions'>
            <button>Ver Repositórios</button>
            <button>Ver Favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios</h2>
            <ul>
              <li><a href='#'>Nome do Repositório</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos</h2>
            <ul>
              <li><a href='#'>Nome do Repositório</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
