import { Entity } from '@/shared/domain/entities/entity';

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
    super(user, id);
    this.user = {
      ...user,
      createdAt: user.createdAt ?? new Date(),
    };
  }

  update(newName: string) {
    this.name = newName;
  }

  updatePassword(newPassword: string) {
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
}
