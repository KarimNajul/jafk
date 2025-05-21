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
    foto: "nacho.webp"
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
    card.classList.toggle("expanded");
  });

  container.appendChild(card);
});
