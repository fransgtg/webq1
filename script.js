// Data mahasiswa
const mahasiswa = [
  {hari:"Senin", jam:"13:00 - 14:40", matkul:"Musikologi Sumatera Utara", dosen:"Dra. Heristina Dewi M.Pd"},
  {hari:"Selasa", jam:"08:50 - 10:30\n13:50-16:20", matkul:"IELTS Preparation\nKecerdasan Buatan", dosen:"Drs. Yulianus Harefa GradDipEd TESOL., MEd TESOL\nDr. Amalia S.T., M.T."},
  {hari:"Rabu", jam:"08:00 - 10:30\n14:40 - 17:10", matkul:"Pemrograman Web\nBasis Data", dosen:"Dr. Dewi Sartika Br Ginting S.Kom., M.Kom\nInsidini Fawwaz M.Kom"},
  {hari:"Kamis", jam:"08:00 - 09:40", matkul:"Etika Profesi", dosen:"Dr. Ir. Elviawaty Muisa Zamzami S.T., M.T., M.M., IPU"},
  {hari:"Jumat", jam:"08:00 - 09:40\n13:50 - 16:20", matkul:"Wirausaha Digital\nStruktur Data", dosen:"Dr. T. Henny Febriana Harumy S.Kom., M.Kom\nAnandhini Medianty Nababan S.Kom., M.T"},
  {hari:"Sabtu", jam:"-", matkul:"-", dosen:"-"},
  {hari:"Minggu", jam:"-", matkul:"-", dosen:"-"}
];

// Buat elemen tabel
const tabel = document.createElement("table");
tabel.style.borderCollapse = "collapse";
tabel.style.width = "100%";

// Buat header tabel
const header = tabel.insertRow();
["Hari","Jam","Mata Kuliah","Dosen"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid white";
  th.style.padding = "8px";
  th.style.fontSize = "20px";
  th.style.background = "grey";
  header.appendChild(th);
});

// Isi data ke tabel
mahasiswa.forEach(mhs => {
  const row = tabel.insertRow();
  Object.values(mhs).forEach(value => {
    const cell = row.insertCell();
    cell.innerHTML = value.replace(/\n/g, "<br>");
    cell.style.border = "1px solid white"; 
    cell.style.padding = "8px";
    cell.style.fontSize = "15px";
    cell.style.textAlign = "center";
  });
});

// Tambahkan tabel ke halaman
document.getElementById("tabel-container").appendChild(tabel);
