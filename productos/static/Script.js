document.addEventListener("DOMContentLoaded", function() {
    // Estilos CSS con colores llamativos y efectos
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        header {
            background: #ff4081;
            color: white;
            text-align: center;
            padding: 20px;
            width: 100%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        nav {
            background: #ff80ab;
            padding: 10px;
            width: 100%;
            text-align: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-size: 18px;
            font-weight: bold;
        }
        .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 25px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            text-align: center;
            animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .productos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .producto {
            background: #ffffff;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }
        .producto:hover {
            transform: scale(1.05);
        }
        .producto img {
            width: 100%;
            border-radius: 8px;
            transition: opacity 0.3s;
        }
        .producto img:hover {
            opacity: 0.8;
        }
        footer {
            background: #ff4081;
            color: white;
            padding: 15px;
            margin-top: 20px;
            width: 100%;
            text-align: center;
            box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(style);

    // Crear el header
    const header = document.createElement("header");
    header.innerHTML = `
        <h1>Florería Bella Flor</h1>
        <p>Arreglos florales coloridos y elegantes</p>
    `;
    document.body.appendChild(header);

    // Crear la navegación
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
    `;
    document.body.appendChild(nav);

    // Crear el contenedor principal
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `<h2>Nuestros Productos</h2>`;
    document.body.appendChild(container);

    // Crear productos dinámicamente
    const productos = [
        { nombre: "Ramo de Rosas", precio: "500 MXN", imagen: "https://cdn03.lolaflora.com/bonnygift/lffresh020-1/XL/lffresh020-1-8d86664fa84d78b-60d00405.jpg?_gl=1*1ndjw89*_gcl_aw*R0NMLjE3NDE0NTk3OTUuQ2owS0NRaUE4cS0tQmhEaUFSSXNBUDl0S0kyTkZ3a3FHbEQ5UGg1THhqREhBMGFVbkVvZnZzallxY3lQYzRoY3pvTUJ2c05iOUpaSHlrTWFBc3IyRUFMd193Y0I.*_gcl_au*MTM2NTgwNTI1MC4xNzQxNDU5NjY4" },
        { nombre: "Arreglo de Tulipanes", precio: "600 MXN", imagen: "https://cdnx.jumpseller.com/the-flower-store/image/31508270/resize/1280/1280?1675477819" },
        { nombre: "Orquídeas Elegantes", precio: "750 MXN", imagen: "https://www.floresregias.com/wp-content/uploads/2024/11/Bouquet-de-orquideas-cymbidim.jpeg" }
    ];

    const productosDiv = document.createElement("div");
    productosDiv.className = "productos";

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.className = "producto";
        
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = `${producto.nombre} - ${producto.precio}`;

        divProducto.appendChild(img);
        divProducto.appendChild(descripcion);
        productosDiv.appendChild(divProducto);
    });

    container.appendChild(productosDiv);

    // Crear el footer
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>Contacto: +52 81 1234 5678 | Email: info@floreriabellaflor.com</p>
        <p>Ubicación: Monterrey, NL, México</p>
    `;
    document.body.appendChild(footer);
});
