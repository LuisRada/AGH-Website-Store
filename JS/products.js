const productos = [
    {
        id: "abrigo-01",
        titulo: "Coat 01",
        imagen: "abrigo_01.jpg",
        categoria: {
            nombre: "Coats",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Coat 02",
        imagen: "abrigo_02.jpg",
        categoria: {
            nombre: "Coats",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Coat 03",
        imagen: "abrigo_03.jpg",
        categoria: {
            nombre: "Coats",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Coat 04",
        imagen: "abrigo_04.jpg",
        categoria: {
            nombre: "Coats",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Coat 05",
        imagen: "abrigo_05.jpg",
        categoria: {
            nombre: "Coats",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-01",
        titulo: "Shirt 01",
        imagen: "camiseta_01.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Shirt 02",
        imagen: "camiseta_02.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Shirt 03",
        imagen: "camiseta_03.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Shirt 04",
        imagen: "camiseta_04.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Shirt 05",
        imagen: "camiseta_05.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Shirt 06",
        imagen: "camiseta_06.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Shirt 07",
        imagen: "camiseta_07.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Shirt 08",
        imagen: "camiseta_08.jpg",
        categoria: {
            nombre: "Shirts",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "pantalon-01",
        titulo: "Pants 01",
        imagen: "pantalon_01.jpg",
        categoria: {
            nombre: "Pants",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pants 02",
        imagen: "pantalon_02.jpg",
        categoria: {
            ombre: "Pants",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pants 03",
        imagen: "pantalon_03.jpg",
        categoria: {
            nombre: "Pants",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pants 04",
        imagen: "pantalon_04.jpg",
        categoria: {
            nombre: "Pants",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pants 05",
        imagen: "pantalon_05.jpg",
        categoria: {
            nombre: "Pants",
            id: "pantalones"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Add</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "All the products";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Product added",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}