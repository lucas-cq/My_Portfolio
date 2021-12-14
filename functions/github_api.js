require('dotenv').config()
const express = require('express')
const app = express()
const { Octokit } = require('@octokit/core')

const octokit = new Octokit({ auth: process.env.GIT_TOKEN })

app.get('/api/public_repo', async (req, res) => {
  const response = await octokit.request('GET /public_repo?per_page=100', {
    org: 'octokit',
    type: 'private'
  })

  res.send(response)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`)
})