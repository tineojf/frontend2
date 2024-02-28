/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt('Ingresa tu nombre: ') || 'no especificado';
  const nacimiento = prompt('Ingresa tu año de nacimiento: ') || 'no especificado';
  const ciudad = prompt('Ingresa ciudad: ') || 'no especificado';
  const interes = confirm('Interesa JS?: ');

  const edad = isNaN(parseInt(nacimiento)) ? 'no especificado' : 2024 - parseInt(nacimiento);
  const javascript = interes ? "Si" : "No";

  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = javascript;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const spnNombre = document.querySelector('#nombre');
  const spnEdad = document.querySelector('#edad');
  const spnCiudad = document.querySelector('#ciudad');
  const spnInteres = document.querySelector('#javascript');

  spnNombre.textContent = datosPersona.nombre;
  spnEdad.textContent = datosPersona.edad;
  spnCiudad.textContent = datosPersona.ciudad;
  spnInteres.textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector('#fila');
  fila.textContent = '';

  listado.forEach(item => {
    const caja = document.createElement('div');
    caja.classList.add('caja');

    const imagen = document.createElement('img');
    imagen.setAttribute('src', item.imgUrl);
    imagen.setAttribute('alt', item.lenguajes);

    const parrafoLeng = document.createElement('p');
    parrafoLeng.classList.add('lenguajes')
    parrafoLeng.textContent = item.lenguajes

    const parrafoBim = document.createElement('p');
    parrafoBim.classList.add('bimestre');
    parrafoBim.textContent = item.bimestre;

    caja.appendChild(imagen);
    caja.appendChild(parrafoLeng);
    caja.appendChild(parrafoBim);

    fila.appendChild(caja);
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector('#sitio');
  const btnTema = document.querySelector('#cambiar-tema');

  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const btnF = document.querySelector('#sobre-mi');

window.addEventListener('keydown', (e) => {
  if (e.code === "KeyF") {
    btnF.classList.remove('oculto');
  }
})
