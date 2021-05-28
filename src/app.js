'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''

    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target= e.target
    //console.log('evento do Hnadle Search', e.target)
    //console.dir(e.target)
    //e.persist()

    if (keyCode === ENTER) {
      target.disabled = true
      console.log('evento keycode = enter', e)
      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        //console.log('result', result)
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []

        })
        
      })
      .always(() => {
        target.disabled = false
        console.log('evento Always', e)
      })
    }
    //console.dir(e.target)
  }

  clickRepos (type) {
    return (e) => {
      //console.log('type', type)
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => {
              return {
                name: repo.name,
                link: repo.html_url
              }
            })
          })
        })
    }
  }


  render() {
    return (
      <AppContent 
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        clickRepos={this.clickRepos('repos')}
        clickStarred={this.clickRepos('starred')}
        
        
        
      />
    )
  }
}

export default App
