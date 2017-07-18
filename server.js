const express = require('express');

const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html', {
    headers: {
      // 'content-security-policy': "default-src 'none'",
      // 'content-security-policy': "default-src 'self'",
      'content-security-policy': "default-src 'none'; script-src 'self'",
      // 'content-security-policy': "img-src 'self'",
      // 'content-security-policy': "default-src 'none'; img-src 'self' media.giphy.com",
      // 'content-security-policy': "default-src 'none'; img-src 'self' https://media.giphy.com",
      // 'content-security-policy': "default-src 'self'; img-src 'self' media.giphy.com",
      // 'content-security-policy': "script-src 'unsafe-inline'",
      // 'content-security-policy': "script-src 'self' 'nonce-random'",
      // 'content-security-policy': "script-src 'sha256-f0uApKsZZTKJR3Wea2H9Ml4GWjzLpTOaW7V/ufBU890='",
      'content-security-policy': "script-src 'self' 'unsafe-eval'",
    }
  })
})

app.use('/public', express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
