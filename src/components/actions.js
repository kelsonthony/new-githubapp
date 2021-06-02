'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ clickRepos, clickStarred }) => (
  <div className='actions'>
    <button onClick={clickRepos}>Ver Repositórios</button>
    <button onClick={clickStarred}>Ver Favoritos</button>
  </div>
)

Actions.propTypes = {
  clickRepos: PropTypes.func.isRequired,
  clickStarred: PropTypes.func.isRequired
}

export default Actions