datos = ()=> {
    let href = window.location.href;
    let pathname = window.location.pathname;
    let hostname = window.location.hostname;
    let protocol = window.location.protocol;

    let html = `Protocolo: <b>${protocol}</b><br>`;
    html += `Hostname: <b>${hostname}</b><br>`;
    html += `Pathname: <b>${pathname}</b><br>`;
    html += `URL Completa: <b>${href}</b><br>`;

    return html;
}

let alto = window.screen.availHeight;   //Se obtiene el alto de la ventana
let ancho = window.screen.availWidth;   //Se obtiene el ancho de la ventana

comprar = confirm(`El alto es: ${alto} y el ancho es: ${ancho}`);

if(comprar) {
    alert("Compra realizasa exitosamente");
} else {
    alert("Compra cancelada");
}

document.write(datos());