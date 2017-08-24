import { Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})

export class HomePage {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <h4>About me</h4>
        <my-name first="Mehdi" last="Achour" dob="1982-01-19"></my-name>
        <p>
          I have been doing <em>LAMP</em> related development for <time-ago date="2001-07-01" unit="years"></time-ago> now.
          Lately I've been using <a href="http://yiiframework.com/">Yii</a> for almost all my projects.
        </p>
        <p>
          I also did mobile apps in the early mobile days (WAP, iMode, then Android, BlackBerry, Bada, YouNameIt).
        </p>
        <p>
          I recently dived into modern days Javascript (Node/React/ReactNative/Ionic). <br />
          This web-site have been developped with the brand new <a href="https://stenciljs.com/">Stencil</a> Web Components compiler !
        </p>
        <p>
          You'll find on this website most of my open sourced work with demonstrations and guides.
        </p>
        <h4>Talk to me</h4>
        <p>
          I'm available as <a href="https://twitter.com/mac_hour">@mac_hour</a> on Twitter.
        </p>
      </div>
    );
  }
}
