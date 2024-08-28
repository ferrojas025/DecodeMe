// Mapeo de encriptación
const encryptionMap = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

// Función para encriptar texto
function encrypt(text) {
    return text.replace(/[eioua]/g, match => encryptionMap[match]);
}

// Función para desencriptar texto
function decrypt(text) {
    let decryptedText = text;
    for (let key in encryptionMap) {
        const value = encryptionMap[key];
        decryptedText = decryptedText.replace(new RegExp(value, 'g'), key);
    }
    return decryptedText;
}

// Eventos de los botones
document.getElementById("encrypt-button").onclick = function() {
    const inputText = document.getElementById("input-text").value;
    document.getElementById("output-text").value = encrypt(inputText);
};

document.getElementById("decrypt-button").onclick = function() {
    const inputText = document.getElementById("input-text").value;
    document.getElementById("output-text").value = decrypt(inputText);
};
