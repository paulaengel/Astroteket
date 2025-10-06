const overskrift = document.getElementById("stjernensliv");

window.onload = function() { //window.onload sørger for at koden først kører når siden er loadet
  setTimeout(() => {
    overskrift.style.opacity = 1;
  }, 500); // 1000 ms = 1 sekund
};