import * as classValidatorLib from 'class-validator';
import { ClassValidatorFields } from '../../ClassValidatorFields';

type StubAttr = { field: string };
class StubClassValidatorFields extends ClassValidatorFields<StubAttr> {}

describe('ClassValidatorFields unit test', () => {
  it('Should initialize errors and validatedData variables with null', () => {
    const sut = new StubClassValidatorFields();

    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('Should validate with errors', () => {
    const spyValidateSync = jest.spyOn(classValidatorLib, 'validateSync');

    spyValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: { isRequired: 'test error' },
      },
    ]);

    const sut = new StubClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });
});
