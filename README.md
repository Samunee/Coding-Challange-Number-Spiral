# Penemuan Angka dalam Spiral

Kode ini adalah solusi untuk menemukan angka pada spiral berdasarkan koordinat baris dan kolom tertentu.

## Fungsi `findNumberInSpiral(y, x)`

Fungsi `findNumberInSpiral` menerima koordinat `y` (baris) dan `x` (kolom) sebagai argumen dan mengembalikan angka pada posisi tersebut dalam spiral. Berikut penjelasan singkat tentang kode tersebut:

- Menggunakan variabel `layer` untuk menentukan lapisan spiral berdasarkan koordinat maksimum antara `x` dan `y`.
- Menghitung `layerStart` yang merupakan angka awal di lapisan tertentu.
- Menyimpan panjang sisi spiral dalam variabel `sideLength`.
- Menentukan koordinat pusat spiral (`centerX` dan `centerY`) serta sudut spiral (`corner`).
- Melakukan pengecekan koordinat `x` dan `y` untuk menentukan angka yang tepat dalam spiral.

## Penggunaan

Program ini menerima input dari pengguna untuk jumlah tes dan koordinat baris dan kolom pada setiap tes. Kemudian, menampilkan angka yang ditemukan pada posisi tersebut dalam spiral.

Silakan lihat kode untuk penjelasan lebih lanjut mengenai alur logika dan implementasi.

### Contoh Input-Output

Input: <br>
`3` <br>
`2 3` <br>
`1 1` <br>
`4 2` <br>

Output: <br> 
`8` <br>
`1` <br>
`15` <br>
