import { Exercise, WorkoutPlan } from '../model'
import { WorkoutServiceMock } from './workout.service.mock'

export class WorkoutBuilderServiceMock {
  workoutServiceMock = new WorkoutServiceMock()
  workoutBuild: WorkoutPlan
  newWorkout: boolean
  firstExercise = true
  isBuildingWorkout = false
  isFinishedBuilding = false
  isSubmitted = false

  constructor() {}

  get allExercises() {
    return this.workoutServiceMock.allExercises
  }

  get buildingWorkout() {
    return this.isBuildingWorkout
  }

  get finishedBuilding() {
    return this.isFinishedBuilding
  }

  get submitted() {
    return this.isSubmitted
  }

  set buildingWorkout(input) {
    this.isBuildingWorkout = input
  }

  set finishedBuilding(input) {
    this.isFinishedBuilding = input
  }

  set submitted(input) {
    this.isSubmitted = input
  }

  startBuilding(name: string) {
    if (name) {
      const retrievedWorkout = this.workoutServiceMock.workoutList.find(
        workout => workout.name.toLowerCase() === name.toLowerCase()
      )
      this.workoutBuild = new WorkoutPlan(
        retrievedWorkout.name,
        retrievedWorkout.exercises,
        retrievedWorkout.restBetweenExercise,
        retrievedWorkout.exerciseDuration,
        retrievedWorkout.description || '',
        retrievedWorkout.track || '',
        retrievedWorkout.id
      )
      this.newWorkout = false
    } else {
      this.workoutBuild = new WorkoutPlan('', [], 10, 30, '', '')
      this.newWorkout = true
    }
    return this.workoutBuild
  }

  removeExercise(exerciseIndex: number) {
    this.workoutBuild.exercises.splice(exerciseIndex, 1)
    return this.workoutBuild
  }

  addExercise(exercise: Exercise) {
    if (this.newWorkout && this.firstExercise) {
      this.firstExercise = false
    }
    this.workoutBuild.exercises.push(exercise)
    return this.workoutBuild
  }

  moveExerciseTo(exerciseIndex: number, toIndex: number) {
    if (toIndex < 0 || toIndex >= this.workoutBuild.exercises.length) {
      return
    }
    this.workoutBuild.exercises.splice(
      toIndex,
      0,
      this.workoutBuild.exercises.splice(exerciseIndex, 1)[0]
    )
    return this.workoutBuild
  }

  addMusicTrack(trackId: string) {
    this.workoutBuild.track = trackId
    return this.workoutBuild
  }

  save() {
    if (this.newWorkout) {
      this.newWorkout = false
      return this.workoutServiceMock.addWorkout(this.workoutBuild)
    } else {
      return this.workoutServiceMock.updateWorkout(this.workoutBuild)
    }
  }

  delete(workoutId) {
    return this.workoutServiceMock.deleteWorkout(workoutId)
  }
}
