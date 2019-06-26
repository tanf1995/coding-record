import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layout/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('../FirstPage').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analyze",
            "component": require('../dashboard/Analyze').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('../dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('../dashboard/Workplace').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/work/study/react/ant-d-base/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/puzzlecards",
        "component": require('../PuzzleCardsPage').default,
        "exact": true
      },
      {
        "path": "/mylist",
        "component": require('../MyList').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/work/study/react/ant-d-base/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/work/study/react/ant-d-base/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
