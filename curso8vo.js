// curso8vo.js - Muro de actividades
const PUBLICACIONES = [
    {
        visible: true,
		titulo: "Actividad 04: Inteligencia Artificial.",
        fecha: "08 de julio, 2026",
        contenido: `Observa la imagen y en un documento de texto registra:
		1. ¿Qué es la Inteligencia Artificial?
		2. ¿Qué tipos de IA existen?  (cita ejemplos)
		3. Registra y responde la pregunta al pie de la imagen.
		
		Envía tu trabajo por correo electrónico a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "https://lh3.googleusercontent.com/d/14bnZSAJ1qxaGFgFNKVbEFIqwrsQKBTRh",
		youtubeId: "",
        enlace: ""
	},
    {
        visible: true,
		titulo: "Actividad 03: Inteligencia.",
        fecha: "09 de junio, 2026",
        contenido: `Observa la imagen y en un documento de texto responde:
		1. ¿Qué es un agente inteligente?
		2. ¿Qué capacidades o competencias lo conforman?  (cita ejemplos)
		3. Registra y responde la pregunta al pie de la imagen.
		
		Envía tu trabajo por correo electrónico a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "https://lh3.googleusercontent.com/d/1hjB7AgBUayU948ARDE4m0LiSt7yYWuHo",
		youtubeId: "",
        enlace: ""
	},
    {
        visible: true,
		titulo: "Actividad 02: Identidad digital.",
        fecha: "13 de mayo, 2026",
        contenido: `Mira los videos y responde en tu cuaderno:
		1. ¿Qué es la identidad digital?
		2. ¿Qué información la conforma?
		3. ¿Puede borrarse la huella digital?
		4. ¿Qué precauciones debes tener?
		
		Envía tus respuestas por correo electrónico a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "",
		youtubeId: "glK6XPN2-8c",
        enlace: "https://youtu.be/fLKPsy2_2Og?si=-SM9wshkn7xBG1aS"
	},
    {
        visible: true,
		titulo: "Actividad 01: Comparativa de sitios.",
        fecha: "04 de mayo, 2026",
        contenido: `Navega los siguientes sitios web y completa la rúbrica para cada uno.
		
		A. https://liceo14.github.io/
		B. https://letraslibres.com/
		C. https://www.diariogol.com/.
		
		Responde:
		1. Jerarquía de Criterios: De los 5 puntos evaluados en la rúbrica, ¿cuál consideran que es el "filtro" más importante? Si una página es estéticamente perfecta pero no tiene autor ni fuentes, ¿podemos confiar en ella?
		
		2. Seguridad vs. Verdad: ¿El hecho de que una página tenga el "candadito" de seguridad (cifrado HTTPS) significa que la información que contiene es verdadera? Justifica tu respuesta basándote en lo observado.
		
		3. El Impacto de la Estética: ¿Cómo influye el diseño visual (colores, tipografía, orden) en nuestra primera impresión sobre la seriedad de un sitio? ¿Creen que un mal diseño siempre significa mala información?`,
        imagen: "https://lh3.googleusercontent.com/d/1ieOMiSJYHty-6tyfnFU8R9_xJU_8Yxj1",
		youtubeId: "",
        enlace: ""
    },
    {
        visible: true,
		titulo: "Ficha: Fundamentos web.",
        fecha: "20 de abril, 2026",
        contenido: `Copia la ficha en tu cuaderno y envíala por correo electrónico a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "",
		youtubeId: "",
        enlace: "https://drive.google.com/file/d/1-Yh2DC4aovuy7s78Li6pBIew5_8AdZr4/view?usp=drive_link"
	},
    {
        visible: true,
		titulo: "Ficha: Correo electrónico.",
        fecha: "20 de abril, 2026",
        contenido: `Copia la ficha en tu cuaderno y envíala por correo electrónico a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "",
		youtubeId: "",
        enlace: "https://drive.google.com/file/d/0BwLqi5BKfW_vSFdtS3NRbU5rMFE/view?usp=share_link&resourcekey=0-63eOKxri4UGfvXL9t8snNg"
	},
    {
        visible: true,
		titulo: "Clase 05: Definiciones.",
        fecha: "01 de abril, 2026",
        contenido: `Busca en la web las siguientes definiciones y regístralas en tu cuaderno:
		- Computadora.
		- Informática.
		- Procesar.
		- Almacenar.
		- Transmitir. 
		Envía foto de tu trabajo a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "",
		youtubeId: "",
        enlace: ""
    },
    {
        visible: true,
		titulo: "Clase 04: Cuestionario.",
        fecha: "27 de marzo, 2026",
        contenido: `Responde en tu cuaderno y envía foto por correo electrónico:
		1. ¿Cuál es la carga horaria de la asignatura?
		2. ¿Dónde se encuentra la información del curso?
		3. ¿A dónde se envían los trabajos realizados?
		4. ¿Qué tipo de trabajos deben realizarse?
		5. ¿Dónde se realizan las evaluaciones?
		6. ¿Cómo se acredita la asignatura?`,
        imagen: "",
		youtubeId: "",
        enlace: ""
    },
    {
        visible: true,
		titulo: "Clase 03: Contrato pedagógico.",
        fecha: "24 de marzo, 2026",
        contenido: `En tu cuaderno de clase: 
		
		1. Escribe tres acciones que según tu criterio favorezcan el buen clima de aprendizaje, la organización del trabajo y el respeto mutuo (por ejemplo: llegar en hora a clase).
		
		2. Indica qué medidas de apoyo o acompañamiento esperarías del docente para ayudarte a mejorar tus actitudes y tu compromiso con el trabajo en clase.
		
		Envía tu trabajo por correo electrónico a <strong>ebiccuy@gmail.com</strong>`,
        imagen: "",
		youtubeId: "",
        enlace: ""
    },
    {
        visible: true,
		titulo: "Clase 02: Envío de trabajos.",
        fecha: "10 de marzo, 2026",
        contenido: `<strong>¿Cómo enviar trabajos?:</strong>
		1. Foto.
		2. Compartir.
		3. Gmail/Correo.
		4. Completo formulario:
		- Para: ebiccuy@gmail.com
		- Asunto: 8vo3 TRABAJO APELLIDO Nombre
		5. Enviar. `,
        imagen: "",
		youtubeId: "",
        enlace: ""
    },
    {
        visible: true,
		titulo: "Tarea 01: Equipo y correo.",
        fecha: "09 de marzo, 2026",
        contenido: `<strong>Equipo CEIBAL:</strong> debes concurrir a clase con tu equipo Ceibal en el estado que esté.
		Si está roto, debes enviar a repararlo y presentar la boleta de reparación.
		Si lo perdiste o te lo robaron, debes efectuar la denuncia policial y presentar el documento correspondiente.
		
		<strong>Correo electrónico:</strong> En tu cuaderno de clase, escribe la dirección de correo electrónico que usas para enviar y recibir comunicaciones.`,
        imagen: "",
		youtubeId: "",
        enlace: ""
    },
    {
        visible: true,
		titulo: "Clase 01: Bienvenida.",
        fecha: "04 de marzo, 2026",
        contenido: `El curso de 8vo. tiene una carga horaria de 2 horas semanales.`,
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