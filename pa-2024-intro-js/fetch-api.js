const apiKey = '7CCF19CC-71D1-4AE8-B1C0-047E508391D7';

// Realiza la solicitud a la API
const peticion = fetch('https://rest.coinapi.io/v1/exchanges', {
    headers: {
        'X-CoinAPI-Key': apiKey
    }
});

peticion
    .then(resp => {
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        return resp.json();
    })
    .then(data => {
        // Aquí ya tienes el JSON en la variable `data`
        console.log(data);

const info = data.map

        // Ejemplo de cómo podrías mostrar los datos en el HTML
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(data, null, 2); // Formatea el JSON con sangrías
        document.body.appendChild(pre);
    })
    .catch(error => {
        console.warn('Error:', error);
    });
