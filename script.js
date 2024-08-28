function validateInput(text) {
    const pattern = /^[a-z\s]+$/; 
    return pattern.test(text);
}

function showValidationError() {
    alert('Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.');
}

function normalizeText(text) {
    
    return text
        .toLowerCase()
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, ""); 
}

function encrypt() {
    let input = document.getElementById('inputText').value;

    
    input = normalizeText(input);

    if (!validateInput(input)) {
        showValidationError();
        return;
    }

    const encrypted = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('resultText').innerText = encrypted;
    document.getElementById('resultTextRight').innerText = encrypted;

    
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('output-section').style.display = 'flex';
}

function decrypt() {
    let input = document.getElementById('inputText').value;

    
    input = normalizeText(input);

    if (!validateInput(input)) {
        showValidationError();
        return;
    }

    const decrypted = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('resultText').innerText = decrypted;
    document.getElementById('resultTextRight').innerText = decrypted;

    
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('output-section').style.display = 'flex';
}

function goBack() {
  
    document.getElementById('output-section').style.display = 'none';
    document.getElementById('input-section').style.display = 'flex';
}

function copyToClipboard() {
    const text = document.getElementById('resultTextRight').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
}
