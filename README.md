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
        },
        breakpoints: {
            xs: 362,
            s: 600,
            m: 992,
            l: 993,
            xl: 1170
        },
        meta: {
            charSet: 'utf-8',
            property: {
                'og:site_name': pkg.name,
                'og:image': `http://${pkg.name}.fr`,
                'og:locale': 'fr_FR',
                'og:title': pkg.name,
                'og:description': 'All the modern best practices in one pancake.',
                'twitter:card': 'summary',
                'twitter:site': '@ArzurUgo',
                'twitter:creator': '@ArzurUgo',
                'twitter:title': pkg.name,
                'twitter:description': 'All the modern best practices in one pancake.',
                'twitter:image': `http://${pkg.name}.fr`,
                'twitter:image:width': '200',
                'twitter:image:height': '200'
            },
            title: 'I really like pancakes in one page',
        }
    }
}
```



## Roadmap

1. ~~Installer webpack et webpack-dev-server~~
* ~~Installer Babel pour jouer avec l'ES6~~
* ~~Installer une validation Eslint avec le styleguide d'Airbnb~~
* ~~Json-loader pour importer et manipuler le json~~
* Node-sass et sass-loader pour le scss/sass
