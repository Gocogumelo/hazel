const hazel = require('./index')

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

// VERCEL_URL vem sem o "https://" na frente (so o dominio puro) -- sem
// isso, os links montados a partir dele ficam quebrados (sem protocolo).
const url = VERCEL_URL ? `https://${VERCEL_URL}` : PRIVATE_BASE_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
