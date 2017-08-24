exports.config = {
  bundles: [
    { components: ['my-site', 'home-page', 'my-name', 'time-ago'] },
    { components: ['yii-page', 'yii-package'] },
    { components: ['site-menu'] },
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
  httpPort: 20002
}
