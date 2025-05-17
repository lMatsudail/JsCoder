// Capturamos elementos del DOM
const listaCarrito = document.getElementById("lista-carrito");
const botonVaciar = document.getElementById("vaciar-carrito");
const contenedorProductos = document.getElementById("productos");

// Estructura de productos por categorías
const categorias = [
    {
        nombre: "Camisas",
        productos: [
            { 
                nombre: "Camiseta Cap America", 
                precio: 40000, 
                imagen: "img/Camisas/Cap.jpg",
                descripcion: "Camiseta estampada del Capitán América, algodón 100%."
            },
            { 
                nombre: "Camiseta Negra Batman", 
                precio: 40000, 
                imagen: "img/Camisas/Batman.jpg",
                descripcion: "Camiseta negra con logo de Batman, ideal para fans."
            },
            { 
                nombre: "Camiseta GreenArow", 
                precio: 32000, 
                imagen: "img/Camisas/Arrow.jpg",
                descripcion: "Camiseta inspirada en Green Arrow, tela fresca."
            },
            { 
                nombre: "Camiseta Azul Cyclope", 
                precio: 32000, 
                imagen: "img/Camisas/Cyclope.jpg",
                descripcion: "Camiseta azul con diseño de Cyclope, cómoda y moderna."
            },
            { 
                nombre: "Camiseta Gris Deadpool", 
                precio: 42000, 
                imagen: "img/Camisas/Deadpool.jpg",
                descripcion: "Camiseta gris con estampado de Deadpool, divertida y original."
            },
            { 
                nombre: "Camiseta Roja Ironman", 
                precio: 32000, 
                imagen: "img/Camisas/Ironman.jpg",
                descripcion: "Camiseta roja con el icónico Ironman, para verdaderos héroes."
            },
            { 
                nombre: "Camiseta Wolverine", 
                precio: 32000, 
                imagen: "img/Camisas/Wolverine.jpg",
                descripcion: "Camiseta de Wolverine, resistente y de alta calidad."
            },
            { 
                nombre: "Camiseta Amarilla Flash", 
                precio: 32000, 
                imagen: "img/Camisas/Flash.jpg",
                descripcion: "Camiseta amarilla con el rayo de Flash, para los más rápidos."
            },
            { 
                nombre: "Camiseta Roja M Roshi", 
                precio: 52000, 
                imagen: "img/Camisas/Roshi.jpg",
                descripcion: "Camiseta roja con el maestro Roshi, edición limitada."
            },
            { 
                nombre: "Camiseta DR Strange", 
                precio: 42000, 
                imagen: "img/Camisas/Drstrange.jpg",
                descripcion: "Camiseta con diseño de Doctor Strange, magia y estilo."
            },
            { 
                nombre: "Camiseta Roja Goku", 
                precio: 62000, 
                imagen: "img/Camisas/Goku.jpg",
                descripcion: "Camiseta roja de Goku, poder y energía en tu outfit."
            },
            { 
                nombre: "Camiseta Azul Rocky", 
                precio: 32000, 
                imagen: "img/Camisas/Arrow.jpg",
                descripcion: "Camiseta azul inspirada en Rocky, para campeones."
            }
        ]
    },
    {
        nombre: "Vasos",
        productos: [
            { 
                nombre: "Vaso Harry Potter", 
                precio: 25000, 
                imagen: "img/Vasos/HarryP.jpg",
                descripcion: "Vaso temático de Harry Potter, ideal para fanáticos de la saga."
            },
            { 
                nombre: "Vaso Mickey StarWars", 
                precio: 27000, 
                imagen: "img/Vasos/Mickeystarwars.jpg",
                descripcion: "Vaso con diseño de Mickey y Star Wars, divertido y original."
            },
            { 
                nombre: "Vaso Gato Felix", 
                precio: 39000, 
                imagen: "img/Vasos/GatoFelix.jpg",
                descripcion: "Vaso con el clásico Gato Felix, resistente y colorido."
            },
            { 
                nombre: "Vaso Mario Maker", 
                precio: 29000, 
                imagen: "img/Vasos/mariomaker.jpg",
                descripcion: "Vaso inspirado en Mario Maker, perfecto para gamers."
            },
            { 
                nombre: "Vaso Tazmania", 
                precio: 27000, 
                imagen: "img/Vasos/taz.jpg",
                descripcion: "Vaso con el personaje Tazmania, ideal para niños y adultos."
            },
            { 
                nombre: "Vaso Scar", 
                precio: 29000, 
                imagen: "img/Vasos/Scar.jpg",
                descripcion: "Vaso con diseño de Scar, el villano de El Rey León."
            }
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

        // Nombre
        const h4 = document.createElement("h4");
        h4.textContent = producto.nombre;
        div.appendChild(h4);

        // Descripción
        const desc = document.createElement("p");
        desc.classList.add("descripcion-producto");
        desc.textContent = producto.descripcion;
        div.appendChild(desc);

        // Precio
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