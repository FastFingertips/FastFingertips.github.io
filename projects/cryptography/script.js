// MD5 şifreleme fonksiyonu
function md5(text) {
  return CryptoJS.MD5(text).toString();
}

// SHA-1 şifreleme fonksiyonu
function sha1(text) {
  return CryptoJS.SHA1(text).toString();
}

// SHA-256 şifreleme fonksiyonu
function sha256(text) {
  return CryptoJS.SHA256(text).toString();
}

// Butonların tıklama olayları
document.getElementById('md5Button').addEventListener('click', function(event) {
  event.preventDefault();
  var text = document.getElementById('inputText').value;
  var output = md5(text);
  document.getElementById('md5Output').innerHTML = output;
});

document.getElementById('sha1Button').addEventListener('click', function(event) {
  event.preventDefault();
  var text = document.getElementById('inputText').value;
  var output = sha1(text);
  document.getElementById('sha1Output').innerHTML = output;
});

document.getElementById('sha256Button').addEventListener('click', function(event) {
  event.preventDefault();
  var text = document.getElementById('inputText').value;
  var output = sha256(text);
  document.getElementById('sha256Output').innerHTML = output;
});
