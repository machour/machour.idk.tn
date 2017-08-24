import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'yii-package',
  styleUrl: 'yii-package.scss'
})

export class YiiPackage {

  @Prop() name: string;

  @Prop() description: string;

  getRepo() : string {
    return `https://github.com/${this.name}`; 
  }

  getDownloads() : string {
    return `https://poser.pugx.org/${this.name}/downloads`;
  }

  getStable() : string {
    return `https://poser.pugx.org/${this.name}/v/stable`;
  }

  render() {
    return (
      <div>
        <h2><a href={ this.getRepo() }>{ this.name }</a></h2>
        <div class="badges">
          <img src={this.getStable()} alt="" />
          <img src={this.getDownloads()} alt="" />
        </div>
        <p>
          { this.description }
        </p>
      </div>
    );
  }
}