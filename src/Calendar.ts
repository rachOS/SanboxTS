import Week from './Week';

export default class Calendar extends Week {
  constructor(public readonly week: Array<Week>) {
    super();
    const w = new Week();
  }
}
