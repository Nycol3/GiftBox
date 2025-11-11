/* ABRIR TAPA Y CONTENIDO */
const cajaPrincipal = document.querySelector(".caja");
const tapaRegalo = document.querySelector(".tapa-caja");
const contenido = document.querySelector(".contenido"); 

cajaPrincipal.addEventListener("click", (e) => {
    
    if ((e.target.matches(".caja") ||
        e.target.matches(".cuerpo-caja") ||
        e.target.matches(".tapa-caja") ||
        e.target.matches(".listones")) && 
        contenido && !contenido.classList.contains("abierta")) 
    {
        tapaRegalo.classList.add("tapa-abierta");
        if (contenido) {
            setTimeout(() => {
                contenido.classList.add("mostrar-carta"); 
                setTimeout(() => {
                    contenido.classList.remove("mostrar-carta");
                    contenido.classList.add("abierta");
                }, 500); 
            }, 1000);
        }
    }
});

/*________________________________________________________ */

/*MEDUSAS*/
function createJellyfish() {
    const jellyfish = document.createElement('div');
    jellyfish.className = 'jellyfish';
    
    const body = document.createElement('div');
    body.className = 'jellyfish-body';
    
    const tentacles = document.createElement('div');
    tentacles.className = 'jellyfish-tentacles';
    
    for (let i = 0; i < 6; i++) {
        const tentacle = document.createElement('div');
        tentacle.className = 'tentacle';
        tentacles.appendChild(tentacle);
    }
    
    body.appendChild(tentacles);
    jellyfish.appendChild(body);
    
    const startX = Math.random() * (window.innerWidth - 100);
    jellyfish.style.left = startX + 'px';
    
    const duration = 15 + Math.random() * 5;
    const delay = Math.random() * 5;
    
    jellyfish.style.animation = `swim ${duration}s linear ${delay}s infinite`;
    
    return jellyfish;
}

const style = document.createElement('style');
style.textContent = `
    @keyframes swim {
        0% {
            bottom: -150px;
            transform: translateX(0);
        }
        100% {
            bottom: calc(100vh + 150px);
            transform: translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);

const root = document.getElementById('root');

for (let i = 0; i < 10; i++) {
    const jellyfish = createJellyfish();
    root.appendChild(jellyfish);
}

