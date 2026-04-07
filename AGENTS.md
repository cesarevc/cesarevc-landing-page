## Project Context
Landing page para el Portfolio personal de cesarevc desarrollador de software profesional.

Construido con Next.js 16, TypeScript y Tailwind CSS bajo una estetica **Terminal Noir**: oscura, tecnica y premium.

## Stack

| Capa | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 3 + CSS global |
| Fuentes | Inter (sans) + JetBrains Mono (mono) via  |
| Runtime | React 19 |

## Design — Terminal Noir

Paleta oscura premium inspirada en terminales e IDEs modernos, con acentos indigo/violeta/cian.

## Rules
- Usa TypeScript siempre
- No uses librerías sin justificar
- Prefiere funciones puras
- Manten el proyecto solo con codigo frontend

## Commands

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Compila el proyecto (valida tipos + genera build) |
| `npm run lint` | Ejecuta ESLint para validar código |
| `npm run format` | Formatea código con Prettier |

**Scripts en `package.json`:**
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

## Notes
- El proyecto corre en http://localhost:3000

## Convenciones de codigo

- Nombres en inglés (variables, funciones, tipos)
- **PascalCase** para componentes React y tipos TypeScript
- **camelCase** para variables, funciones y métodos
- **UPPER_SNAKE_CASE** para constantes
- Archivos de componentes: PascalCase (`Hero.tsx`)
- Archivos de utilidades: camelCase (`constants.tsx`)
- Sin punto y coma al final de líneas
- 2 espacios de indentación
- Máximo 100 caracteres por línea de código

## Patrones

- Componentes funcionales con hooks
- Props tipadas con interfaces/types explícitas
- Separación de contenido (`constants/`) y lógica de vistas
- Composición sobre herencia
- Evitar prop drilling: usar contexto solo si es necesario
- Componentes sin lógica compleja (delegación a hooks customizados si es necesario)

## Estructura de proyecto

```
portfolio-nextjs/
├── app/                    # App Router (Next.js 16+)
│   ├── layout.tsx         # Layout raíz con metadata y providers
│   ├── page.tsx           # Página principal (/)
│   └── globals.css        # Estilos globales y reset
│
├── components/            # Componentes React reutilizables
│   ├── About.tsx          # Sección About
│   ├── Contact.tsx        # Formulario o sección Contact
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Nav.tsx            # Navegación
│   ├── Projects.tsx       # Galería de proyectos
│   └── Skills.tsx         # Skills/tecnologías
│
├── constants/             # Datos estáticos
│   └── content.tsx        # Contenido del portfolio (textos, links, etc)
│
├── types/                 # Definiciones TypeScript
│   └── types.ts           # Interfaces y tipos compartidos
│
├── public/                # Activos estáticos (si es necesario)
│   └── ...                # Imágenes, CV, etc
│
├── config/                # Configuración (posible a futuro)
│   └── ...                # Variables de entorno, URLs, etc
│
├── .env.local             # Variables de entorno locales
├── next.config.ts         # Configuración Next.js
├── tailwind.config.ts     # Configuración Tailwind CSS
├── tsconfig.json          # Configuración TypeScript
├── postcss.config.mjs     # Configuración PostCSS
├── package.json           # Dependencias y scripts
└── README.md              # Documentación del proyecto
```

**Principios:**
- Máximo 1 componente por archivo
- Componentes pequeños y reutilizables
- Contenido centralizado en `constants/`
- Types compartidos en `types/`
- Estilos vía Tailwind (no CSS modules)

## Work Flow

1. Feature branch desde `main`
2. Desarrollo local (`npm run dev`)
3. Commit con convención Conventional Commits
4. Push y crear Pull Request en GitHub
6. Review + merge a `main`
7. Vercel deploy automático a producción (cesarevc.dev)

## Testing, CI/CD

**Infraestructura:**
- **CI**: GitHub
- **CD**: Vercel (auto-deploy en main)
- **Repo**: https://github.com/cesarevc/cesarevc-landing-page
- **Live**: https://www.cesarevc.dev/


**Vercel Integration:**
- Auto-deploy en `main` → producción (cesarevc.dev)
- Auto-deploy en PRs → preview URLs
- Configurado desde dashboard de Vercel

**Checklist pre-push:**
- `npm run build` - valida tipos y genera build
- `npm run lint` - ESLint + Prettier
- Commit con convención Conventional Commits 

## Conventional Commits:

type: description

Tipos permitidos:
- feat: nueva funcionalidad
- fix: corrección de bug
- refactor: cambio de código sin funcionalidad
- style: cambios en estilos (Tailwind, CSS)
- docs: cambios en documentación
- chore: actualizaciones de dependencias, config

Ejemplos:
- feat: add Projects section component
- style: update Hero gradient colors
- refactor: extract button into reusable component
- docs: update AGENTS.md with conventions

