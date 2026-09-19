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

// Prioriza a URL fixa configurada manualmente (variavel URL). O dominio
// gerado automaticamente pela Vercel por deployment (VERCEL_URL) fica atras
// de autenticacao da propria Vercel, entao nao pode ser usado aqui -- so o
// dominio fixo do projeto e publico de verdade.
const url =
  PRIVATE_BASE_URL || (VERCEL_URL ? `https://${VERCEL_URL}` : undefined)

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
