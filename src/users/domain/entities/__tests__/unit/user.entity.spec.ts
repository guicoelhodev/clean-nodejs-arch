import { UserDataBuilder } from '@/users/domain/tests/helpers/userDataBuilder';
import { UserAttr, UserEntity } from '../../user.entity';

describe('UserEntity unit test', () => {
  let userAttr: UserAttr;
  let sut: UserEntity;

  beforeEach(() => {
    userAttr = UserDataBuilder({});

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

  it('Setter of name field', () => {
    sut['name'] = 'other name';

    expect(sut.name).toEqual('other name');
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

  it('Setter of password field', () => {
    sut['password'] = 'other password';

    expect(sut.password).toEqual('other password');
  });

  it('Getter of createdAt field', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.createdAt).toBeTruthy();
  });

  it('Should update a user', () => {
    sut.update('update name');
    expect(sut.name).toBe('update name');
  });

  it('Should update password field', () => {
    sut.updatePassword('update password');
    expect(sut.password).toBe('update password');
  });
});
