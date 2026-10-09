/* ==========================================================
   content.js — SEMUA PENGATURAN ada di sini.
   Dipakai oleh index.html dan strip-finder.html.

   Cara pakai:
   1. Buka strip-finder.html, gambar area di atas video.
   2. Klik "Salin", lalu paste menggantikan seluruh blok `areas: [ ... ],` di bawah.
   ========================================================== */

window.STRIP_CONTENT = {

  /* ---- Halaman ---- */
  title: "TIMELAPSE TEST.",
  video: "assets/video-01.webm",

  /* Ukuran asli video dalam piksel (lebar, tinggi).
     Semua titik area ditulis dalam koordinat piksel ini.
     Kalau ganti video dengan rasio yang sama tapi resolusi lain, ubah angka ini
     DAN skalakan titik areanya (atau gambar ulang di strip-finder). */
  videoSize: [1280, 720],

  /* ---- Tampilan efek ---- */
  style: {
    dashColor:   "#ffffff",  // warna garis putus-putus
    dashWidth:   2,          // tebal garis (px layar)
    dash:        [10, 8],    // [panjang garis, panjang jeda]
    dashSpeed:   40,         // kecepatan gerak garis (px per detik, negatif = arah sebaliknya)
    lift:        0.05,       // seberapa besar area membesar (0.05 = 5%)
    ease:        0.14,       // kehalusan transisi (kecil = lambat, besar = cepat)
    shadowBlur:  40,         // blur bayangan saat terangkat
    shadowAlpha: 0.45        // kegelapan bayangan (0 - 1)
  },

  /* ---- Area (hasil dari strip-finder) ---- */
  /* Contoh di bawah hanya placeholder, ganti dengan hasil strip-finder. */
  areas: [
    {
      id: "area-1",
      name: "Area 1",
      points: [[500, 235], [700, 207], [817, 300], [767, 450], [567, 483], [450, 367]]
    }
  ]

};
