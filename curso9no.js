// curso9no.js - Muro de actividades
const PUBLICACIONES = [
    {
        titulo: "Acto 19 de junio",
        fecha: "01 de junio, 2026",
        contenido: "El acto comenzará a las 9:00 horas. Los jurantes deben presentarse a las 8:30 horas. ",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj0evWnjoJgc42hJN203MgAyDxp8soqBSQ6iNTt-uOEJfmQov0xcw9p7mY8tn7j5xN0UKRtLvbrZ6zbBScYWrdEKe1WHL3VinicHRubkvR5fcEfmTPTayWpEDIUTPHo_JTBBzlHgIA0ZcyQJRiu2r_FT3TjcEIcdlgdJmWBrYdpGBKjk5Uy5kl-e9vzik/w400-h200/portada19.jpg",
        enlace: ""
    }
 ];

// Función para renderizar las novedades de forma dinámica
function cargarPublicaciones() {
    const contenedor = document.getElementById("cartelera-dinamica");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    PUBLICACIONES.forEach(elemento => {
        const article = document.createElement("article");
        article.className = "post";

        let estructuraHtml = `
            <h3><i class="fa-solid fa-newspaper"></i> ${elemento.titulo}</h3>
            <p><small class="highlight-line"><i class="fa-regular fa-calendar"></i> ${elemento.fecha}</small></p>
            <br>
        `;

        if (elemento.imagen) {
            estructuraHtml += `
                <div class="post-content">
                    <div class="post-text">
                        <p>${elemento.contenido.replace(/\n/g, '<br>')}</p>
                    </div>
                    <a href="${elemento.imagen}" target="_blank">
                        <img src="${elemento.imagen}" alt="Imagen de ${elemento.titulo}">
                    </a>
                </div>
            `;
        } else {
            estructuraHtml += `<p>${elemento.contenido.replace(/\n/g, '<br>')}</p>`;
        }

        if (elemento.enlace) {
            estructuraHtml += `
                <br>
                <a href="${elemento.enlace}" class="btn-comment" ${elemento.enlace.startsWith('http') ? 'target="_blank"' : ''}> Ver archivo</a>
            `;
        }

        article.innerHTML = estructuraHtml;
        contenedor.appendChild(article);
    });
}

document.addEventListener("DOMContentLoaded", cargarPublicaciones);