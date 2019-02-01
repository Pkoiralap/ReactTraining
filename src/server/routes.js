import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import HtmlMaker from './htmlMaker';
import App from '../index';

export default [
  {
    method: 'GET',
    path: '/static/images/{param*}',
    handler: {
      directory: {
        path: `${process.env.NODE_PATH}/static/images`,
      },
    },
  },
  {
    method: 'GET',
    path: '/static/css/{param*}',
    handler: {
      directory: {
        path: `${process.env.NODE_PATH}/static/css`,
        index: ['index.css'],
      },
    },
  },
  {
    method: 'GET',
    path: '/production/{param*}',
    handler: {
      directory: {
        path: `${process.env.NODE_PATH}/production`,
        index: ['index.html'],
      },
    },
  },
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