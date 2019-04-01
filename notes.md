# Responsive Portofolio Website, notes

## Prerequisites
- Node.js
- NPM
- git

## Recommended VS Code extensions for this
- Live Server
- Bracket pair colorizer
- Prettier /// I actually wanted to start using this!


## Setting up the environment

### SASS

main.scss will be our entry point
In order for the browser to read our sass files we 
[node-sass](https://github.com/sass/node-sass)


Before installing node-sass, we need to create our package.json
    npm-init
    npm install node-sass

Then we need an npm script to run our app, then you run it typing 
    npm run *scriptname*

In package.json we add the following under *scripts*
    "sass": "node-sass -w scss/ -o dist/css/ --recursive"
    This sets sass in *watch* mode, *output* on css folder and sets
    recursion for partial folders

Now we are ready to run SASS

Workflow for our CSS is now Node > SASS > LiveServer, we don't want 
to touch the CSS file, instead we update the .scss and npm will auto-
update it

### Git

Before starting our git repository, we create a .giticnore file with
the following content:
"node_modules"

Now we run
    git init


