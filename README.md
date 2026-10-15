# info_rodger

Aplicación web de presentación construida con React y Vite. Actualmente muestra una página personal con el mensaje “Hola soy Gerson”, una composición visual con los recursos de React y Vite, un contador interactivo y accesos a documentación y comunidades relacionadas.

## Funcionalidades

- Página de inicio responsive con soporte para temas claro y oscuro según la preferencia del sistema.
- Contador interactivo implementado con el estado de React.
- Sección de documentación con enlaces a Vite y React.
- Enlaces a la comunidad de Vite (GitHub, Discord, X y Bluesky).
- Recarga en caliente (HMR) durante el desarrollo.

## Tecnologías

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) para análisis y linting
- JavaScript y CSS

## Requisitos

- Node.js en una versión LTS compatible con Vite.
- npm (incluido con Node.js).

## Instalación

1. Clona el repositorio y entra en su directorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd info_rodger
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la URL local, normalmente `http://localhost:5173`.

Para crear una compilación de producción:

```bash
npm run build
```

Para previsualizar localmente la compilación generada:

```bash
npm run preview
```

Para comprobar el código con Oxlint:

```bash
npm run lint
```

## Estructura principal

```text
.
├── public/          # Recursos públicos, favicon e iconos
├── src/
│   ├── assets/      # Imágenes y logos usados por la interfaz
│   ├── App.jsx      # Componente principal y contenido de la página
│   ├── App.css      # Estilos de la aplicación
│   ├── index.css    # Estilos globales y temas
│   └── main.jsx     # Punto de entrada de React
├── index.html       # Documento HTML base
└── package.json     # Dependencias y scripts del proyecto
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con HMR. |
| `npm run build` | Genera la compilación optimizada para producción. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta Oxlint sobre el proyecto. |

## Estado del proyecto

El proyecto se encuentra en una fase inicial de presentación. La interfaz es completamente estática salvo por el contador interactivo y no requiere una base de datos, un servidor de API ni variables de entorno.
