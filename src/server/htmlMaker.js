export default function (content='') {
  return `<html>
  <head>
    <title> React Training </title>
    <link rel="stylesheet" type="text/css" href="${process.env.NODE_PATH}/static/css/index.css">
  </head>
  <body>
    <div id="react-root">${content}</div>
    <script src="${process.env.NODE_PATH}/production/bundle.js"> </script>
  </body>
</html>`
}