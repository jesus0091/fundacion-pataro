# Fundación Pataro

Website institucional desarrollado con Next.js, React, TypeScript y Tailwind CSS.

## Stack Tecnológico

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Estructura del Proyecto

```
fundacion-pataro/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   ├── about/             # Página About
│   ├── services/          # Página Servicios
│   ├── contact/           # Página Contacto
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                # Componentes UI reutilizables
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── sections/          # Componentes de secciones
│       ├── Hero.tsx
│       ├── ServicesGrid.tsx
│       ├── AboutIntro.tsx
│       └── ContactForm.tsx
├── tailwind.config.ts     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── package.json          # Dependencias del proyecto
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build

```bash
npm run build
npm start
```

## Páginas

- `/` - Homepage
- `/about` - Sobre Nosotros
- `/services` - Servicios
- `/contact` - Contacto

## Sistema de Diseño

El proyecto utiliza un sistema de diseño basado en Tailwind CSS con:

- **Colores**: Primario (azul), Secundario (púrpura), Neutros
- **Tipografía**: Escalas predefinidas para headings y body text
- **Espaciado**: Sistema consistente de padding y margins
- **Componentes**: Botones, inputs, secciones reutilizables

## Características

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navegación funcional
- ✅ Formulario de contacto con validación
- ✅ Componentes reutilizables y tipados
- ✅ Código limpio y escalable
- ✅ Diseño moderno y profesional
