export abstract class Entity<TAttr = any> {
  public readonly id: string;
  public readonly attr: TAttr;

  constructor(attr: TAttr, id?: string) {
    this.attr = attr;
    this.id = id || crypto.randomUUID();
  }

  toJSON(): Required<{ id: string } & TAttr> {
    return {
      ...this.attr,
      id: this.id!,
    } as Required<{ id: string } & TAttr>;
  }
}
