// Capturamos elementos del DOM
const listaCarrito = document.getElementById("lista-carrito");
const botonVaciar = document.getElementById("vaciar-carrito");
const contenedorProductos = document.getElementById("productos");

// Storage del carrito
let carrito = [];
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
function cargarCarrito() {
    const data = localStorage.getItem('carrito');
    if (data) {
        carrito = JSON.parse(data);
    }
}
function renderizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach((item, index) => {
        const li = document.createElement("li");

        // Contenedor para imagen y texto
        const info = document.createElement("span");
        info.className = "item-info";

        if (item.imagen) {
            const img = document.createElement("img");
            img.src = item.imagen;
            img.alt = item.nombre;
            img.style.width = "40px";
            img.style.height = "40px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "5px";
            img.style.marginRight = "10px";
            info.appendChild(img);
        }

        info.appendChild(document.createTextNode(`${item.nombre} - Desde $${item.precio}`));
        li.appendChild(info);

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑️";
        btnEliminar.title = "Eliminar este producto";
        btnEliminar.style.background = "none";
        btnEliminar.style.border = "none";
        btnEliminar.style.cursor = "pointer";
        btnEliminar.style.fontSize = "1.2em";
        btnEliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            guardarCarrito();
            renderizarCarrito();
        });
        li.appendChild(btnEliminar);

        listaCarrito.appendChild(li);

        // Suma al total
        total += Number(item.precio);
    });

    // Mostrar total antes de los botones
    let totalDiv = document.getElementById("total-carrito");
    if (!totalDiv) {
        totalDiv = document.createElement("div");
        totalDiv.id = "total-carrito";
        // Insertar antes del primer botón (vaciar o finalizar)
        const btnVaciar = document.getElementById("vaciar-carrito");
        btnVaciar.parentNode.insertBefore(totalDiv, btnVaciar);
    }
    totalDiv.textContent = `Total: $${total.toLocaleString()}`;
}

// --- Cargar productos desde productos.json ---
fetch('productos.json')
    .then(res => res.json())
    .then(data => {
        renderizarCategorias(data.categorias);
    });

// --- Renderizar categorías y productos ---
function renderizarCategorias(categorias) {
    contenedorProductos.innerHTML = "";
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

            // Selector de cantidad (solo input)
            const cantidadInput = document.createElement("input");
            cantidadInput.type = "number";
            cantidadInput.min = "1";
            cantidadInput.value = "1";
            cantidadInput.style.width = "60px";
            cantidadInput.style.height = "36px";
            cantidadInput.style.fontSize = "1.1em";
            cantidadInput.style.textAlign = "center";
            cantidadInput.style.borderRadius = "5px";
            cantidadInput.style.border = "1px solid #ccc";
            cantidadInput.style.margin = "10px auto 16px auto";
            cantidadInput.style.display = "block";
            div.appendChild(cantidadInput);

            // Botón agregar al carrito
            const boton = document.createElement("button");
            boton.classList.add("agregar-carrito");
            boton.textContent = "Agregar al carrito";
            boton.addEventListener("click", function() {
                const cantidad = parseInt(cantidadInput.value) || 1;
                for (let i = 0; i < cantidad; i++) {
                    // Al agregar al carrito
                    carrito.push({
                        nombre: producto.nombre,
                        precio: producto.precio,
                        imagen: producto.imagen
                    });
                }
                guardarCarrito();
                renderizarCarrito();
                Swal.fire('¡Producto agregado!', '', 'success');
            });
            div.appendChild(boton);

            contenedorCategoria.appendChild(div);
        });

        seccionCategoria.appendChild(contenedorCategoria);
        contenedorProductos.appendChild(seccionCategoria);
    });
}

// Función para vaciar el carrito
botonVaciar.addEventListener("click", function() {
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: "Esta acción no se puede deshacer.",
        icon: 'Cuidado!',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            guardarCarrito();
            renderizarCarrito();
            Swal.fire('¡Carrito vaciado!', '', 'Carrito vaciado con éxito');
        }
    });
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrito.length === 0) {
        Swal.fire('El carrito está vacío', '', 'info');
        return;
    }
    Swal.fire('¡Compra realizada!', 'Gracias por confiar en inKnovation.', 'success');
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
});

// Cargar el carrito al iniciar la página
cargarCarrito();
renderizarCarrito();