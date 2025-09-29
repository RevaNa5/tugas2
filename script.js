// ====================
// Bagian 1: Array keranjang
// ====================
let keranjang = ["Apel", "Pisang", "Jeruk"];
console.log("Awal:", keranjang);

keranjang.push("Mangga");
console.log("Setelah push:", keranjang);

keranjang.unshift("Semangka");
console.log("Setelah unshift:", keranjang);

keranjang.pop();
console.log("Setelah pop:", keranjang);

keranjang.shift();
console.log("Setelah shift:", keranjang);

console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log(`${i + 1}. ${keranjang[i]}`);
}

// ====================
// Bagian 2: Array of Objects produk
// ====================
const produk = [
  { nama: "Beras", harga: 50000 },
  { nama: "Minyak", harga: 20000 },
  { nama: "Gula", harga: 15000 }
];

produk.push({ nama: "Kopi", harga: 30000 });
console.table(produk);

produk.pop();
console.table(produk);

function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
  console.log(`Produk ${nama} ditambahkan`);
}

function hitungTotal() {
  let total = 0;
  for (let p of produk) {
    total += p.harga;
  }
  return total;
}

if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

tambahProduk("Teh", 10000);
console.table(produk);
console.log("Total harga semua produk:", hitungTotal());

// ====================
// Bagian 3: Switch hari
// ====================
let angkaHari = new Date().getDay(); // 0-6
let namaHari;

switch (angkaHari) {
  case 0: namaHari = "Minggu"; break;
  case 1: namaHari = "Senin"; break;
  case 2: namaHari = "Selasa"; break;
  case 3: namaHari = "Rabu"; break;
  case 4: namaHari = "Kamis"; break;
  case 5: namaHari = "Jumat"; break;
  case 6: namaHari = "Sabtu"; break;
  default: namaHari = "Tidak diketahui";
}

console.log("Hari ini:", namaHari);
