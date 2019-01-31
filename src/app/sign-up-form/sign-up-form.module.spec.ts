import { SignUpFormModule } from './sign-up-form.module';

describe('SignUpFormModule', () => {
  let signUpFormModule: SignUpFormModule;

  beforeEach(() => {
    signUpFormModule = new SignUpFormModule();
  });

  it('should create an instance', () => {
    expect(signUpFormModule).toBeTruthy();
  });
});
