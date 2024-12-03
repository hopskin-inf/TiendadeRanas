window.onload = inicio;
console.log('Script Cargado')


function inicio (){//Es donde vamos a cargar los botones
    document.getElementById('BrozeCesta').onclick=accion1;
    document.getElementById('AuratusCesta').onclick=accion2;
    var divisa = document.getElementById('divisa');
    var divisaPro = divisa.options[divisa.selectedIndex].value;
    console.log(divisaPro);
    document.getElementById('divisa').onclick=cambiodivisa;    
};
const cesta = document.getElementById("cesta")
var Total = 0;
var Bronzes = 0;
var Auratus = 0;
console.log(cesta.className)

function accioncompra(){
    if (cesta.classList = "oculto"){
        cesta.classList = "cesta"
    }
    console.log('accion com')
}

function accion1 (){
    Total = Total +45;
    Bronzes = Bronzes +1;
    if (cesta.classList = "oculto"){
        cesta.classList = "cesta"
    }
    document.getElementById("cesta").innerHTML=("Total: "+Total)
};

function accion2 (){
    Total = Total +30;
    Auratus++;
    console.log("Ranas Auratus: "+Auratus)
    if (cesta.classList = "oculto"){
        cesta.classList = "cesta"
    }
    document.getElementById("cesta").innerHTML=("Total: "+Total)    
};

function cambiodivisa() {
    var divisa = document.getElementById('divisa');
    var divisaPro = divisa.options[divisa.selectedIndex].value;
    console.log(divisaPro);
    if (divisaPro==='dolar'){
        Total = Math.round(Total*1.05);
        document.getElementById('cesta').innerHTML=("Total: "+Total+ " $")
    }
    console.log(Total)
};