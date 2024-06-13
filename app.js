const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

let carritoArray = [];

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-primary")) {
    agregarAlCarrito(e);
  }

  //console.log(e.target.matches(".list-group-item .btn-success"));
  if (e.target.matches(".list-group-item .btn-success")) {
    //console.log("btnAgregar");
    btnAgregar(e);
  }

  //console.log(e.target.matches(".list-group-item .btn-danger"));
  if (e.target.matches(".list-group-item .btn-danger")) {
    //   const restar = e.target.dataset.id;
    btnQuitar(e);
  }

  //pintarCarritoDescripcion(carritoArray);
});

const agregarAlCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoArray.findIndex((item) => item.id === producto.id);
  //console.log(indice);

  if (indice === -1) {
    carritoArray.push(producto);
  } else {
    carritoArray[indice].cantidad++;
  }
  //console.log(carritoArray);
  pintarCarritoDescripcion(carritoArray);
};

const pintarCarritoDescripcion = () => {
  carrito.textContent = "";

  carritoArray.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.querySelector("div .lead span").textContent =
      item.precio * item.cantidad;
    clone.querySelector(".btn-success").dataset.id = item.id;
    clone.querySelector(".btn-danger").dataset.id = item.id;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
  pintarFooter();
};

const pintarFooter = () => {
  //console.log("Pintar Footer");
  footer.textContent = "";

  const total = carritoArray.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const cloneFooter = templateFooter.content.cloneNode(true);
  if (total > 0) {
    cloneFooter.querySelector(".card span").textContent = total;
    fragment.appendChild(cloneFooter);
    footer.appendChild(fragment);
  }
};

const btnAgregar = (e) => {
  //console.log("Me diste click Agregar", e.target.dataset.id);
  carritoArray = carritoArray.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarritoDescripcion();
};

const btnQuitar = (e) => {
  //console.log("Me diste click Quitar", e.target.dataset.id);
  carritoArray.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad--;
    }
    return item;
  });
  carritoArray = carritoArray.filter((item) => item.cantidad !== 0);
  pintarCarritoDescripcion();
};

// const pintarCarritoCantidad = (carritoArray) =>{
//   carritoArray.map((item)=>{
//     const clone =
//   })
// }

////////////////////////////////////////////////////////////////////
///////////////////////////Ejemplo StopPropagation//////////////////
// const cuadritos = document.querySelectorAll(".border");

// cuadritos.forEach((caja) => {
//   caja.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Me diste click");
//   });
// });

////////////////////////////////////////////////////////////////////
///////////////////////////Ejemplo preventDefault///////////////////

// const formulario = document.querySelector("form");

// formulario.addEventListener("submit", (e) => {
//   console.log("Me diste click");
//   e.preventDefault();
// });

// const ancla = document.querySelector("a");

// ancla.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("me diste click");
// });

////////////////////////////////////////////////////////////////////
///////////////////////////Ejemplo Delegación de Eventos///////////////////

// //const container = document.querySelector(".container");

// document.addEventListener("click", (e) => {
//   //console.log(e.target.id);
//   if (e.target.id === "nieto") {
//     console.log("diste click al nieto");
//   }

//   if (e.target.dataset.div == "divHijo") {
//     console.log("diste click al hijo");
//   }

//   if (e.target.matches(".border-primary")) {
//     console.log("diste click al padre");
//   }
// });
