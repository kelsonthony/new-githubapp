'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars.githubusercontent.com/u/7318326?v=4' />
    <h1 className='user-info'>
      <a href='https://github.com/kelsonthony'>kelsonthony</a>
    </h1>

    <ul className='repos-info'>
      <li> Repositórios: 123</li>
      <li>Seguidores: 123</li>
      <li>Seguindo: 123</li>
    </ul>
  </div>
)

export default UserInfo