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
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
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
    //const target= e.target

    if (keyCode === ENTER) {
      //target.disabled = true

      this.setState({ isFetching: true })
      
      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
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
      .always(() => this.setState({ isFetching: false }))
    }
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
        {...this.state}
        handleSearch={this.handleSearch}
        clickRepos={this.clickRepos('repos')}
        clickStarred={this.clickRepos('starred')}
        
        
      />
    )
  }
}

export default App
