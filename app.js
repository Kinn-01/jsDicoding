document.write("Hello World");
console.log("Hello World");

let name; // Variable Let dapat diubah nilai nya
name = "Gilman";
document.writeln(name);
name = "arief";
document.writeln(name);

const nama = "Gilman"; // Variable konstan tidak dapat diubah nilai yang sudah di inisialisasi di dalamnya
console.log(nama);

let x;
console.log(typeof x);
//Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); //Membandingkan nilai hanya dengan kesamaan nya
console.log(aString === aNumber); //Membandingkan nilai identik dengan memperhatikan tipe data nya

let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting); //Pengecekan kondisi akan dilakukan dari statement if paling awal. Sehingga, ketika nilai language adalah “French”, maka pengecekan untuk language === “Japanese” tidak akan dilakukan.

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);
/*Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. 
Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. 
Terakhir adalah expression yang dieksekusi ketika kondisinya salah. Karena merupakan conditional expression, 
maka operand kedua dan ketiga harus mengembalikan nilai.*/

let namae = "";

if (namae) {
  console.log(`Halo, `.namae); // console.log(`Halo, ${namae}`);
} else {
  console.log("Nama masih kosong");
}

let bahasa = "Indonesia";
let salam = null;

switch (bahasa) {
  case "France":
    salam = "Bonjour";
    break;
  case "English":
    salam = "Good Morning";
    break;
  case "Indonesia":
    salam = "Selamat Pagi";
    break;
  default:
    salam = "Sudah Malam";
}

console.log(salam);

let arrNumber = [1, 2, 3, 4, 5];

for (arrayItem of arrNumber) {
  console.log(arrayItem);
}

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

let namaDepan = "Firman";
console.log(`Nama Saya ${namaDepan} `);

//Looping dengan while digunakan ketika kita tidak tau berapa banyak perulangan yang dibutuhkan.
/*looping dengan while tidak memiliki ketergantungan dengan variabel iterasi seperti pada for loop. 
Karena itu, meskipun while dapat melakukan perulangan yang sama dengan for, 
while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.*/

let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 5);

let score;
let result;
if (score >= 90) {
  result = "Selamat! Anda mendapatkan nilai A.";
} else if (score >= 80 && score <= 89) {
  result = "Anda mendapatkan nilai B.";
} else if (score >= 70 && score <= 79) {
  result = "Anda mendapatkan nilai C.";
} else if (score >= 60 && score <= 69) {
  result = "Anda mendapatkan nilai D.";
} else if (score <= 60) {
  result = "Anda mendapatkan nilai E.";
}

// Tipe data Object
const user = {
  nm: "Gilman",
  ag: 20,
  mar: false,
  alamat: "Bandung",
};

console.log(`My Name Is ${user.nm} Iam ${user.ag} Years Old Iam Life in ${user["alamat"]}`);

//Modifikasi Object
user.nm = "Arief";
user["ag"] = 21;
console.log(`My Name Is ${user.nm} Iam ${user.ag} Years Old Iam Life in ${user["alamat"]}`);

// Array
const myArr = [1, 2, 3, "Gilman", "Arief"];

myArr.push("Firmansyah"); //Menambahkan data ke dalam array yang disimpan di akhir index
myArr.push(15);
console.log(myArr.length);
console.log(myArr[5]);
myArr.pop(); //Mengeluarkan data array index terakhir
console.log(myArr);
myArr.shift(); //Mengeluarkan data array di index pertama
myArr.unshift(5); // Menambahkan data ke dalam array yang di simpan diawal index
console.log(myArr[0]);
myArr.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArr);

//Spread Operator
const baju = ["Kaos", "Kemeja"];
const celana = ["boxer", "levis"];

const gab = [...baju, ...celana];

console.log(gab);

const obj1 = { nmd: "Gilman", nmb: "Arief" };
const obj2 = { agg: 20, Gender: "Male" };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);

//Destruction Object
const profile = {
  fN: "John",
  lN: "Doe",
  agee: 18,
};

/*let fN = "Gilman";
let lN = "Arief";
let agee = 20;
({ fN, lN, agee } = profile);
*/

const { fN: localfN, lN: locallN, agee: localAgee } = profile;

console.log(localfN, locallN, localAgee);
