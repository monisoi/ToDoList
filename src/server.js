import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Todo from './components/todo'

// init express
const app = express()

// add static path
app.use(express.static('public'))

// add top page rounting
app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div id="app">
          <Todo />
        </div>
        <script src="client.js" />
      </div>
    )
  )
})

// atart listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})