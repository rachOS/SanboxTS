document.body.innerHTML = '<select id="select-element"></select>';

class Container {
  source: Source = new Source();
  target: Target = new Target();
}

class Target {
  id: number = 0;
}

class Source {
  id: number = 0;
  selectElement: HTMLSelectElement | null =
    document.querySelector('#select-element');

  getId(id: number): void {
    this.id = id;
  }
}

describe('How to pass props between scripts', () => {
  it('the source script must have a method handling an id', () => {
    const source = new Source();
    expect(source.id).toEqual(0);
    source.getId(1);
    expect(source.id).toEqual(1);
  });

  it('the container script must be composed with a source script', () => {
    const container = new Container();
    expect(container.source).toBeInstanceOf(Source);
  });

  it('the container can retrieve the source id', () => {
    const container = new Container();
    container.source.getId(5);
    expect(container.source.id).toEqual(5);
  });

  it('the container can pass the source id to the target', () => {
    const container = new Container();
    container.source.getId(5);
    container.target.id = container.source.id;
    expect(container.target.id).toEqual(5);
  });
});

describe('How to retrieve value options', () => {
  const container = new Container();
  expect(container.source.selectElement).toBeInstanceOf(HTMLSelectElement);
});

export {};
