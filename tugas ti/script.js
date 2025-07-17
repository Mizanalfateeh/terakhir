const prodi = [
  { nama: "Sistem Informasi", jenjang: "S1", akreditasi: "B" },
  { nama: "Teknik Informatika", jenjang: "S1", akreditasi: "A" }
];

window.onload = function () {
  const container = document.getElementById("prodi-list");
  prodi.forEach((item) => {
    let el = document.createElement("div");
    el.className = "card p-3";
    el.innerHTML = `
      <h5 class="card-title">${item.nama}</h5>
      <p>Jenjang: ${item.jenjang}</p>
      <p>Akreditasi: ${item.akreditasi}</p>
    `;
    container.appendChild(el);
  });
};