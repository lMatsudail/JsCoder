// Capturamos elementos del DOM
const listaCarrito = document.getElementById("lista-carrito");
const botonVaciar = document.getElementById("vaciar-carrito");
const contenedorProductos = document.getElementById("productos");

// Estructura de productos por categorías
const categorias = [
    {
        nombre: "Camisas",
        productos: [
            { nombre: "Camiseta Capitan America", precio: 80000, imagen: "img/Camisas/Cap.jpg" },
            { nombre: "Camiseta Negra", precio: 11000, imagen: "img/camiseta_negra.jpg" },
            { nombre: "Camiseta Manga Larga", precio: 12000, imagen: "img/camiseta_manga_larga.jpg" }
        ]
    },
    {
        nombre: "Vasos",
        productos: [
            { nombre: "Vaso Plástico", precio: 5000, imagen: "img/vaso_plastico.jpg" },
            { nombre: "Vaso Vidrio", precio: 7000, imagen: "img/vaso_vidrio.jpg" },
            { nombre: "Vaso Térmico", precio: 9000, imagen: "img/vaso_termico.jpg" }
        ]
    },
    {
        nombre: "Termos",
        productos: [
            { nombre: "Termo Metálico", precio: 15000, imagen: "img/termo_metalico.jpg" },
            { nombre: "Termo Plástico", precio: 13000, imagen: "img/termo_plastico.jpg" },
            { nombre: "Termo Grande", precio: 17000, imagen: "img/termo_grande.jpg" }
        ]
    }
];

// Creamos las categorías y sus productos dinámicamente
categorias.forEach(categoria => {
    // Creamos un contenedor para la categoría
    const seccionCategoria = document.createElement("div");
    seccionCategoria.classList.add("categoria");

    // Título de la categoría
    const titulo = document.createElement("h3");
    titulo.textContent = categoria.nombre;
    seccionCategoria.appendChild(titulo);

    // Contenedor de productos de la categoría
    const contenedorCategoria = document.createElement("div");
    contenedorCategoria.classList.add("productos-categoria");

    // Creamos los productos de la categoría
    categoria.productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");

        // Imagen del producto
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;
        div.appendChild(img);

        // Nombre y precio
        const h4 = document.createElement("h4");
        h4.textContent = producto.nombre;
        div.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = `Desde $${producto.precio}`;
        div.appendChild(p);

        // Botón
        const boton = document.createElement("button");
        boton.classList.add("agregar-carrito");
        boton.textContent = "Agregar al carrito";
        boton.addEventListener("click", function() {
            const itemCarrito = document.createElement("li");
            itemCarrito.textContent = `${producto.nombre} - Desde $${producto.precio}`;
            listaCarrito.appendChild(itemCarrito);
        });
        div.appendChild(boton);

        contenedorCategoria.appendChild(div);
    });

    seccionCategoria.appendChild(contenedorCategoria);
    contenedorProductos.appendChild(seccionCategoria);
});

// Función para vaciar el carrito
botonVaciar.addEventListener("click", function() {
    listaCarrito.innerHTML = ""; 
    // Elimina todos los elementos del carrito
});