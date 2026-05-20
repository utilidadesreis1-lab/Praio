# Praiou Receptivo

Landing page estática da Praiou Receptivo, criada para apresentar os serviços da empresa e levar visitantes do Instagram para o WhatsApp.

## Arquivos do projeto

- `index.html`: estrutura da página
- `style.css`: visual, layout e responsividade
- `script.js`: menu mobile, rolagem suave e links do WhatsApp

## Como testar localmente

1. Abra esta pasta no seu computador.
2. Dê duplo clique em `index.html`.
3. O site abrirá no navegador sem precisar de servidor ou instalação.

## Onde trocar o número do WhatsApp

Abra o arquivo `script.js` e altere a constante:

```js
const WHATSAPP_NUMBER = "5582000000000";
```

Use o número no formato internacional, sem espaços, parênteses ou traços.

## Como subir para o GitHub

1. Crie um repositório novo no GitHub.
2. Envie os arquivos desta mesma pasta para o repositório.
3. Se estiver usando Git no terminal, um fluxo simples é:

```bash
git init
git add .
git commit -m "Primeira versão do site Praiou Receptivo"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Como publicar na Vercel

1. Entre na Vercel e escolha importar um projeto do GitHub.
2. Selecione o repositório desta landing page.
3. Na configuração do deploy, use:

- Framework Preset: `Other`
- Build Command: deixar vazio
- Output Directory: deixar vazio ou usar a raiz do projeto
- Root Directory: `./`

4. Finalize o deploy.

Como o projeto é estático, a Vercel publicará o `index.html` diretamente.
