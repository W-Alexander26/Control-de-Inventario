let agregarProducto = document.getElementById('agregarProducto');
//variable encargada de llamar el botón que agrega productos.//

let nombre = document.getElementById('nombreProducto');
//variable encargada de llamar el input con el nombre del producto.//

let cantidad = document.getElementById('cantidadProducto');
//variable encargada de llamar el input con la cantidad del producto.//

let precio = document.getElementById('precioProducto');
//variable encargada de llamar el input con el precio del producto.//

let almacenInventario=[];
//variable que contiene un array vacio del que se va a encargar de contener la lista de productos del inventario.//

function añadir() {
  //función que añade los producto al array "almacenInventario".//

  let almacenInventario=JSON.parse(localStorage.getItem('almacenInventario')) || [];
  //variable creada para llamar a la llave del "localStorage" y almacenarla.//

  console.log(almacenInventario);
  //impresión que demuestra que hay en el almacen.//

   datosInventario={
    //Objeto encargado de contener los valores solicitados del inventario.//

    nombre: nombre.value,

    cantidad: cantidad.value,

    precio: precio.value,

  }

  almacenInventario.push(datosInventario);
  //línea encargada de agregar los objetos con valores del los productos al array "almacenInventario"

  localStorage.setItem('almacenInventario', JSON.stringify(almacenInventario));
  //creación de la llave que continene la lista de productos del inventario en el "localStorage".//
  
}
