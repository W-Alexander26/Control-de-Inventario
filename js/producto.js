let almacenInventario=JSON.parse(localStorage.getItem('almacenInventario')) || [];
//variable encargada de llamar a la llave del "localStorage" que contiene la lista de productos del inventario.//

console.log(almacenInventario);

let eliminarProducto = document.getElementById('eliminarProducto');
//variable encargada de llamar el botón que elimina productos.//

let contenidoDiv = document.getElementById('mostrarContenido');

  
for (let index = 0; index < almacenInventario.length; index++) {
  
  let almacenDatos = document.createElement('div');

    almacenDatos.innerHTML="Nombre Producto" + " " + almacenInventario[index].nombre + " " + "Cantidad"+ " " +  almacenInventario[index].cantidad + " " + "Precio" + " " + almacenInventario[index].precio;
  
    contenidoDiv.appendChild(almacenDatos);

    console.log(almacenDatos);
    

    
}
  




/*function eliminar() {
  //función encarga de eliminar productos de la lista de inventario en el "localStorage".//

      
  }
  
}*/




