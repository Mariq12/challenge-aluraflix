<p align="center">
  <img src="https://github.com/Mariq12/challenge-aluraflix/assets/101030215/5c142c8f-588f-460f-94e8-d3c20b975917" alt="LogoMain"/>
</p>

# Challenge AluraFlix
<p align="right">
   <img src="https://img.shields.io/badge/STATUS-%20COMPLETADO-green">
   </p>

## Índice

* [Título e imagen de portada](#Título-e-imagen-de-portada)

* [Insignia](#insignia)

* [Índice](#índice)

* [Descripción del proyecto](#descripción-del-proyecto)

* [Características](#características)

* [Creación del proyecto](#creación-de-proyecto)

* [Instalación](#instalación-🔧)
* [Acceso al proyecto](#📁-acceso-al-proyecto)

* [Tecnologías](#✔️-tecnologías)

* [Tecnologías secundarias](#tecnologías-secundarias)

* [Herramientas](#🛠️-herramientas)

* [Personas colaboradoras](#personas-colaboradoras)

* [Autora](#autora)

## Descripción del proyecto
Aluraflix es una plataforma diseñada para gestionar vídeos, con funcionalidades como listar, registrar, actualizar y eliminar videos, implementando React con JavaScript. Ayudará a poner en práctica y reforzar tus conocimientos en esta librería, tales como componentización, uso de hooks, consumo de API, rutas entre otros.

### ⚠️ Atención
Este proyecto utiliza un servidor local creado con [json-server](https://www.npmjs.com/package/json-server).

## Características
### Gestión de Videos:

- Listar videos
- Registrar (agregar) videos
- Actualizar información de videos
- Eliminar videos

### Funcionalidades de React:
- `Componentización:`Desarrollar una aplicación modular dividiendo la interfaz de usuario en componentes reutilizables.
- `Uso de Hooks:`Implementar y manejar estados y efectos secundarios en componentes funcionales usando hooks como useState, useEffect, etc.
- `Consumo de API:`Realizar peticiones HTTP a una API para obtener, enviar, actualizar y eliminar datos de videos.
- `Manejo de Rutas:`Implementar navegación entre diferentes vistas o páginas dentro de la aplicación utilizando herramientas como React Router.

## Creación de proyecto
Ejecutar el comando:

    npm create vite@latest

Nombre: 
    
    challenge-aluraflix

Seleccionar:

    React
    JavaScript
Ejecutar:

    cd challenge-aluraflix
    npm install
    npm rin dev

### Opcional
En el script del package.json se agrega `start` 

        "scripts": {
        "start": "vite",
        "dev": "vite",
        },

Se ejecuta el proyecto con:

     npm start
Inicia el proyecto en [http://localhost:5173/](http://localhost:5173/) 

## Instalación 🔧
1. Instalar [react-router-dom](https://www.npmjs.com/package/react-router-dom), ejecutando el comando:

        npm i react-router-dom

    Es una dependecia de react que se utiliza para trabajar con las rutas.


2. Instalar [react-icons](https://react-icons.github.io/react-icons/search/#q=MdFavorite)

        npm install react-icons

3. Instalar del paquete de **[React-Loaders-Kit](https://seimodei.github.io/react-loaders-kit-examples/)**, ejecuando en cmd dentro del proyecto:

    npm i --save react-loaders-kit

    Creación del componente Loading.
    Conectar en el App.jsx.

4. Instalar [Styled Components](https://www.npmjs.com/package/styled-components), para escribir css en el JavaScript.

        npm i styled-components

    Documentación de [styled-components](https://styled-components.com/docs/basics)

5. Descargar [Normalize.css](https://necolas.github.io/normalize.css/), para que los navegadores muestren los elementos de forma consistente y acorde con los estándares modernos.

    **Pasos a realizar:**
    1. Ingresar a Normalize.css.
    2. Dar clic en descargar.
    3. Seleccionar el contenido con:
    
            Ctrl + a (selecciona)

            Ctrl + v (pega)

        Se pega el dentro del archio GlobalStyles.jsx, pero se debe eliminar los comentarios.

        *Ruta:*

            src
            ├── components
            │   ├── globalStyles
            │   │   ├── GlobalStyles.jsx

6.  **API falsa con json server**

    **6.1.** Instalar [json-server](https://www.npmjs.com/package/json-server), para Almacenamiento de Datos.

        npm install json-server

    Dentro del **package.json** se agrega automáticamente la siguiente dependencia:

        "json-server": "^1.0.0-beta.0"

    **6.2.** Crear un archivo db.json que tenga esta estructura:

             {
                    "videos": [
                        {
                            "id": 1,
                            "title": "Qué Significa Pensar Como Programador",
                            "category": "FRONT END",
                            "photo": "https://i.ytimg.com/vi/ov7vA5HFe6w/sddefault.jpg",
                            "link": "https://www.youtube.com/embed/ov7vA5HFe6w?si=rFYWWhqKMEWzxiJn",
                            "description": "¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera? En este video Christian Velasco nos habla de las principales características de un Programador."
                        },
                    ]
            }

    **6.3.** Ejecutar el siguiente comando para levantar el servidor:

            npx json-server --watch db.json --port 3000

### Opcional

7. Para iniciar el servidor y proyectos al mismo tiempo instalar [concurrently](https://www.npmjs.com/package/concurrently)

        npm install concurrently --save-dev

    **7.1.**  Modificar el package.json agregando en el campo scripts el siguiente script:

        "start": "concurrently \"vite\" \"npx json-server --watch db.json --port 3000\"",


    **7.2.** Debería verse así:

        "scripts": {
            "start": "concurrently \"vite\" \"npx json-server --watch db.json --port 3000\"",
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
        },

    **7.3.** Iniciar el servidor JSON ejecutando:

           npm start

* Se levanta el servidor local, permitiendo acceder a la API REST simulada en http://localhost:3000, y observará el archivo db.json en el puerto 3000 ruta videos:

        http://localhost:3000/videos

* Se levanta el proyecto en:

        http://localhost:5173/

## 📁 Acceso al proyecto

### Deploy del proyecto en Vercel
1. Se crea una carpeta `dist` ejecutando el comando:

        npm run build

2. Comentar la carpeta `dist` en gitignore

            #dist

3. Subir la carpeta `dist` a GitHub.*

### Demo

![challenge-aluraflix](https://github.com/Mariq12/challenge-aluraflix/assets/101030215/9f350de6-de55-45be-b728-bbb69357155f)

Ver demo en [Vercel](https://challenge-aluraflix-olive.vercel.app/).

Ver demo en [YouTube](https://www.youtube.com/watch?v=Fd6pl0_Hh1A).

---
Ver  demo del segundo proyecto desplegado en [Vercel](https://challenge-aluraflix-v2.vercel.app/) con servidor falso creado con [My JSON Server](https://my-json-server.typicode.com/) 

Ir a repositorio [GitHub](https://github.com/Mariq12/challenge-aluraflix-v2)de la versión 2.

## ✔️ Tecnologías
* [React + Vite](https://vitejs.dev/guide/)
* JavaScript

## Tecnologías secundarias
* Node.js y npm (incluyendo node_modules)
* JSON Server (db.json para simular API)
* VsCode
* Git
* GitHub


## 🛠️ Herramientas
### Gestión
* **Trello:** Se encuentran las tareas para realizar el proyecto.

### Diseño
* [Figma](https://www.figma.com/design/fq7mKIvvVXYylv8eti3hjm/New-AluraFlix---ESP?node-id=1-106&t=HWLfNcrrMRgRcBBC-0) el quipo de Alura creó un modelo que muestra una representación visual del AluraFlix. Sin embargo, pueden haber algunos cambios en el proceso.

## Personas colaboradoras
**Alura Latam** organizó el Challenge AluraFlix y proporcionó las herramientas de gestión y diseño.


## Autora
[<img src="https://avatars.githubusercontent.com/u/101030215?v=4" width=155><br><sub>Flor María Labanda Puchaicela</sub>](https://github.com/Mariq12)
