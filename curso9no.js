// curso9no.js - Muro de actividades
const PUBLICACIONES = [
    {
        visible: true,
		titulo: "Clase 01: Bienvenida.",
        fecha: "04 de marzo, 2026",
        contenido: `El curso de 9no. tiene una carga horaria de 2 horas semanales.`,
        imagen: "",
		youtubeId: "",
        enlace: "https://docs.google.com/presentation/d/1uDRZ0k5_NaA4FXd0QLoVTqjG9bA7utzn0rLVtoR-Hmw/edit?usp=sharing"
    }
 ];

// Función para renderizar las novedades de forma dinámica
function cargarPublicaciones() {
    const contenedor = document.getElementById("cartelera-dinamica");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    PUBLICACIONES
		.filter(elemento => elemento.visible)
		.forEach(elemento => {
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
		
		if (elemento.youtubeId) {
			estructuraHtml += `
				<a href="https://www.youtube.com/watch?v=${elemento.youtubeId}"
				   target="_blank"
				   class="youtube-thumb">
					<img
						src="https://img.youtube.com/vi/${elemento.youtubeId}/hqdefault.jpg"
						alt="${elemento.titulo}">
				</a>
			`;
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