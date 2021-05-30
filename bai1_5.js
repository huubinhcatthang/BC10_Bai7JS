//Bai 1:
var content = "";
for (var i = 1; i < 101; i++) {
  if (i < 10) {
    content = content + " ";
  }
  content = content + " " + i;
  if (i % 10 === 0) content = content + "\n";
}
console.log(content);

//Bai 2:

function inRaMangNguyenTo() {
  var Mang = [];
  var txtnhapMang = document.getElementById("nhapMang").value;
  var convertednhapMang = txtnhapMang.split(",");
  for (var i = 0; i < convertednhapMang.length; i++) {
    Mang.push(+convertednhapMang[i]);
  }
  var mangNguyenTo = [];
  for (var i = 0; i < Mang.length; i++) {
    var dem = 0;
    for (var k = 1; k <= Mang[i] / 2; k++) {
      if (Mang[i] % k === 0) dem++;
    }

    if (dem == 1) mangNguyenTo.push(Mang[i]);
  }
  console.log(mangNguyenTo);
}

//Bai 3
function bai3() {
  var n = +document.getElementById("bai3").value;
  var tong = 0;
  for (var i = 2; i <= n; i++) {
    tong = tong + i;
  }
  tong = tong + 2 * n;
  document.getElementById("ketQuaBai3").innerHTML = tong;
}
//Bai 4
function bai4() {
  var n = +document.getElementById("bai4").value;
  var mang = [];
  for (var i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      mang.push(i);
    }
  }
  console.log(n + " có " + mang.length + " ước số");
  console.log(mang);
}
//Bai 5
function bai5() {
  var chuoibandau = document.getElementById("bai5").value;
  var chuoisau = [];
  for (var i = chuoibandau.length - 1; i >= 0; i--) {
    chuoisau[chuoibandau.length - i - 1] = chuoibandau[i];
  }

  document.getElementById("ketQuaBai5").innerHTML = chuoisau.join("");
}
