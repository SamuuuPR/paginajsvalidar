// --- 1. Correo institucional ---
function verificarCorreo() {
    const input = document.getElementById('inputCorreo').value.trim();
    // curnvirtual.edu.co: minúsculas, termina en 1 o 2 dígitos
    const reVirtual = /^[a-z]+[0-9]{1,2}@curnvirtual\.edu\.co$/;
    // curn.edu.co: inicia con vocal, seguido de letras, debe tener . o _
    // Ejemplo: a.maria@curn.edu.co, e_jose@curn.edu.co
    // Regla: empieza con vocal, después letras, punto o guion bajo en medio
    const reCurn = /^[aeiou][a-z]*[._][a-z]+@curn\.edu\.co$/;
    const result = document.getElementById('resultCorreo');
    if (reVirtual.test(input) || reCurn.test(input)) {
        result.textContent = '✔ Válido';
        result.className = 'result ok';
    } else {
        result.textContent = '✗ Inválido';
        result.className = 'result fail';
    }
}

// --- 2. Hexadecimal ---
function verificarHex() {
    const input = document.getElementById('inputHex').value.trim();
    // #RGB: 3 hex dígitos, #RRGGBB: 6 hex dígitos
    const reHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    const result = document.getElementById('resultHex');
    if (reHex.test(input)) {
        result.textContent = '✔ Válido';
        result.className = 'result ok';
    } else {
        result.textContent = '✗ Inválido';
        result.className = 'result fail';
    }
}

// --- 3. Decimal entre 0,0 y 5,0 (con coma) ---
function verificarDecimal() {
    const input = document.getElementById('inputDecimal').value.trim();
    // Solo permite formato x,y donde x de 0 a 5, y de 0 a 9
    // Debe estar en rango [0,0] a [5,0]
    // Ej: 0,0  1,3  5,0
    const reDecimal = /^([0-4],[0-9]|5,0)$/;
    const result = document.getElementById('resultDecimal');
    if (reDecimal.test(input)) {
        result.textContent = '✔ Válido';
        result.className = 'result ok';
    } else {
        result.textContent = '✗ Inválido';
        result.className = 'result fail';
    }
}