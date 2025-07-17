# Maiky Cookies

¡Bienvenido a **Maiky Cookies**! 🍪

Este es un proyecto web para la venta de galletas, alfajores, roles y pasteles, con un carrito de compras y sistema de pedidos por correo electrónico.

---

## Características principales

- Catálogo de productos con imágenes y categorías.
- Carrito de compras persistente (localStorage).
- Formulario de pedido con validación y envío de datos por correo electrónico (EmailJS).
- Notificaciones de éxito/error.
- Interfaz moderna y responsiva.

---

## Tecnologías utilizadas

- **Vue 3** + Composition API
- **TypeScript**
- **Vite** (build y desarrollo)
- **EmailJS** (envío de pedidos por correo)
- **vue-toast-notification** (notificaciones)
- CSS moderno y componentes reutilizables

---

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/maiky-cookies.git
   cd maiky-cookies
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Estructura de carpetas

```
maiky-cookies/
│
├── public/                # Archivos públicos (favicon, etc)
├── src/
│   ├── assets/            # Imágenes, SVGs y estilos base
│   ├── components/        # Componentes Vue (Carrito, Cards, etc)
│   ├── composable/        # Composables personalizados (useCart, useEmail)
│   ├── data/              # Datos estáticos (productos)
│   ├── directives/        # Directivas personalizadas
│   ├── interfaces/        # Tipos TypeScript
│   ├── router/            # Rutas de la app
│   ├── shared/            # Componentes compartidos (NavBar, Footer)
│   └── views/             # Vistas principales (Home, Catálogo, About)
├── package.json           # Dependencias y scripts
├── vite.config.ts         # Configuración de Vite
└── README.md              # Este archivo
```

---

## Flujo de pedido

1. El usuario agrega productos al carrito.
2. Al hacer clic en "Ordenar", se abre un formulario modal para ingresar nombre, correo y teléfono.
3. El pedido se valida y se envía por correo electrónico usando EmailJS.
4. El usuario recibe una notificación de éxito o error.

---

## Personalización

- Puedes modificar los productos en `src/data/products.ts`.
- Cambia los estilos en `src/assets/base.css` o en los componentes.
- Configura tu propio servicio de EmailJS en `src/composable/useEmail.ts`.

---

## Créditos

Desarrollado por Joan Garfias y colaboradores.

---

## Licencia

MIT
