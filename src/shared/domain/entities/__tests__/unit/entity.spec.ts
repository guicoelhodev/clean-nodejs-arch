import { Entity } from '../../entity';

type StubAttr = {
  attr1: string;
  attr2: number;
};

class SubEntity extends Entity<StubAttr> {}

describe('Entity unit test', () => {
  it('Should set atrr and id', () => {
    const attr: StubAttr = { attr1: 'value1', attr2: 20 };

    const entity = new SubEntity(attr);

    console.log('entity', entity);

    expect(entity.attr).toStrictEqual(attr);
    expect(entity.id).toBeTruthy();

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(uuidRegex.test(entity.id)).toBe(true);
  });

  it('Should accept a valid uuid', () => {
    const attr: StubAttr = { attr1: 'value1', attr2: 20 };
    const randomUUID = '21d7bb24-941b-426b-90bc-8083e5944a49';
    const entity = new SubEntity(attr, randomUUID);

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(uuidRegex.test(entity.id)).toBe(true);
    expect(entity.id).toBe(randomUUID);
  });

  it('Should convert entity to Javascript Object', () => {
    const attr: StubAttr = { attr1: 'value1', attr2: 20 };
    const randomUUID = '21d7bb24-941b-426b-90bc-8083e5944a49';
    const entity = new SubEntity(attr, randomUUID);

    expect(entity.toJSON()).toStrictEqual({ ...attr, id: randomUUID });
  });
});
