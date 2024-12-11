export type UserAttr = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly user: UserAttr) {
    this.user = {
      ...user,
      createdAt: user.createdAt ?? new Date(),
    };
  }

  get name() {
    return this.user.name;
  }

  get email() {
    return this.user.email;
  }

  get password() {
    return this.user.password;
  }

  get createdAt() {
    return this.user.createdAt;
  }
}
