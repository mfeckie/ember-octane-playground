import Component from '@glimmer/component';
import { action, set } from '@ember/object';

interface MutatorArgs {
  plainValue: string;
  mutableObject: {
    message: string;
  };
  array: any[]
}

export default class Mutator extends Component<MutatorArgs> {
  @action
  tryImmutable() {
    set(this.args, 'plainValue', 'Goodbye');
  }

  @action
  tryMutable() {
    set(this.args.mutableObject, 'message', 'Goodbye');
  }

  @action
  pushToArray() {
    this.args.array.pushObject('Goodbye');
  }
}
