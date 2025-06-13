



























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
 