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

  it('Test the contructor method', () => {
    expect(sut.user.name).toEqual(userAttr.name);
    expect(sut.user.email).toEqual(userAttr.email);
    expect(sut.user.password).toEqual(userAttr.password);
    expect(sut.user.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(userAttr.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Getter of email field', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(userAttr.email);
    expect(typeof sut.email).toBe('string');
  });

  it('Getter of password field', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(userAttr.password);
    expect(typeof sut.password).toBe('string');
  });

  it('Getter of createdAt field', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.createdAt).toBeTruthy();
  });
});
