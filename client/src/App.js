import React, { Component, Fragment } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Exercise from './components/exersices/Exercise'
import { muscles, exercises } from './store'

export default class App extends Component {
  state = {
    exercises,
    category: 'arms'
 
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
  handleCategorySelected = category => {
    this.setState({ category : category });
  }
  render() {
    const exercises = this.getExercisesByMuscles()
    return (
      <Fragment>
        <Header/>
        <Exercise 
        exercises={exercises}
        category={this.state.category}/>
        <Footer 
        muscles={muscles}
        category={this.state.category}
        onSelect={this.handleCategorySelected}/>
      </Fragment>
    )
  }
}
