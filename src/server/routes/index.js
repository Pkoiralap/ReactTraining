import React from 'react';
import {Provider} from 'react-redux';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import HtmlMaker from '../htmlMaker';
import App from '../../index';
import serverRoutes from './serverRoutes';

import store from '../../Store';

export default [
  ...serverRoutes,
  {
    path: '/{nest?}', // optional field
    method: 'GET',
    handler: (req, h) => {
      try {
        const str = renderToString(
          <StaticRouter location={req.params.nest}>
            <Provider store={store}>
              <App />
            </Provider>
          </StaticRouter>
        );
        const res = HtmlMaker(str);
        return h
          .response(res)
          .type('text/html');

      } catch(err) {
        console.log(err);
      }
    }
  },
]