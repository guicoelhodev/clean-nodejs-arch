export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<Validated> {
  errors: FieldsErrors;
  validatedData: Validated;
  validate<T>(data: T): boolean;
}
