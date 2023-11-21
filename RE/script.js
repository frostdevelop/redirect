function redirect() {
  var red = "https://" + document.getElementById('link').value
  window.location.href = red
  console.log(red)
}

function functionSearch() {
  var se = "https://www.google.com/search?q=" + document.getElementById('search').value
  window.location.href = se
  console.log(se)
}

function change() {
  document.getElementById('header').innerHTML = "Redirection ENGINE?"
}

function change2() {
  document.getElementById('header').innerHTML = "Search ENGINE"
}

