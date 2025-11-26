

# 📑 DOCUMENTACIÓN DEL PROYECTO: Login Moderno JS (Soft UI)

## 1\. Resumen y Objetivo

Este proyecto implementa un formulario de inicio de sesión (`login`) completamente funcional utilizando **HTML, CSS y JavaScript** básico. El objetivo principal fue demostrar la validación de credenciales en el lado del cliente (sin servidor) y aplicar un diseño de interfaz de usuario moderno y estético conocido como **Soft UI (Neumorphism)**.

| Característica | Implementación |
| :--- | :--- |
| **Tecnologías** | HTML5, CSS3 (Soft UI), JavaScript (Vanilla ES6) |
| **Diseño** | Neumorphism (Relieve y Hundimiento sutiles) |
| **Funcionalidad** | Validación de Credenciales Estáticas y Retroalimentación (Feedback) Visual |

-----

## 2\. Estructura HTML (`index.html`)

El HTML define un formulario sencillo con los campos esenciales para el login:

  * **Contenedor (`login-container`):** El elemento principal al que se aplica el efecto de relieve *Soft UI* (Neumorphism).
  * **Formulario (`login-form`):** Contiene los dos grupos de entrada.
  * **Entradas (`#username`, `#password`):** Campos tipo `text` y `password`, estilizados para parecer hundidos.
  * **Botón (`#login-button`):** Botón de tipo `submit`, estilizado para tener relieve y mostrar un efecto de hundimiento al ser presionado.
  * **Área de Mensajes (`#message-area`):** Un contenedor dinámico utilizado por JavaScript para mostrar mensajes de éxito o error.

-----

## 3\. Estilos CSS (`style.css`)

El CSS es el pilar de este proyecto, aplicando la estética *Soft UI* mediante sombras internas y externas controladas.

### 3.1. Principios de Soft UI (Neumorphism)

El diseño se basa en la combinación de dos sombras que simulan la interacción de la luz sobre un objeto:

  * **Sombra Clara (`--shadow-light`):** Se proyecta desde la esquina superior izquierda (simulando la fuente de luz).
  * **Sombra Oscura (`--shadow-dark`):** Se proyecta desde la esquina inferior derecha.

| Elemento | Efecto de Sombra Aplicado | Resultado Visual |
| :--- | :--- | :--- |
| **`.login-container`** | Sombras externas (relieve). | Hace que el formulario parezca flotar sobre el fondo. |
| **`input`** | Sombras internas (`inset`). | Hace que los campos parezcan hundidos en la superficie. |
| **`#login-button`** | Sombras externas y `box-shadow` internas en `:active`. | El botón parece sobresalir y se "hunde" ligeramente al ser clicado. |

### 3.2. Feedback Visual

Se utilizan clases específicas para la retroalimentación del usuario en el área de mensajes:

| Clase CSS | Color / Estilo | Propósito |
| :--- | :--- | :--- |
| **`.message-area.success`** | Fondo verde claro, texto verde oscuro. | Mensaje de inicio de sesión exitoso. |
| **`.message-area.error`** | Fondo rojo claro, texto rojo oscuro. | Mensaje de credenciales inválidas. |

-----

## 4\. Lógica JavaScript (`script.js`)

La lógica es simple y se enfoca en la validación del lado del cliente.

### 4.1. Credenciales Estáticas

Se utilizan constantes para simular la verificación de credenciales:

```javascript
const VALID_USERNAME = 'usuario';
const VALID_PASSWORD = 'password123';
```

### 4.2. Funcionalidad `handleLogin()`

Esta función se activa al enviar el formulario (`submit` event):

1.  **`event.preventDefault()`:** Es crítico para detener el envío de datos tradicional del formulario y evitar la recarga de la página.
2.  **Validación:** Compara los valores ingresados por el usuario con las constantes preestablecidas.
3.  **Retroalimentación:** Llama a la función `showMessage()` con el mensaje y el tipo (`'success'` o `'error'`) adecuados.

### 4.3. Función `showMessage()`

Gestiona la apariencia dinámica del área de mensajes:

  * Remueve las clases de estado (`hidden`, `success`, `error`) para resetear el área.
  * Añade la clase de tipo (`success` o `error`) para aplicar el color y estilo correctos definidos en CSS.
  * Remueve la clase `hidden` para mostrar el resultado al usuario.

