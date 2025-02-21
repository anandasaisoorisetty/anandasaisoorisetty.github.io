
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: 'b59796792831e7e45c42f493dc45740570a35974f90273ce6fa37b3a83a1148e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: 'a5a49c64605c4f9a97cb68ab24b9e779b52bbb8ca8fdeb430a3cd5110db7057b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
