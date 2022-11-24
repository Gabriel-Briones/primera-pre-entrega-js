//Constantes de conversión y variables
const Brasil = 0.19;
const Peru = 0.26;
const Bolivia = 0.144;
const Argentina = 0.0061;
const Chile = 0.0011;

let montoUSD = 0
let montoDestino = 0
let ask = true

// Llamado a funciones
// Función para elegir el país de origen
function seleccionPaisOrigen() {
    let pais = (prompt("Selecciones su país de origen:" + "\nBrasil, Peru, Bolivia, Argentina, Chile."));
    switch (pais) {
        case "Brasil":
            alert("Has seleccionado como tu país de origen " + pais);
            montoUSD = ingresarDinero() * Brasil;
            break;
        case "Peru":
            alert("Has seleccionado como tu país de origen " + pais);
            montoUSD = ingresarDinero() * Peru;
            break;
        case "Bolivia":
            alert("Has seleccionado como tu país de origen " + pais);
            montoUSD = ingresarDinero() * Bolivia;
            break;
        case "Argentina":
            alert("Has seleccionado como tu país de origen " + pais);
            montoUSD = ingresarDinero() * Argentina;
            break;
        case "Chile":
            alert("Has seleccionado como tu país de origen " + pais);
            montoUSD = ingresarDinero() * Chile;
            break;
        default:
            alert("Pais no disponible, ingresar nuevamente el país");
            seleccionPaisOrigen();
            break;
    }
}

// Función para elegir el país de destino
function seleccionPaisDestino() {
    let pais = (prompt("Selecciones su país de Destino:" + "\nBrasil, Peru, Bolivia, Argentina, Chile."));
    switch (pais) {
        case "Brasil":
            alert("Has seleccionado como tu país de Destino " + pais);
            montoDestino = montoUSD / Brasil;
            alert("Equivale a " + montoDestino.toFixed(2) + " en la moneda de destino");
            break;
        case "Peru":
            alert("Has seleccionado como tu país de Destino " + pais);
            montoDestino = montoUSD / Peru;
            alert("Equivale a " + montoDestino.toFixed(2) + " en la moneda de destino");
            break;
        case "Bolivia":
            alert("Has seleccionado como tu país de Destino " + pais);
            montoDestino = montoUSD / Bolivia;
            alert("Equivale a " + montoDestino.toFixed(2) + " en la moneda de destino");
            break;
        case "Argentina":
            alert("Has seleccionado como tu país de Destino " + pais);
            montoDestino = montoUSD / Argentina;
            alert("Equivale a " + montoDestino.toFixed(2) + " en la moneda de destino");
            break;
        case "Chile":
            alert("Has seleccionado como tu país de Destino " + pais);
            montoDestino = montoUSD / Chile;
            alert("Equivale a " + montoDestino.toFixed(2) + " en la moneda de destino");
            break;
        default:
            alert("País no disponible, ingresar nuevamente el país");
            seleccionPaisDestino();
            break;
    }
}

function ingresarDinero() {
    let monto = parseFloat(prompt("Ingrese cuanto dinero desea convertir:"))
    return monto;
}

// Bucle principal
do {
    seleccionPaisOrigen()
    seleccionPaisDestino()
    if (window.confirm("Quieres seguir haciendo conversiones?")) {
        ask = true
        alert("Nueva conversión");
    }
    else {
        ask = false
    }
} while (ask)
alert("Gracias por usar nuestros servicios");
