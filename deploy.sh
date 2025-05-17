#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git branch -M gh-pages

git remote add origin https://github.com/Mt-Rasmus/rasmustgo.git

git push -f origin gh-pages

cd -
