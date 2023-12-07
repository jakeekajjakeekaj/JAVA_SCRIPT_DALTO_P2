const sendButton = document.getElementById("snd-calif");

sendButton.addEventListener("click", ()=> {
        let resultado, mensaje;
        try {
                prevRes = parseInt(document.getElementById('calif').value);
                if(isNaN(prevRes)) {    //isNaN arroja true si is Not a Number
                        throw "Qué haces?";
                }
                resultado = verificarAprobacion(prevRes);
                mensaje = definirMensaje(prevRes);
        } catch(e) {
                resultado = "Really Nigga";
                mensaje = "No lo hagas más, aquí hay validaciones :p";
        }
        abrirModal(resultado, mensaje);
});

const verificarAprobacion = (pr)=> {
        let resultado;
        if(pr >= 0 && pr <= 5) {
                return "<span class='red'>Reprobado</span>"
        } else if (pr >= 6 && pr <= 10) {
                return "<span class='green'>Aprobado</span>"
        } else {
                return null;
        }
}

const definirMensaje = (pr)=> {
        let resultado;
        switch (pr) {
                case 0: resultado = "Enserio? nisiquiera lo diré"
                break;
                case 1: resultado = "Tss... haber estudia'o";
                break;
                case 2: resultado = "Esque lo veo y no lo creo";
                break;
                case 3: resultado = "Treh";
                break;
                case 4: resultado = "Supongo... que lo intentaste?";
                break;
                case 5: resultado = "Tan cerca de pansar";
                break;
                case 6: resultado = "Bueno, al menos pansaste";
                break;
                case 7: resultado = "Okay, nie bien ni mal";
                break;
                case 8: resultado = "Lo reconozco, vas bien";
                break;
                case 9: resultado = "Un tantito más y te encarabas Messi";
                break;
                case 10: resultado = "Sos un Messi, cuántas copas tenés";
                break;
                default: resultado = "Calificación no válida";
        }
        return resultado;
}

const abrirModal = (res, msg)=> {
        document.querySelector(".resultado").innerHTML = res;
        document.querySelector(".mensaje").innerHTML = msg;
        let modal = document.querySelector(".modal-background");
        modal.style.display = "flex";
        modal.style.animation = "aparecer 1s forwards"
}