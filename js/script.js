function automata(valor) {
    switch (estado) {
        case 0:
            if (valor == 'CREDITO') {
                estado = 1;
                botonPapas.setAttribute('hidden', '');
                botonInicio.removeAttribute('hidden');
                botonCredito.setAttribute('hidden', '');
                seccionCredito.removeAttribute('hidden', '');
            } else if (valor == 'PAPAS') {
                estado = 2;
                setClickBoton();
                botonPapas.setAttribute('hidden', '');
                botonCredito.setAttribute('hidden', '');
                seccionPapas.removeAttribute('hidden');
                botonInicio.removeAttribute('hidden');
            }
            break;
        case 1:
            if (valor == '1' || valor == '2' || valor == '5' || valor == '10') {
                estado = 1;
            } else if (valor == 'INICIO') {
                estado = 0;
                botonPapas.removeAttribute('hidden');
                botonInicio.setAttribute('hidden', '');
                botonCredito.removeAttribute('hidden');
                seccionCredito.setAttribute('hidden', '');
            }
            break;
        case 2:
            if (valor == '26') {
                estado = 3;
                removerClickBoton();
                error.innerText = 'Sabritas - Costo $26';
            } else if (valor == '33') {
                estado = 4;
                removerClickBoton();
                error.innerText = 'Doritos - Costo $17';
            } else if (valor == '02') {
                estado = 5;
                removerClickBoton();
                error.innerText = 'Churrumais - Costo $20';
            } else if (valor == '09') {
                estado = 6;
                removerClickBoton();
                error.innerText = 'Cheetos Poffs - Costo $11';
            } else if (valor == '89') {
                estado = 7;
                removerClickBoton();
                error.innerText = 'Cheetos Torciditos - Costo $9';
            } else if (valor == '65') {
                estado = 8;
                removerClickBoton();
                error.innerText = 'Fritos - Costo $18';
            } else if (valor == '11') {
                estado = 9;
                removerClickBoton();
                error.innerText = 'Rancheritos - Costo $13';
            } else if (valor == '03') {
                estado = 10;
                removerClickBoton();
                error.innerText = 'Ruffles - Costo $7';
            } else if (valor == '52') {
                estado = 11;
                removerClickBoton();
                error.innerText = 'Sabritones - Costo $14';
            } else if (valor == 'INICIO') {
                estado = 0;
                botonPapas.removeAttribute('hidden');
                botonCredito.removeAttribute('hidden');
                seccionPapas.setAttribute('hidden', '');
                botonInicio.setAttribute('hidden', '');
            } else {
                seleccion.value = '';
                error.removeAttribute('hidden');
                error.innerText = 'Producto no encontrado.';
            }
            break;
        case 3:
            if (valor == 'ENTER') {
                if (credito > 15) {
                    sabritas.classList.add('slide-sabritas');
                    credito -= 15;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 4:
            if (valor == 'ENTER') {
                if (credito > 17) {
                    doritos.classList.add('slide-doritos');
                    credito -= 17;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 5:
            if (valor == 'ENTER') {
                if (credito > 20) {
                    churrumais.classList.add('slide-churrumais');
                    credito -= 20;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 6:
            if (valor == 'ENTER') {
                if (credito > 11) {
                    cheetosPoffs.classList.add('slide-cheetos-poffs');
                    credito -= 11;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 7:
            if (valor == 'ENTER') {
                if (credito > 9) {
                    cheetosTorci.classList.add('slide-cheetos-torciditos');
                    credito -= 9;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 8:
            if (valor == 'ENTER') {
                if (credito > 18) {
                    fritos.classList.add('slide-fritos');
                    credito -= 18;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 9:
            if (valor == 'ENTER') {
                if (credito > 13) {
                    rancheritos.classList.add('slide-rancheritos');
                    credito -= 13;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 10:
            if (valor == 'ENTER') {
                if (credito > 7) {
                    ruffles.classList.add('slide-ruffles');
                    credito -= 7;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 11:
            if (valor == 'ENTER') {
                if (credito > 14) {
                    sabritones.classList.add('slide-sabritones');
                    credito -= 14;
                    estado = 12;
                    exito();
                } else {
                    dineroInsuficiente();
                    return;
                }
            } else if (valor == 'BORRAR') {
                estado = 2;
                setClickBoton();
            }
            break;
        case 12:
            if (valor == 'INICIO') {
                estado = 0;
                animaciones[estadosLista[estadosLista.length - 2].toString()]();
                seccionPapas.setAttribute('hidden', '');
                botonPapas.removeAttribute('hidden');
                botonCredito.removeAttribute('hidden');
                botonInicio.setAttribute('hidden', '');
            }
            break;
        default:
            break;
    }
    estadosLista.push(estado);
    valorEstados.push(valor);
    h2Estado.innerText = `Estado Actual: ${estado} ${estado == 12 ? 'Aceptación' : estado == 0 ? 'Inicial' : ''}`;
    trEstado.innerHTML += `<th>${estado}</th>`;
    trTransicion.innerHTML += `<th>${valor}</th>`;
}

function handleDragEnd(e) {
    credito += Number.parseInt(e.path[1].getAttribute('value'));
    document.querySelector('#titulo').innerText = `Ingresar Creditos (Actual - ${credito})`;
    document.querySelector('#creditosPapas').innerText = `Creditos: ${credito}`;
    automata(e.path[1].getAttribute('value'));
    console.log({estadosLista, valorEstados});
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}

function clickBoton(boton) {
    seleccion.value += boton.path[0].innerText;
    if (seleccion.value.length == 2) {
        automata(seleccion.value);
    }
}

function removerClickBoton() {
    botonEnter.removeAttribute('disabled');
    botonBorrar.removeAttribute('disabled');
    error.removeAttribute('hidden');
    error.classList.remove('text-danger');
    seleccion.classList.remove('is-invalid');
    botonInicio.setAttribute('hidden', '');
    botones.forEach(function (boton) {
        boton.setAttribute('disabled', '');
    });
}

function setClickBoton() {
    botonEnter.setAttribute('disabled', '');
    botonInicio.removeAttribute('hidden');
    botonBorrar.setAttribute('disabled', '');
    seleccion.value = '';
    error.innerText = '';
    seleccion.classList.remove('is-invalid');
    error.classList.remove('text-danger');
    botones.forEach(function (boton) {
        boton.removeAttribute('disabled');
    });
}

function dineroInsuficiente() {
    error.classList.add('text-danger');
    error.innerText = 'Dinero insuficiente';
    seleccion.classList.add('is-invalid');
}
function exito() {
    seleccion.value = '';
    error.innerText = '';
    botonEnter.setAttribute('disabled', '');
    botonBorrar.setAttribute('disabled', '');
    botonInicio.removeAttribute('hidden');
    document.querySelector('#creditosPapas').innerText = `Creditos: ${credito}`;
    document.querySelector('#titulo').innerText = `Ingresar Creditos (Actual - ${credito})`;
}
// Variables
let credito = 0;
let estado = 0;
let estadosLista = [];
let valorEstados = [];
const monedas = document.querySelectorAll("body > div.container > div.row.justify-content-center.mt-4 > div > div > div > img");
const seleccion = document.querySelector('#seleccion');
const botones = document.querySelectorAll(".boton");
const botonCredito = document.querySelector("#credito");
const botonPapas = document.querySelector("#papas");
const botonInicio = document.querySelector("#inicio");
const seccionCredito = document.querySelector('#seccionCredito');
const seccionPapas = document.querySelector('#seccionPapas');
const h2Estado = document.querySelector('#estadoActual');
const trEstado = document.querySelector('#estado');
const trTransicion = document.querySelector('#transicion');
const botonEnter = document.querySelector('#enter');
const botonBorrar = document.querySelector('#borrar');
const error = document.querySelector('#error');
const sabritas = document.querySelector('#sabritas');
const doritos = document.querySelector('#doritos');
const churrumais = document.querySelector('#churrumais');
const cheetosPoffs = document.querySelector('#cheetos-poffs');
const cheetosTorci = document.querySelector('#cheetos-torciditos');
const fritos = document.querySelector('#fritos');
const rancheritos = document.querySelector('#rancheritos');
const ruffles = document.querySelector('#ruffles');
const sabritones = document.querySelector('#sabritones');

const animaciones = {
    '3' : function () {
        sabritas.classList.remove('slide-sabritas');
    },
    '4' : function () {
        doritos.classList.remove('slide-doritos');
    },
    '5' : function () {
        churrumais.classList.remove('slide-churrumais');
    },
    '6' : function () {
        cheetosPoffs.classList.remove('slide-cheetos-poffs');
    },
    '7' : function () {
        cheetosTorci.classList.remove('slide-cheetos-torciditos');
    },
    '8' : function () {
        fritos.classList.remove('slide-fritos');
    },
    '9' : function () {
        rancheritos.classList.remove('slide-rancheritos');
    },
    '10' : function () {
        ruffles.classList.remove('slide-ruffles');
    },
    '11' : function () {
        sabritones.classList.remove('slide-sabritones');
    },
}

// Eventos
monedas.forEach(function (moneda) {
    moneda.addEventListener('dragover', handleDragOver);
    moneda.addEventListener('dragend', handleDragEnd, false);
});

botones.forEach(function (boton) {
    boton.addEventListener('click', clickBoton);
});

botonCredito.addEventListener('click', () => automata('CREDITO'));

botonInicio.addEventListener('click', () => automata('INICIO'));

botonPapas.addEventListener('click', () => automata('PAPAS'));

botonEnter.addEventListener('click', () => automata('ENTER'));

botonBorrar.addEventListener('click', () => automata('BORRAR'));