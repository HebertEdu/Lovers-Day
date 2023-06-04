function sim() {
    alert("EBAAAAA, VOCÊ ACEITO")
    alert("TI AMO DE ++")
    alert("AMOR DA MINHA VIDIA, MINHA PRIVADA INTUPIDIA KSKSSKSKSK ;)")
}

function desvia(t) {
  let btn = t;
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log("UPA, ERROU RSRSRS ....  XD");
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}