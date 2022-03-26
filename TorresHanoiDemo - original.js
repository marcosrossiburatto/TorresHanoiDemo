const towerHeight = "40px";                                       // Constante altura das fichas

var screen;                                                  // (CriacaoTorres01.js) Criação da Varavel que contem a apresentacao

var movements = 0;

var tower1 = new Tower(true);                              // (CriacaoTorres01.js) Criação da torre 1 + (CriacaoDiscosTorres02.js) Colocado true e false 
var tower2 = new Tower(false);                             // (CriacaoTorres01.js) Criação da torre 2 + (CriacaoDiscosTorres02.js) Colocado true e false 
var tower3 = new Tower(false);                             // (CriacaoTorres01.js) Criação da torre 3 + (CriacaoDiscosTorres02.js) Colocado true e false 

var selectedDisk;
var startMov;
var endMov;

function createDiv() {                                        // (CriacaoTorres01.js) Criacao de uma divisão (igual a tag <div> no HTML)
      var box = document.createElement ("div");             // (CriacaoTorres01.js) Criacao da var box para criacao das torres
      return box;
}

function over1() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      over(tower1);
}

function over2() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      over(tower2);
}

function over3() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      over(tower3);
}

function over (tower) {                                     // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      tower.box.style.backgroundColor = "#ADFAFF"
}

function out1() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      out(tower1);
}

function out2() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      out(tower2);
}

function out3() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      out(tower3);
}

function out (tower) {                                     // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      tower.box.style.backgroundColor = "#ffffFF"
}

function click1() {                                         // (CriaçãoTorresExtras03.js) Inverter de falso para verdadeiro ou de verdadeiro para falso
      tower1.elected = !tower1.elected;
      click(tower1);
}

function click2() {                                         // (CriaçãoTorresExtras03.js) Inverter de falso para verdadeiro ou de verdadeiro para falso
      tower2.elected = !tower2.elected;
      click(tower2);
}

function click3() {                                         // (CriaçãoTorresExtras03.js) Inverter de falso para verdadeiro ou de verdadeiro para falso
      tower3.elected = !tower3.elected;
      click(tower3);
}

function click(tower) {                                   // (CriaçãoTorresExtras03.js) Preparação para frente
      if (tower.elected) {
            //tower.box.style.borderColor = "#ff0000";
            //alert(tower.haveDisks());
            selectStartEndMov(tower);
      } else {
            tower.box.style.borderColor = "#000";
            reStartEndMov();
      }
}

function fillContent() {                               // (CriacaoDiscosTorres02.js)  Criacao da var Array com a disposição para cada disco nas torres
      var content = new Array();

      for (var i = 0; i < 5; i++) {
            content[i] = new Filled();                    // (CriacaoDiscosTorres02.js) Chama funcao de criacao dos tamanhos dos futuros discos, 05 unidades por torres
      }

      return content;
}

function fillDisks() {                                  // (CriacaoDiscosTorres02.js) Var Array que contem os discos iniciais colocados na ordem do menor para o maior
      var content = new Array();

      content[0] = new Filled();                          // (CriacaoDiscosTorres02.js) Espaço sem disco
      content[1] = new smallDisk();                           // (CriacaoDiscosTorres02.js) Define o disco menor para o espaco
      content[2] = new mediunDisk();                           // (CriacaoDiscosTorres02.js) Define o disco medio para o espaco
      content[3] = new largeDisk();                           // (CriacaoDiscosTorres02.js) Define o disco grande para o espaco
      content[4] = new extraLargeDisk();                          // (CriacaoDiscosTorres02.js) Define o disco extra grande para o espaco

      return content;
}

function smallDisk() {                                          // (CriacaoDiscosTorres02.js) Criação Disco 1 - menor
      this.box = createDiv();
      this.box.style.width = "10%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#0088CC";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 0;
}

function mediunDisk() {                                          // (CriacaoDiscosTorres02.js) Criação Disco 2 - medio
      this.box = createDiv();
      this.box.style.width = "30%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#979797";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 1;
}

function largeDisk() {                                          // (CriacaoDiscosTorres02.js) Criação Disco 3 
      this.box = createDiv();
      this.box.style.width = "50%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#666666";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 2;
}

function extraLargeDisk() {                                         // (CriacaoDiscosTorres02.js) Criação Disco 4 - maior 
      this.box = createDiv();
      this.box.style.width = "70%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#000000";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 3;
}

function Filled() {                                         // (CriacaoDiscosTorres02.js) Criacao dos tamanhos dos futuros discos 
      this.box = createDiv();
      this.box.style.width = "100%";
      this.box.style.height = towerHeight;
}

