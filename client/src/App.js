import React, { Component, Fragment } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Exercise from './components/exersices/Exercise'
import { muscles, exercises } from './store'

export default class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }
  render() {
    console.log(`app: `, this.getExercisesByMuscles())
    return (
      <Fragment>
        <Header/>
        <Exercise />
        <Footer muscles={muscles}/>
      </Fragment>
    )
  }
}
