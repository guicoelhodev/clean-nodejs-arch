export type UserAttr = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly user: UserAttr) {
    this.user.createdAt = this.user.createdAt ?? new Date();
  }
}
