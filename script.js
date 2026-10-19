
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// Eksperimen 1: Operasi dua bilangan
function operasiDuaBilangan() {
    let a = prompt("Masukkan bilangan pertama:");
    let b = prompt("Masukkan bilangan kedua:");

    if (a === null || b === null || a.trim() === "" || b.trim() === "") {
        alert("Input tidak boleh kosong!");
        return;
    }

    a = Number(a);
    b = Number(b);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan bilangan yang valid!");
        return;
    }

    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak bisa dibagi nol");
}

// Eksperimen 2: Tabel perkalian 7
function tabelPerkalian() {
    for (let i = 1; i <= 10; i++) {
        console.log("7 x " + i + " = " + (7 * i));
    }
}

// Eksperimen 3: Fungsi cek genap
function cekGenap(angka) {
    return angka % 2 === 0;
}

// Latihan 6: Cek bilangan
function cekBilangan() {
    let input = document.getElementById("bilangan").value;
    let angka = Number(input);
    let hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid!";
    } else if (cekGenap(angka)) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// Latihan 7: Mengubah warna halaman
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// Latihan 8 dan eksperimen menu makanan
let daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function(item) {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach(function(item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

// Eksperimen: Validasi nama
document.getElementById("formNama").addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;

    if (nama.trim() === "") {
        alert("Nama tidak boleh kosong!");
    } else {
        alert("Halo, " + nama + "!");
    }
});

// Eksperimen: Sembunyikan atau tampilkan pesan
function togglePesan() {
    let pesan = document.getElementById("pesanTambahan");

    if (pesan.style.display === "none") {
        pesan.style.display = "block";
    } else {
        pesan.style.display = "none";
    }
}
