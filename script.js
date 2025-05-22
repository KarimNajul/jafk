const perfiles = [
  {
    nombre: "Karim",
    apodos: "Hakarux, Casimiro, Viktor, kkrux",
    descripcion: "Adicto al Minecraft, jugador promedio de lol, programador de estupideces como esta página",
    habilidades: "Ver el mismo anime infinitas veces, escuchar tapioca, la depresión",
    foto: "karim.webp"
  },
  {
    nombre: "Lautaro",
    apodos: "Hombre Mitrhyl, DLC, Lauti",
    descripcion: "Marihuano, se sabe todos los mods de Minecraft, juega xerath",
    habilidades: "La paja, hacer enojar a la gente (a todos)",
    foto: "lautaro.webp"
  },
  {
    nombre: "Ignacio",
    apodos: "Nacho, Nachogath, Ingeniegri",
    descripcion: "Piloto de f1 en la pc, se enoja por respirar",
    habilidades: "desarmarse como un lego, estar siempre enojado, romper ortos en los juegos de autos",
    foto: "nacho.jpeg"
  },
  {
    nombre: "Matías",
    apodos: "Mati, Moty, Capi, Matias, Motitas",
    descripcion: "El bendito motitas pacifista profesor",
    habilidades: "Ser el goat",
    foto: "mati.jpeg"
  },
  {
    nombre: "Johnny Sins",
    apodos: "Pelado, The Real Escaso Capilare",
    descripcion: "Adicto al anime y mangas, golpear gente y beber ron",
    habilidades: "Golpear gente, viajar mucho laburar mucho",
    foto: "pelao.webp"
  },
  {
    nombre: "Juan Cruz",
    apodos: "P3TT0, P3TT0 y P3TT0",
    descripcion: "Jugador promedio de futbol, dice que juega lol y no se calla un ratito",
    habilidades: "Callear todo lo que pasa en el mundo, Calzar menos de 40",
    foto: "peto.webp"
  },
];

const container = document.getElementById("cards-container");

perfiles.forEach(perfil => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img class="img-style" src="imagenes/${perfil.foto}" alt="${perfil.nombre}">
    <div class="card-content">
      <h3>${perfil.nombre}</h3>
    </div>
    <div class="extra-info">
      <p><strong>Apodos:</strong> ${perfil.apodos}</p>
      <p><strong>Descripción:</strong> ${perfil.descripcion}</p>
      <p><strong>Habilidades:</strong> ${perfil.habilidades}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    // Cierra cualquier otra tarjeta expandida
    document.querySelectorAll('.card.expanded').forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('expanded');
      }
    });

    // Alterna la tarjeta actual
    card.classList.toggle("expanded");

  });

  container.appendChild(card);
});

