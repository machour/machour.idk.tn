import { Component } from '@stencil/core';

@Component({
  tag: 'yii-page',
  styleUrl: 'yii-page.scss'
})

export class YiiPage {
  render() {
    return (
      <div>
        <h1>Yii Packages</h1>
        <p>
          Here are a few open sourced packages I've cooked while developing <a href="http://yiiframework.com/">Yii</a> based solutions for my customers.
        </p>
        <yii-package name="machour/yii2-notifications" description="A complete notifications module for your Yii 2 powered application."></yii-package>
        <yii-package name="machour/yii2-swagger-ui" description="This module will generate your swagger JSON file by parsing your controllers and models docblocks."></yii-package>
        <yii-package name="machour/yii2-swagger-api" description="Swagger UI assets for Yii2."></yii-package>
        <yii-package name="machour/yii2-google-apiclient" description="A Yii2 wrapper for the official Google API PHP Client. CLI utility provided for authentication."></yii-package>
        <yii-package name="machour/yii2-sparkline" description="The jQuery sparkline assets and widget for Yii2."></yii-package>
        </div>
    );
  }
}
