import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Counter extends Component {
  @tracked count: number = 0;

  get formattedCount() {
    return this.count.toString().padStart(3, '0');
  }

  @action
  increment() {
    this.count++
  }

  @action
  decrement() {
    this.count--
  }
}
