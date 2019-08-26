import React, { Component, Fragment } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Exercise from './components/exersices/Exercise'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Exercise/>
        <Footer/>
      </Fragment>
    )
  }
}
