# App BBVA Sngular
Esta aplicación está desarrollada como práctica para el ejercicio propuesto por BBVA.

Esta aplicación consta de tres pantallas diferentes:
- Login: Es la pantalla que se muestra por defecto cuando un usuario no está logueado. En ella tendrás que ingresar un usuario y una contraseña para poder acceder al dashboard. Por defecto se puede entrar con:
  - email: demo@demo.com
  - password: demo
- Register: Si no deseas acceder con el usuario demo siempre puedes registrarte através de esta página, ingresando tus datos de contacto.
- Dashboard: El dashboard está disponible solo para usuarios autenticados, si intentas acceder a el sin estar registrado, este te redireccionará a la pagina de login. Dentro de este dashboard podrás ver un countdown y un botón para poder desconectarte de tu cuenta
## Tecnologías implementadas
En este proyecto se han implementado las siguientes librerias
- LitElement
- Lit-HTML
- Redux
- Open-wc
- Storybook
- PWA Helpers
- Ramda
## Arrancar el proyecto
Para arrancar el proyecto 

```bash
npm i
npm run start // Arranca la aplicación para el desarrollo
npm run start:build // Arranca el proyecto después de hacer built
npm run test // Arranca los test
npm run storybook // Arranca el storybook
# requires node 10 & npm 6 or higher
```

## Más configuración

Si quieres conocer más sobre la configuración de este repositorio puedes ir a `package.json`.
