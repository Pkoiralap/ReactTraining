import db from '../database';

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
    method: 'PUT',
    path: '/api',
    handler: (req, h) => {
      const variable = {
        [req.payload.key]: req.payload.value
      }
      return h.response(variable).type('application/json');
    },
    options: {
      cors: false,
    }
  },
  {
    method: 'POST',
    path: '/post_in_api',
    handler: (req, h) => {
      const {data, collection} = req.payload;
      return db.createCollection(collection)
        .then(() => db.createDocument(collection, data))
        .then(() => h.response({success: true}).type('application/json'))
        .catch(err => h.response({success: false, message: err.message}).type(200)) 
    },
    options: {
      cors: false,
    }
  }
]