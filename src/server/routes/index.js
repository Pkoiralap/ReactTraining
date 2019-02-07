import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import HtmlMaker from '../htmlMaker';
import App from '../../index';
import serverRoutes from './serverRoutes';

export default [
  ...serverRoutes,
  {
    path: '/{nest?}', // optional field
    method: 'GET',
    handler: (req, h) => {
      try {
        const str = renderToString(
          <StaticRouter location={req.params.nest}>
            <App />
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