function Tower(startBox) {                               // (CriacaoTorres01.js)Criação geral dos quadros
      this.box = createDiv();
      this.box.style.width = "28%";
      this.box.style.height = "200px";
      this.box.style.marginLeft = "4%";
      this.box.style.borderWidth = "2%";
      this.box.style.border = "solid black";
      this.box.style.borderRadius = "10%"
      this.box.style.float = "left";
      this.elected = false;                                  // (CriaçãoTorresExtras03.js) Adicionado o conteudo ao quadro
      this.content;                                        // (CriacaoDiscosTorres02.js) Adicionado o conteudo ao quadro

      if (startBox) {
            this.content = fillDisks();               // (CriacaoDiscosTorres02.js) Executar se é o padrao de inicio 
      } else {
            this.content = fillContent();            // (CriacaoDiscosTorres02.js) Executar como ficos apos as mudancas 
      }

      for (var i = 0; i < this.content.length; i++) {      // (CriacaoDiscosTorres02.js) Apresentar na tela a posição dos discos
            this.box.appendChild(this.content[i].box);
      }

      this.haveDisks = function() {
            var noDisk = 0;

            for (var i = 0; i < this.content.length; i++) {
                  if (this.content[i] instanceof Filled) {
                        noDisk++;
                  }
            }

            if (noDisk == this.content.length) {
                  return false;
            } else {
                  return true;
            }
      };

      this.getTopDisk = function() {
            for (var i = 0; i < this.content.length; i++) {
                  if(!(this.content[i] instanceof Filled)) {
                        return this.content[i];
                  }
            }
      };

      this.eraseTopDisk = function() {
            for (var i = 0; i < this.content.length; i++) {
                  if (!(this.content[i] instanceof Filled)) {
                        selectedDisk = this.content[i];
                        this.content[i] = new Filled();
                        break;
                  }
            }
      };

      this.insertTopDisk = function() {
            for (var i = this.content.length - 1; i >= 0; i--) {
                  if (this.content[i] instanceof Filled) {
                        this.content[i] = selectedDisk;
                        break;
                  }

            }
      };

      this.redrawDisk = function() {
            while (this.box.hasChildNodes()) {
                  this.box.removeChild(this.box.lastChild);
            }

            for (var i = 0; i < this.content.length; i++) {
                  this.box.appendChild(this.content[i].box);
            }
      };

}

function selectStartEndMov(tower) {
      if (startMov == undefined) {
            if (tower.haveDisks()) {
                tower.box.style.borderColor = "#FF0000";
                startMov = tower;
                startMov.elected = true;
            }
      } else if (startMov != undefined && endMov == undefined) {
            endMov = tower;
            endMov.elected = true;

         if (startMov != endMov) {
               if (!endMov.haveDisks() || (startMov.getTopDisk().value < endMov.getTopDisk().value)) {
                  startMov.eraseTopDisk();
                  startMov.redrawDisk();
                  endMov.insertTopDisk();
                  endMov.redrawDisk();
                  movements++;
                  updateCounter();
               }
         }   
      }

      if (endMov != undefined && startMov != undefined) {
            reStartEndMov();
      }

      if (checkVictory()) {
            victory();
      }
}

function checkVictory() {
      if (tower2.content[0] instanceof Filled && 
          tower2.content[1] instanceof smallDisk && 
          tower2.content[2] instanceof mediunDisk && 
          tower2.content[3] instanceof largeDisk && 
          tower2.content[4] instanceof extraLargeDisk) {
                return true;                
          } else if (tower3.content[0] instanceof Filled && 
            tower3.content[1] instanceof smallDisk && 
            tower3.content[2] instanceof mediunDisk && 
            tower3.content[3] instanceof largeDisk && 
            tower3.content[4] instanceof extraLargeDisk) {
                  return true; 
            } else {
                return false;
          }
}

function victory() {
      var titleText = document.createTextNode("!CONCLUÍDO!");
      var subtitleText = document.createTextNode("Movimentos utilizados: " + movements);
      var adviceText = document.createTextNode("tecle F5 para jogar de novo.");

      screen.removeChild(tower1.box);
      screen.removeChild(tower2.box);
      screen.removeChild(tower3.box);
      screen.removeChild(document.getElementById("counter"));

      var title = document.createElement("h1");
      title.style.color = "#ff0000"
      title.appendChild(titleText);

      var subtitle = document.createElement("h2");
      subtitle.appendChild(subtitleText);

      var advice = document.createElement("h3");
      advice.appendChild(adviceText);

      screen.appendChild(title);
      screen.appendChild(subtitle);
      screen.appendChild(advice)
}


function reStartEndMov() {
      if (startMov != undefined) {
            startMov.box.style.borderColor = "#000";
            startMov.elected = false;
      }
      if (endMov != undefined) {
            endMov.box.style.borderColor = "#000";
            endMov.elected = false;
      }

      startMov = undefined;
      endMov = undefined;

      tower1.elected = false;
      tower2.elected = false;
      tower3.elected = false;
}

function updateCounter() {
      var paragraph = document.getElementById("counter");
      paragraph.innerHTML = "Movimentos: " + movements;
}

function start() {                                         // (CriacaoTorres01.js)Iniciar as aplicacoes
      screen = document.getElementsByTagName("body") [0];
      screen.style.textAlign = "center";

      screen.appendChild(tower1.box);
      screen.appendChild(tower2.box);
      screen.appendChild(tower3.box);

      tower1.box.addEventListener("mouseover", over1, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 1
      tower2.box.addEventListener("mouseover", over2, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 2
      tower3.box.addEventListener("mouseover", over3, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 3

      tower1.box.addEventListener("mouseout", out1, false);    // (CriaçãoTorresExtras03.js) colocando a função mouse out para a torre 1
      tower2.box.addEventListener("mouseout", out2, false);    // (CriaçãoTorresExtras03.js) colocando a função mouse out para a torre 2
      tower3.box.addEventListener("mouseout", out3, false);    // (CriaçãoTorresExtras03.js) colocando a função mouse out para a torre 3

      tower1.box.addEventListener("click", click1, false);     // (CriaçãoTorresExtras03.js) inversão do quadro elegido
      tower2.box.addEventListener("click", click2, false);     // (CriaçãoTorresExtras03.js) inversão do quadro elegido
      tower3.box.addEventListener("click", click3, false);     // (CriaçãoTorresExtras03.js) inversão do quadro elegido

      var text = document.createTextNode("Movimentos: " + movements);
      var paragraph = document.createElement("p");
      paragraph.style.clear = "both";
      paragraph.style.paddingTop = "3em";
      paragraph.setAttribute("id", "counter");
      paragraph.appendChild(text);
      screen.appendChild(paragraph);
}

window.addEventListener("load", start, false);
