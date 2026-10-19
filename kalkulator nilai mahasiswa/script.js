
function hitungNilai(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function predikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    if (tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100) {
        document.getElementById("hasil").textContent =
            "Nilai harus antara 0 sampai 100!";
        return;
    }

    let akhir = hitungNilai(tugas, uts, uas);
    let status = akhir >= 60 ? "Lulus" : "Belum Lulus";

    document.getElementById("hasil").innerHTML =
        "<h3>Hasil Nilai</h3>" +
        "Nilai Akhir: " + akhir.toFixed(2) + "<br>" +
        "Predikat: " + predikat(akhir) + "<br>" +
        "Status: " + status;
});
