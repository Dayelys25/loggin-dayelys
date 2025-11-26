// --- 1. DATOS DE CREDENCIALES VÁLIDAS ---
const VALID_USERNAME = 'usuario';
const VALID_PASSWORD = 'password123';

// --- 2. SELECTORES DEL DOM ---
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageArea = document.getElementById('message-area');
const messageText = document.getElementById('message-text');

// --- 3. FUNCIÓN PARA MOSTRAR MENSAJES ---
function showMessage(message, type) {
    messageText.textContent = message;
    messageArea.classList.remove('hidden', 'success', 'error'); // Limpiar clases anteriores
    messageArea.classList.add(type);
    messageArea.classList.remove('hidden'); // Mostrar el área
}

// --- 4. FUNCIÓN CENTRAL DE LOGIN ---
function handleLogin(event) {
    // Evita que el formulario se envíe de la manera tradicional (recarga la página)
    event.preventDefault(); 

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === VALID_USERNAME && enteredPassword === VALID_PASSWORD) {
        // Credenciales correctas
        showMessage(
            `¡Bienvenido, ${enteredUsername}! Sesión iniciada correctamente.`, 
            'success'
        );
        // Opcional: Redirigir a la siguiente página: window.location.href = 'dashboard.html';
        
    } else {
        // Credenciales incorrectas
        showMessage(
            'Error: Usuario o contraseña incorrectos. Intente de nuevo.', 
            'error'
        );
    }
}

// --- 5. ASIGNACIÓN DE EVENTOS ---
loginForm.addEventListener('submit', handleLogin);