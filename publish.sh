#!/bin/bash

set -e

echo "Passo 1: Executando o build..."
npm run build

echo "Passo 2: Minificando o javascript..."
node minify.mjs

echo "Passo 3: Trocando para branch 'dist'..."
git checkout dist

echo "Passo 4: Movendo arquivos do build para o root ..."
mv dist/* ./

echo "Passo 5: Apagando a pasta dist vazia ..."
rm -r dist

echo "Passo 6: Adicionando em staging"
git add .

echo "Passo 7: Commitando novo builder na brach"
git commit -m "updated build files by script automation"

echo "Passo 8: Subindo alterações para o repositório online"
git push origin dist

echo "Passo 9: publicando nova versão ..."
yarn publish

echo "Passo 10: Atualizar versão ..."
git push origin dist

echo "Passo 11: Voltando pra brach main ..."
git checkout main

echo "Finalizado 👨🏻‍💻🚀"

