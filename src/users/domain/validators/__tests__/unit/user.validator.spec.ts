import { UserDataBuilder } from '@/users/domain/tests/helpers/userDataBuilder';
import { UserValidator, UserValidatorFactory } from '../../user.validator';

describe('Should test UserValidator unit test', () => {
  let sut: UserValidator;

  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });

  describe('Success cases', () => {
    it('Should return valid name', () => {
      sut.validate(UserDataBuilder({ name: 'John Doe' }));

      expect(sut.validatedData.name).toBeTruthy();
    });

    it('Should return valid email', () => {
      sut.validate(UserDataBuilder({ email: 'john_doe@email.com' }));

      expect(sut.validatedData.email).toBeTruthy();
    });
  });

  describe('Name field error', () => {
    it('Should return error on name if validate receive null', () => {
      const isValid = sut.validate(null);

      expect(isValid).toBeFalsy();
      expect(sut.errors.name).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);
    });

    it('Should return error on name if validate receive empty string', () => {
      const isValid = sut.validate(UserDataBuilder({ name: '' }));

      expect(isValid).toBeFalsy();
      expect(sut.errors.name).toStrictEqual(['name should not be empty']);
    });

    it('Should return error on name if validate receive a number', () => {
      const isValid = sut.validate(UserDataBuilder({ name: 55 as any }));

      expect(isValid).toBeFalsy();
      expect(sut.errors.name).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);
    });

    it('Should return error on name is longer than 255', () => {
      const isValid = sut.validate(UserDataBuilder({ name: 'a'.repeat(256) }));

      expect(isValid).toBeFalsy();
      expect(sut.errors.name).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ]);
    });
  });

  describe('Email field error', () => {
    it('Should return error on email if validate receive null', () => {
      const isValid = sut.validate(null);

      expect(isValid).toBeFalsy();
      expect(sut.errors.email).toStrictEqual([
        'email must be an email',
        'email should not be empty',
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);
    });

    it('Should return error on email if validate receive empty string', () => {
      const isValid = sut.validate(UserDataBuilder({ email: '' }));

      expect(isValid).toBeFalsy();
      expect(sut.errors.email).toStrictEqual([
        'email must be an email',
        'email should not be empty',
      ]);
    });

    it('Should return error on email if validate receive a number', () => {
      const isValid = sut.validate(UserDataBuilder({ email: 55 as any }));

      expect(isValid).toBeFalsy();
      expect(sut.errors.email).toStrictEqual([
        'email must be an email',
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);
    });

    it('Should return error on name is longer than 255', () => {
      const isValid = sut.validate(UserDataBuilder({ email: 'a'.repeat(256) }));

      expect(isValid).toBeFalsy();
      expect(sut.errors.email).toStrictEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ]);
    });
  });
});
