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
    points: [[1106, 318], [1124, 336], [1131, 346], [1129, 401], [1102, 416], [1034, 434], [966, 451], [870, 442], [794, 430], [720, 415], [687, 398], [669, 373], [667, 346], [669, 312], [684, 291], [727, 274], [765, 265], [803, 258], [871, 264], [952, 270], [1015, 278], [1065, 293], [1093, 306]]
  },
  {
    id: "area-2",
    name: "Area 2",
    points: [[733, 265], [728, 254], [700, 246], [692, 243], [702, 226], [717, 216], [724, 210], [713, 203], [694, 198], [655, 193], [624, 191], [588, 192], [556, 195], [532, 199], [519, 207], [524, 217], [540, 227], [548, 239], [540, 245], [523, 251], [509, 260], [503, 277], [505, 296], [508, 314], [520, 332], [548, 341], [574, 347], [600, 347], [633, 347], [662, 344], [663, 310], [684, 282]]
  },
  {
    id: "area-3",
    name: "Area 3",
    points: [[492, 280], [493, 341], [450, 363], [366, 383], [244, 399], [127, 393], [82, 357], [84, 306], [118, 285], [179, 264], [241, 257], [313, 254], [373, 253], [435, 256], [473, 264]]
  },
  {
    id: "area-4",
    name: "Area 4",
    points: [[402, 195], [402, 231], [429, 243], [464, 247], [499, 252], [511, 250], [541, 237], [517, 216], [513, 203], [558, 190], [635, 187], [634, 172], [599, 161], [516, 161], [440, 170], [417, 177]]
  }
]

};
