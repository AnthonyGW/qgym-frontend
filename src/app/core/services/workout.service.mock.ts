import { of } from 'rxjs'
import { Exercise, WorkoutPlan } from '../model'

export class WorkoutServiceMock {
  constructor() {
    this.setupInitialExercises()
    this.setupInitialWorkouts()
  }
  basicWorkout: WorkoutPlan
  exercises: Array<Exercise> = []
  restExercise: Exercise
  workoutList: WorkoutPlan[] = []

  get allExercises() {
    return this.exercises
  }

  get restExerciseSample() {
    return this.restExercise
  }

  getWorkout(workoutName) {
    const workout = this.workoutList.find(workoutElem => workoutName === workoutElem.name)
    if (workout) {
      return { subscribe: callback => callback(workout) }
    } else {
      return { subscribe: callback => callback(this.basicWorkout) }
    }
  }

  getWorkouts(refresh) {
    this.workoutList.push(this.basicWorkout)
    return { subscribe: callback => callback(this.workoutList) }
  }

  addWorkout(workout: WorkoutPlan) {
    this.workoutList.push(workout)
    return of(workout)
  }

  updateWorkout(workout: WorkoutPlan) {
    const workoutIndex = this.workoutList.findIndex(
      workoutElem => workout.name === workoutElem.name
    )
    const workoutNew = Object.assign(this.workoutList[workoutIndex], workout)
    return of(workoutNew)
  }

  deleteWorkout(workoutId) {
    const workoutIndex = this.workoutList.findIndex(
      workoutElem => workoutId === workoutElem.id
    )
    this.workoutList.splice(workoutIndex, 1)
    return of({ message: 'Workout deleted.' })
  }

