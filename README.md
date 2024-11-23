# timefit_landing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# NOTAS PARA MÍ:

* En el archivo "package.json", hay una parte que agrege y antes era así (linea 36):

````json

"rules": {}

````
El detalle es que el framework vue necesita una configuración para poder aceptar un nombre de un componente con varias palabras, pero bueno, la configuración queda así:

````json
"rules": {
      "vue/multi-word-component-names": 0
    }
````