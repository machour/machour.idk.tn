import { Component } from '@stencil/core';

@Component({
  tag: 'my-site',
  styleUrl: 'my-site.scss'
})
export class App {
  constructor() {}
  render() {
    return (
      <div class="app">
        <div class="wrapper">
          <div class="pull-left">
            <site-menu />
          </div>
          <div class="pull-right">

            <stencil-router id="router">

              <stencil-route
                url="/"
                component="home-page"
                router="#router"
                exact={true}
              />

              <stencil-route
              url="/yii"
              router="#router"
              component="yii-page"
            />

            </stencil-router>
          </div>
        </div>
      </div>
    );
  }
}