  setupInitialExercises() {
    this.restExercise = new Exercise(
      'rest',
      'Resting Time',
      'Relax, stretch and get ready for the next exercise.',
      'rest.png'
    )
    this.exercises.push(
      new Exercise(
        'jumpingJacks',
        'Jumping Jacks',
        'A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.',
        'JumpingJacks.png',
        `Assume an erect position, with feet together and arms at your side. <br>
                  Slightly bend your knees, and propel yourself a few inches into the air. <br>
                  While in air, bring your legs out to the side about shoulder width or slightly wider. <br>
                  As you are moving your legs outward, you should raise your arms up over your head; <br>
                  arms should be slightly bent throughout the entire in-air movement. <br>
                  Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent`
      )
    )

    this.exercises.push(
      new Exercise(
        'wallSit',
        'Wall Sit',
        'A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.',
        'wallsit.png',
        `Place your back against a wall with your feet shoulder width apart and a little ways out from the wall. <br>
                 Then, keeping your back against the wall, lower your hips until your knees form right angles.`
      )
    )

    this.exercises.push(
      new Exercise(
        'pushUp',
        'Push up',
        'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms',
        'Pushup.png',
        `Lie prone on the ground with hands placed as wide or slightly wider than shoulder width. <br>
                 Keeping the body straight, lower body to the ground by bending arms at the elbows. <br>
                 Raise body up off the ground by extending the arms.`
      )
    )

    this.exercises.push(
      new Exercise(
        'crunches',
        'Abdominal Crunches',
        'The basic crunch is a abdominal exercise in a strength-training program.',
        'crunches.png',
        `Lie on your back with your knees bent and feet flat on the floor, hip-width apart. <br>
                 Place your hands behind your head so your thumbs are behind your ears. <br>
                 Hold your elbows out to the sides but rounded slightly in. <br>
                 Gently pull your abdominals inward. <br>
                 Curl up and forward so that your head, neck, and shoulder blades lift off the floor. <br>
                 Hold for a moment at the top of the movement and then lower slowly back down.`
      )
    )

    this.exercises.push(
      new Exercise(
        'stepUpOntoChair',
        'Step Up Onto Chair',
        'Step exercises are ideal for building muscle in your lower body.',
        'stepUpOntoChair.png',
        `Position your chair in front of you. <br>
                 Stand with your feet about hip width apart, arms at your sides. <br>
                 Step up onto the seat with one foot, pressing down while bringing your other foot up next to it. <br>
                 Step back with the leading foot and bring the trailing foot down to finish one step-up.`
      )
    )

    this.exercises.push(
      new Exercise(
        'squat',
        'Squat',
        'The squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips, buttocks and quads.',
        'squat.png',
        `Stand with your head facing forward and your chest held up and out. <br>
                 Place your feet shoulder-width apart or little wider. Extend your hands straight out in front of you. <br>
                 Sit back and down like you're sitting into a chair. Keep your head facing straight as your upper body bends <br>
                 forward a bit. Rather than allowing your back to round, let your lower back arch slightly as you go down. <br>
                 Lower down so your thighs are parallel to the floor, with your knees over your ankles. <br>
                 Press your weight back into your heels. <br>
                 Keep your body tight, and push through your heels to bring yourself back to the starting position.`
      )
    )

    this.exercises.push(
      new Exercise(
        'tricepdips',
        'Tricep Dips On Chair',
        'A body weight exercise that targets triceps.',
        'tricepdips.png',
        `Sit up on a chair. Your legs should be slightly extended, with your feet flat on the floor. <br>
                Place your hands edges of the chair. Your palms should be down, fingertips pointing towards the floor. <br>
                Without moving your legs, bring your glutes forward off the chair. <br>
                Steadily lower yourself. When your elbows form 90 degrees angles, push yourself back up to starting position.`
      )
    )

    this.exercises.push(
      new Exercise(
        'plank',
        'Plank',
        'The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves' +
          ' maintaining a difficult position for extended periods of time.',
        'Plank.png',
        `Get into pushup position on the floor. <br>
                 Bend your elbows 90 degrees and rest your weight on your forearms. <br>
                 Your elbows should be directly beneath your shoulders, and your body should form a straight line from head to feet. <br>
                 Hold this position.`
      )
    )

    this.exercises.push(
      new Exercise(
        'highKnees',
        'High Knees',
        'A form exercise that develops strength and endurance of the hip flexors and quads and stretches the hip extensors.',
        'highknees.png',
        `Start standing with feet hip-width apart. <br>
                 Do inplace jog with your knees lifting as much as possible towards your chest.`
      )
    )

    this.exercises.push(
      new Exercise(
        'lunges',
        'Lunges',
        'Lunges are a good exercise for strengthening, sculpting and building several muscles/muscle groups, <br>' +
          'including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings.',
        'lunges.png',
        `Start standing with feet hip-width apart. <br>
                 Do inplace jog with your knees lifting as much as possible towards your chest.`
      )
    )

    this.exercises.push(
      new Exercise(
        'pushupNRotate',
        'Pushup And Rotate',
        'A variation of pushup that requires you to rotate.',
        'pushupNRotate.png',
        `Assume the classic pushup position, but as you come up, rotate your body so your right arm lifts up and extends overhead. <br>
                 Return to the starting position, lower yourself, then push up and rotate till your left hand points toward the ceiling.`
      )
    )

    this.exercises.push(
      new Exercise(
        'sidePlank',
        'Side Plank',
        'A variation to Plank done using one hand only.',
        'sideplank.png',
        `Lie on your side, in a straight line from head to feet, resting on your forearm. <br>
                 Your elbow should be directly under your shoulder. <br>
                 With your abdominals gently contracted, lift your hips off the floor, maintaining the line. <br>
                 Keep your hips square and your neck in line with your spine. Hold the position.`
      )
    )
  }

  setupInitialWorkouts() {
    this.basicWorkout = new WorkoutPlan(
      '8 Minute Workout',
      this.exercises,
      5,
      10,
      `A basic workout plan that has all the exercises with no repetition.
      <br>
      You are not fit until you can beat this in one go.`,
      'imaxx-ableton/survivor-eye-of-the-tigerimaxx-remix'
    )
  }
}
