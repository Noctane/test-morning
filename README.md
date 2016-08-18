[ ![Codeship Status for Ugarz/automatic-waffle](https://codeship.com/projects/afdd4d60-4797-0134-d570-7274acc1ec8c/status?branch=master)](https://codeship.com/projects/169231)

# This is a personnal classic webpack server build to increase time development.
For personnal purpose

## Start playing with it

```javascript
git clone https://github.com/Ugarz/BasicWebpackServer.git
cd BasicWebpackServer
npm i && npm start
```
You can co to [http://localhost:2323/](http://localhost:2323/) to check what's happening. You should open the chrome console (pressing `cmd + alt + i` on mac).

Now configuration of project is exported :
Add this to `src/config.js`
```js
const pkg = require('../package.json');
module.exports = {
    app: {
        name: pkg.name,
        description: 'Oh yeah, dya like pancakes ?',
        localeDefault: 'fr_FR',
        server: {
            url: 'http://localhost',
            port: 8080
        }
    }
}
```



## Roadmap

1. ~~Installer webpack et webpack-dev-server~~
* ~~Installer Babel pour jouer avec l'ES6~~
* ~~Installer une validation Eslint avec le styleguide d'Airbnb~~
* ~~Json-loader pour importer et manipuler le json~~
* ~~Permettre de gérer le sass/scss~~
* Rajouter React-router
* Gérer le state de l'appli avec Redux
* Faire un espace de connexion simple (Redis/Mongo ou Mysql)
