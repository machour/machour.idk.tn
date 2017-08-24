import { Component } from '@stencil/core';


@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {
  render() {
    return (
      <div>
        <ul>
            <li>
              <stencil-route-link url="/" router="#router">
                About me
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link url="/yii" router="#router">
                Yii2 Packages
              </stencil-route-link>
            </li>
          </ul>

         

      </div>
    );
  }
}
