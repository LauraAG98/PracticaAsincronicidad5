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

try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        loader.style.display = 'none';

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error en la API:", errorData);
            responseContainer.textContent = `Error: ${response.status} - ${errorData.error?.message || 'Error desconocido.'}`;
            return;
        }

        const data = await response.json();
        const sentimiento = data.choices?.[0]?.message?.content?.trim();

        if (sentimiento) {
            responseContainer.innerHTML = `<strong>🔍</strong> "${inputText}" es un comentario ${sentimiento}`;
        } else {
            responseContainer.textContent = "La API respondió sin contenido.";
            console.log("Respuesta inesperada:", data);
        }

    } catch (error) {
        loader.style.display = 'none';
        console.error("Error en la solicitud fetch:", error);
        responseContainer.textContent = "Error al conectar con la API. Revisa la consola.";
    }
}