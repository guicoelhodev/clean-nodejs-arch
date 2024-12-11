import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserAttr = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserAttr> {
  constructor(
    private readonly user: UserAttr,
    id?: string,
  ) {
    UserEntity.validate(user);

    super(user, id);
    this.user = {
      ...user,
      createdAt: user.createdAt ?? new Date(),
    };
  }

  update(newName: string) {
    UserEntity.validate({ ...this.user, name: newName });
    this.name = newName;
  }

  updatePassword(newPassword: string) {
    UserEntity.validate({ ...this.user, password: newPassword });
    this.password = newPassword;
  }

  get name() {
    return this.user.name;
  }

  private set name(name: string) {
    this.user.name = name;
  }

  get email() {
    return this.user.email;
  }

  get password() {
    return this.user.password;
  }

  private set password(password: string) {
    this.user.password = password;
  }

  get createdAt() {
    return this.user.createdAt;
  }

  static validate(attr: UserAttr) {
    const validator = UserValidatorFactory.create();

    validator.validate(attr);
  }
}
