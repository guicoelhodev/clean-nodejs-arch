import { UserAttr, UserEntity } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity unit test', () => {
  let userAttr: UserAttr;
  let sut: UserEntity;

  beforeEach(() => {
    userAttr = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new UserEntity(userAttr);
  });

  it('Should test the contructor method', () => {
    expect(sut.user.name).toEqual(userAttr.name);
    expect(sut.user.email).toEqual(userAttr.email);
    expect(sut.user.password).toEqual(userAttr.password);
    expect(sut.user.createdAt).toBeInstanceOf(Date);
  });
});
