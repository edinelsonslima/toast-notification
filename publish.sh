#!/bin/bash

echo "Passo 1: Executando o build..."
npm run build

echo "Passo 2: Trocando para branch 'dist'..."
git checkout dist

echo "Passo 3: Movendo arquivos do build para o root ..."
mv dist/* ./

echo "Passo 4: Apagando a pasta dist vazia ..."
rm -r dist

echo "Passo 5: Adicionando em staging"
git add . 

echo "Passo 6: Commitando novo builder na brach"
git commit -m "updated build files by script automation"

echo "Passo 7: Subindo alterações para o repositório online"
git push origin dist

echo "Passo 8: publicando nova versão ..."
yarn publish

echo "Passo 9: Atualizar versão ..."
git push origin dist

echo "Passo 10: Voltando pra brach main ..."
git checkout main

echo "Finalizado 👨🏻‍💻🚀"

