import { faker } from '@faker-js/faker';
import { UserAttr } from '../../entities/user.entity';

export function UserDataBuilder(attr: Partial<UserAttr>): UserAttr {
  return {
    name: attr.name ?? faker.person.fullName(),
    email: attr.email ?? faker.internet.email(),
    password: attr.password ?? faker.internet.password(),
    createdAt: attr.createdAt ?? new Date(),
  };
}
