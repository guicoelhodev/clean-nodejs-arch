import { validateSync } from 'class-validator';
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validatorFields.interface';

export abstract class ClassValidatorFields<AttrValidated>
  implements ValidatorFieldsInterface<AttrValidated>
{
  errors: FieldsErrors = null;
  validatedData: AttrValidated = null;

  validate(data: any): boolean {
    const errors = validateSync(data);

    if (!errors.length) return !errors.length;

    this.errors = {};

    for (const error of errors) {
      const field = error.property;
      this.errors[field] = Object.values(error.constraints);
    }
  }
}
