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

Create the repo, and make our first commit
It's going to be a local project, it won't be pussed to gitHub

// And that's it, environtment and prerequisites ready


## Working with SASS

*Insert some notes about variables and nesting*

Working with partials:
Just create a file inside the *scss* folder, here we created *_config.scss*
Partial names start with an underscore '_' by convention.
Then you include it in your main file:
    @include 'config';

## Highlights

- Creating a hamburger button
- Two sections of the navbar sliding in from top and bottom
  (Why use float on this though?)


## Other notes

If you happen to see any error that makes no actual sense under NPM watch,
try restarting the service and save your files again

Ideas
- Blur background image of front page on nav deploy