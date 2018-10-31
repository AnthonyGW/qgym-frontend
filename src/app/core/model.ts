export class WorkoutPlan {
  constructor(
    public name: string,
    public exercises: Exercise[],
    public restBetweenExercise?: number,
    public exerciseDuration?: number,
    public description?: string,
    public track?: string,
    public id?: string
  ) {}

  totalWorkoutDuration(): number {
    if (this.exercises.length === 0 || !this.exercises) {
      return 0
    }
    const total = this.exercises.length * this.exerciseDuration

    return (
      (this.restBetweenExercise ? this.restBetweenExercise : 0) *
        (this.exercises.length - 1) +
      total
    )
  }
}

export class Exercise {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public procedure?: string
  ) {}
}

export class ExerciseChangedEvent {
  constructor(public current: Exercise, public next: Exercise) {}
}
