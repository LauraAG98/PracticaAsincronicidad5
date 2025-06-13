async function sendToMistral() {
    const inputText = document.getElementById('inputText').value;
    const responseContainer = document.getElementById('responseContainer');
    const loader = document.getElementById('loader');
    const apiKey = "yNGMUswB1u753flbYhdzNU8vdEllinMB"; // Reemplaza con tu clave real de Mistral

    if (!inputText.trim()) {
        responseContainer.textContent = "Por favor, ingresa algún texto.";
        return;
    }

    if (apiKey === "TU_API_KEY") {
        responseContainer.innerHTML = "<strong>Error:</strong> Reemplaza 'TU_API_KEY' con tu clave real de Mistral.";
        return;
    }

    responseContainer.textContent = "";
    loader.style.display = 'block';

    const API_URL = "https://api.mistral.ai/v1/chat/completions";

    const requestBody = {
        model: "mistral-medium",
        messages: [
            { role: "user", content: `Solo responde con una palabra: 'positivo', 'negativo'.\nTexto: "${inputText}"`}
        ],
        temperature: 0.3
    };





































}