// Verificação de rotas: renderiza cada rota no servidor (SSR) com
// StaticRouter e confirma que todos os componentes renderizam sem erros.
// Uso: node scripts/render-check.mjs
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'

const server = await createServer({
  root: process.cwd(),
  logLevel: 'silent',
  server: { middlewareMode: true },
  appType: 'custom',
})

const { default: App } = await server.ssrLoadModule('/src/App.jsx')

const rotas = [
  '/',
  '/projetos',
  '/projetos/sample-project',
  '/projetos/central-dome',
  '/projetos/sports-arena',
  '/projetos/residential-towers',
  '/projetos/monument-park',
  '/projetos/id-que-nao-existe',
  '/sobre',
  '/contato',
  '/galeria',
  '/certificacoes',
  '/rota-inexistente',
]

let falhou = false
for (const rota of rotas) {
  try {
    const html = renderToString(createElement(StaticRouter, { location: rota }, createElement(App)))
    console.log(`OK   ${rota.padEnd(32)} ${html.length} caracteres renderizados`)
  } catch (e) {
    falhou = true
    console.error(`ERRO ${rota}: ${e.message}`)
  }
}

await server.close()
console.log(falhou ? '\n❌ Algumas rotas falharam.' : '\n✅ Todas as rotas renderizaram com sucesso.')
process.exit(falhou ? 1 : 0)
