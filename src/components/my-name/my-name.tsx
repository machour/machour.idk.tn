import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;

  @Prop() last: string;

  @Prop() dob: string;

  getAge() {
    var today = new Date();
    var birthDate = new Date(this.dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  render() {
    return (
      <p>
        Hello, my name is <em>{this.first} {this.last}</em> and I'm a <em>{this.getAge()}</em> years old developer.
      </p>
    );
  }
}