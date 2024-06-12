const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnsBotones = document.querySelectorAll(".card .btn");

const carritoArray = [];

const agregarAlCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = carritoArray.findIndex((item) => item.id === producto.id);
  console.log(indice);

  if (indice === -1) {
    carritoArray.push(producto);
    console.log(carritoArray);
  } else {
    carritoArray[indice].cantidad++;
    console.log(carritoArray);
  }
  pintarCarrito(carritoArray);
};

const pintarCarrito = (carritoArray) => {
  carrito.textContent = "";

  carritoArray.map((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

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
