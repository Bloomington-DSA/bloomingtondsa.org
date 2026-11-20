#!/bin/sh

path=$(dirname "$0")
folder=$(basename $path)
cd "$path"

npm run build
rsync -ru --delete ./dist/ dsa:~/website/bloomingtondsa
ssh dsa 'echo "telethon" | sudo -S ~/reload'