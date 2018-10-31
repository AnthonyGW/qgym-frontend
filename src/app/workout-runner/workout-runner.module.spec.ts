import { WorkoutRunnerModule } from './workout-runner.module';

describe('WorkoutRunnerModule', () => {
  let workoutRunnerModule: WorkoutRunnerModule;

  beforeEach(() => {
    workoutRunnerModule = new WorkoutRunnerModule();
  });

  it('should create an instance', () => {
    expect(workoutRunnerModule).toBeTruthy();
  });
});
