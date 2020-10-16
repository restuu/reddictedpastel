const functions = require("firebase-functions")

const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  conf: {
    distDir: ".next"
  }
})

const handle = app.getRequestHandler()

exports.nextServer = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
})