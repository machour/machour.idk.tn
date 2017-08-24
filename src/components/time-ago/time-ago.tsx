import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'time-ago',
  styleUrl: 'time-ago.scss'
})

export class TimeAgo {

  @Prop() date: string;

  // Todo: take me in account please :)
  @Prop() unit: string;

  getPeriod() {
    var today = new Date();
    var old = new Date(this.date);
    var years = today.getFullYear() - old.getFullYear();
    var m = today.getMonth() - old.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < old.getDate())) {
        years--;
    }
    return years;
  }

  render() {
    return (
      <em>{this.getPeriod()} years</em>
    );
  }
}