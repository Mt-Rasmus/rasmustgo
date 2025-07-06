#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# go to the build output directory
cd dist

# initialize a new git repo in dist/
git init
git add -A
git commit -m 'deploy'

# force push to gh-pages branch
git push -f https://github.com/Mt-Rasmus/rasmustgo.git master:gh-pages

# go back to root
cd -
