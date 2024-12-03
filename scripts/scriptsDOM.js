// Asegúrate de que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const elementosCompra = document.getElementsByClassName("compra");
    const cesta = document.getElementById('cesta');
    console.log(cesta.className)
  
    // Verifica si hay elementos con la clase 'compra'
    if (elementosCompra.length > 0) {
      elementosCompra[0].onclick = accion1; // Asigna la función al primer elemento
    } else {
      console.error("No se encontraron elementos con la clase 'compra'");
    }
  });
  
  // Define la función 'accion1'
  function accion1() {
    console.log(cesta.classList)
    //alert("Acaba de añadir un elemento a la cesta");
    if (cesta.classList = "oculto"){
        cesta.classList = "cesta"
    }
  };
  