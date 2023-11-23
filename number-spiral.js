// Fungsi untuk menemukan angka pada spiral berdasarkan koordinat baris dan kolom
function findNumberInSpiral(y, x) {
    // Menentukan lapisan spiral berdasarkan koordinat maksimum antara x dan y
    let layer = Math.max(Math.abs(x), Math.abs(y)); // Time Complexity: O(1), Space Complexity: O(1)
    // Menentukan angka awal di lapisan tertentu
    let layerStart = (2 * layer - 1) ** 2 + 1; // Time Complexity: O(1), Space Complexity: O(1)
    let sideLength = 2 * layer - 1; // Panjang sisi spiral

    let centerX = layer; // Koordinat x pusat spiral
    let centerY = layer; // Koordinat y pusat spiral
    let corner = layerStart; // Angka pada sudut spiral

    // Menentukan angka berdasarkan koordinat x dan y
    if (x === layer && y !== -layer) {
        corner += y - centerY; // Time Complexity: O(1), Space Complexity: O(1)
    } else if (y === -layer) {
        corner += sideLength - 1 + (centerX - x); // Time Complexity: O(1), Space Complexity: O(1)
    } else if (x === -layer) {
        corner += 2 * (sideLength - 1) + (centerY - y); // Time Complexity: O(1), Space Complexity: O(1)
    } else if (y === layer) {
        corner += 3 * (sideLength - 1) + (x - centerX); // Time Complexity: O(1), Space Complexity: O(1)
    }

    return corner; // Mengembalikan angka pada posisi x dan y dalam spiral
}

// Modul readline untuk menerima input dari pengguna
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = 0; // Jumlah tes
let tests = []; // Menyimpan koordinat baris dan kolom untuk setiap tes

rl.question("Masukkan jumlah tes: ", (numTests) => {
    t = parseInt(numTests);
    console.log("Masukkan baris dan kolom untuk setiap tes:");

    rl.on("line", (line) => {
        // Memisahkan baris dan kolom
        const [y, x] = line.split(" ").map(Number);
        tests.push([y, x]); // Menyimpan koordinat untuk setiap tes

        if (tests.length === t) {
            // Menemukan angka untuk setiap tes dan mencetak hasil
            for (let i = 0; i < tests.length; i++) {
                const [y, x] = tests[i];
                const number = findNumberInSpiral(y, x);
                console.log(number);
            }
            rl.close(); // Menutup interface readline
        }
    });
});

// Penjelasan mengenai Time Complexity dan Space Complexity

/* 
Time Complexity:
- Algoritma ini memiliki kompleksitas waktu O(t), di mana t adalah jumlah tes.
- Untuk setiap tes, pencarian angka dalam spiral dilakukan dalam waktu konstan O(1).

Space Complexity:
- Algoritma ini memiliki kompleksitas ruang O(t), di mana t adalah jumlah tes.
- Variabel 'tests' digunakan untuk menyimpan koordinat baris dan kolom untuk setiap tes, dengan ruang yang berubah seiring bertambahnya jumlah tes.
*/
