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
  }
]