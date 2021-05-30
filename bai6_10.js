//Bai 6
function bai6() {
  var tong = 0;
  for (var i = 1; i < 100; i++) {
    tong += i;
    if (tong > 100) break;
  }
  var x = i - 1;
  document.getElementById("ketQuaBai6").innerHTML = x;
}
//Bai 7

function bai7() {
  var n = +document.getElementById("bai7").value;
  for (var i = 1; i < 10; i++) {
    console.log(n + " x " + i + " = " + i * n);
  }
}

//Bai 8
function bai8() {
  var cards = [
    "4K",
    "KH",
    "5C",
    "KA",
    "QH",
    "KD",
    "2H",
    "10S",
    "AS",
    "7H",
    "9K",
    "10D",
  ];
  var nguoi1 = [],
    nguoi2 = [],
    nguoi3 = [];
  nguoi4 = [];

  for (var i = 0; i < cards.length; i++) {
    if (i % 4 === 0) nguoi1.push(cards[i]);
    if (i % 4 === 1) nguoi2.push(cards[i]);
    if (i % 4 === 2) nguoi3.push(cards[i]);
    if (i % 4 === 3) nguoi4.push(cards[i]);
  }
  console.log(nguoi1);
  console.log(nguoi2);
  console.log(nguoi3);
  console.log(nguoi4);
}
function bai9() {
  var soConVat = +document.getElementById("socon").value;
  var soChanConVat = +document.getElementById("sochan").value;
  var soGa = 2 * soConVat - soChanConVat / 2;
  var soCho = soChanConVat / 2 - soConVat;
  document.getElementById("soga").innerHTML = soGa;
  document.getElementById("socho").innerHTML = soCho;
}
function bai10() {
  var gioPhut = [];
  var txtnhapGioPhut = document.getElementById("gioPhut").value;
  var convertedGioPhut = txtnhapGioPhut.split(":");
  for (var i = 0; i < convertedGioPhut.length; i++) {
    gioPhut.push(+convertedGioPhut[i]);
  }
  var doKimPhut;
  var doKimGio;
  doKimPhut = gioPhut[1] * 6;
  if (gioPhut[0] >= 12) {
    gioPhut[0] = gioPhut[0] - 12;
  }
  doKimGio = gioPhut[0] * 30 + 0.5 * gioPhut[1];
  var dolech = doKimPhut - doKimGio;
  if (dolech < 0) dolech = 360 + dolech;
  document.getElementById("gocLech").innerHTML = dolech;
  console.log(gioPhut[0]);
  console.log(gioPhut[1]);
}
