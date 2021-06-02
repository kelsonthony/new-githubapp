'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

import '../css/style.css'

const AppContent = ({ 
  userinfo, 
  repos, 
  starred, 
  isFetching,
  handleSearch, 
  clickRepos, 
  clickStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisabled={isFetching} />
    {isFetching && <div><p>Carregando...</p></div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions clickRepos={clickRepos} clickStarred={clickStarred}  />}
    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }
    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired, 
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  clickRepos: PropTypes.func.isRequired,
  clickStarred: PropTypes.func.isRequired
}

export default AppContent
