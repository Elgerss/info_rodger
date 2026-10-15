# info_rodger

Infografía web interactiva sobre la tríada de seguridad de la información, también conocida como modelo CIA: **Confidencialidad, Integridad y Disponibilidad**. El proyecto explica conceptos técnicos de ciberseguridad con ejemplos cotidianos, una interfaz visual y actividades para que cualquier persona pueda explorar el tema.

## Demo

Visita la versión publicada:

**[https://info-rodger.vercel.app/](https://info-rodger.vercel.app/)**

## Funcionalidades

- Diagrama visual de la tríada CIA.
- Tarjetas interactivas para consultar cada principio:
  - **Confidencialidad:** solo accede quien tiene permiso.
  - **Integridad:** la información sigue siendo correcta y no ha sido alterada.
  - **Disponibilidad:** los datos y servicios están disponibles cuando se necesitan.
- Panel de detalle con explicaciones técnicas, ejemplos prácticos y controles de seguridad relacionados.
- Sección de casos reales para conectar la teoría con incidentes conocidos:
  - **Equifax (2017):** exposición de datos personales, relacionada principalmente con la confidencialidad.
  - **SolarWinds (2020):** alteración de una actualización de software, relacionada principalmente con la integridad.
  - **WannaCry y el NHS (2017):** interrupción de servicios sanitarios, relacionada principalmente con la disponibilidad.
- Reto interactivo para identificar qué principio está en riesgo en diferentes situaciones.
- Diseño responsive para escritorio, tabletas y dispositivos móviles.
- Navegación interna mediante enlaces y desplazamiento suave.
- Composición visual creada con CSS, sin depender de imágenes externas.
- Recarga en caliente (HMR) durante el desarrollo.

## Tecnologías

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) para análisis y linting
- JavaScript (JSX) y CSS
- [Vercel](https://vercel.com/) para el despliegue de la demo

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

El proyecto es una experiencia educativa frontend. El contenido se presenta de forma estática y las interacciones se gestionan en el navegador con el estado de React. No requiere una base de datos, un servidor de API ni variables de entorno.

La aplicación está publicada y disponible en [info-rodger.vercel.app](https://info-rodger.vercel.app/).
