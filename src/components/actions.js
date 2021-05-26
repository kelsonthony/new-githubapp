'use strict'

import React from 'react'

const Actions = ({ clickRepos, clickStarred }) => (
  <div className='actions'>
    <button onClick={clickRepos}>Ver Repositórios</button>
    <button onClick={clickStarred}>Ver Favoritos</button>
  </div>
)

export default Actions