function obtenerFechaYHora() {
    let fechaActual = new Date();
    
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Los meses empiezan en 0, por eso sumamos 1
    let anio = fechaActual.getFullYear();
    
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    
    // Formatea los valores para asegurar dos dígitos en horas y minutos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
}

function modify(barril, item) {
    if(barril && item) {
        let valor = prompt(`Ingresa el ${item}`);
        
        if (valor !== '' && valor !== null) {
            if(item === 'estilo') {
                localStorage.setItem(barril + 'estilo', valor + ` | ${obtenerFechaYHora()}`);
                getInfo(barril);
            } else if(item === 'ubicacion') {
                localStorage.setItem(barril + 'ubicacion', valor + ` | ${obtenerFechaYHora()}`);
                getInfo(barril);
            }
        } else {
            alert('El valor ingresado no puede estar vacío o ser nulo.');
        }
    }
}

function getInfo(barril) {
    let ubicacion = localStorage.getItem(barril + 'ubicacion');
    let estilo = localStorage.getItem(barril + 'estilo');

    let ubicacionSpan = document.getElementsByClassName('ubicacion')[0];
    let estiloSpan = document.getElementsByClassName('estilo')[0];

    if(ubicacion) {
        ubicacionSpan.innerHTML = ubicacion;
    }
    if(estilo) {
        estiloSpan.innerHTML = estilo;
    }
}