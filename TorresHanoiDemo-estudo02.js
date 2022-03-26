const mbObj = window.matchMedia("(max-width: 700px)");
mbObj.addEventListener("load", marcos, false);

function marcos(x) {
      if (x.matches) {
            this.box02 = document.createElement ("div");
            this.box02.style.color = "#000000";
      } else {
            this.box02 = document.createElement ("div");
            this.box02.style.color = "#ff0000";
      };
}

function titleTextHanoi() {
marcos(mbObj);
this.box02.textContent = "As Torres de Hanói é um quebra-cabeça que consiste em uma base contendo três pinos, em um dos quais são dispostos alguns discos uns sobre os outros, em ordem crescente de diâmetro, de cima para baixo.";
 screen.appendChild(box02);
}

function start() {                                           // Iniciar as aplicacoes
      screen = document.getElementsByTagName("body") [0];
      screen.style.textAlign = "center";
      titleTextHanoi();
};

window.addEventListener("load", start, false);
