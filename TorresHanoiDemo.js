const towerHeight = "40px";                                  // Constante altura das fichas

var screen;                                                  // (CriacaoTorres01.js) Criação da Varavel que contem a apresentacao

//var movements = 0;

var tower1 = new Tower(true);                               // Criação da torre 1 + Colocado true se é a posição original do inicio  
var tower2 = new Tower(false);                              // Criação da torre 2 + Colocado false se não é a posição original do inicio 
var tower3 = new Tower(false);                              // Criação da torre 3 + Colocado false se não é a posição original do inicio 

//var selectedDisk;
//var startMov;
//var endMov;

function createDiv() {                                       // Criacao de uma divisão igual a tag <div> no HTML
      var box = document.createElement ("div");              // Criacao da var 'box' para criação das torres A, B e C
      return box;
}

function fillContent() {                                     // Criacao da var Array 'content' com a disposição para cada disco nas torres
      var content = new Array();

      for (var i = 0; i < 5; i++) {
            content[i] = new Filled();                       // Chama funcao de criacao dos futuros discos, 05 unidades por torre, ainda tamanho maximo
      }

      return content;
}

function fillDisks() {                                       // Var Array 'content' com a colocacao dos futuros discos iniciais, colocados na ordem do menor para o maior
      var content = new Array();

      content[0] = new Filled();                             // Espaço sem disco
      content[1] = new smallDisk();                          // Define o disco menor para o espaco
      content[2] = new mediunDisk();                         // Define o disco medio para o espaco
      content[3] = new largeDisk();                          // Define o disco grande para o espaco
      content[4] = new extraLargeDisk();                     // Define o disco extra grande para o espaco

      return content;
}

function Filled() {                                          // Criacao dos tamanhos dos futuros discos
      this.box = createDiv();
      this.box.style.width = "100%";                         // Sendo vazio, a largura é 100% da caixa
      this.box.style.height = towerHeight;                   // A altura é definida pela var 'towerHeight'
}

function smallDisk() {                                       // Criação Disco 1 - menor
      this.box = createDiv();
      this.box.style.width = "10%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#0088CC";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 0;
}

function mediunDisk() {                                      // Criação Disco 2 - medio
      this.box = createDiv();
      this.box.style.width = "30%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#979797";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 1;
}

function largeDisk() {                                       // Criação Disco 3 - large
      this.box = createDiv();
      this.box.style.width = "50%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#666666";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 2;
}

function extraLargeDisk() {                                  // Criação Disco 4 - extra large 
      this.box = createDiv();
      this.box.style.width = "70%";
      this.box.style.height = towerHeight;
      this.box.style.backgroundColor = "#000000";
      this.box.style.marginLeft = "auto";
      this.box.style.marginRight = "auto";
      this.box.style.borderRadius = "20%"
      this.value = 3;
}

function caixaTextoDestaque() {
      this.box01 = document.createElement ("div");
      this.box01.style.width = "50%";
      this.box01.style.height = "100%";
      this.box01.style.marginTop = "1%";
      this.box01.style.marginBottom = "0%";     
      this.box01.style.marginLeft = "auto";
      this.box01.style.marginRight = "auto";    
      this.box01.style.border = "solid #ff0000";
      this.box01.style.borderWidth = "6px";
      this.box01.style.borderRadius = "10%"

      this.box01.style.fontSize = "2.5em";
      this.box01.style.fontWeight = "800";
      this.box01.style.clear = "both";
      this.box01.style.textAlign = "center";
      this.box01.style.verticalAlign = "Middle";   
      this.box01.style.paddingTop = "10px";
      this.box01.style.paddingBottom = "10px";
      this.box01.style.color = "#11607c";
}

function floatcaixaTextoDestaque() {
      this.box01 = document.createElement ("div");
      this.box01 = document.createElement ("float");
      this.box01.style.width = "0%";
      this.box01.style.height = "100%";
      this.box01.style.marginTop = "2%";
      this.box01.style.marginBottom = "5%";     
      this.box01.style.marginLeft = "3%";
      this.box01.style.paddingLeft = "1%";
      this.box01.style.paddingRight = "1%";
      this.box01.style.border = "double #0000ff";
      this.box01.style.borderWidth = "6px";
      this.box01.style.borderRadius = "10%"

      this.box01.style.fontSize = "3em";
      this.box01.style.fontWeight = "800";
      this.box01.style.clear = "both";
      this.box01.style.textAlign = "center";
      this.box01.style.verticalAlign = "Middle";   
      this.box01.style.paddingTop = "10px";
      this.box01.style.paddingBottom = "10px";
      this.box01.style.backgroundColor = "#0000ff";
      this.box01.style.color = "#FFF";
}

function textoExplicativo() {
      this.paragraphHanoi = document.createElement("p");
      this.paragraphHanoi.style.color = "#000";
      this.paragraphHanoi.style.clear = "both";
      this.paragraphHanoi.style.paddingTop = "0em";
      this.paragraphHanoi.style.paddingBottom = "0em";
      this.paragraphHanoi.style.marginLeft = "10%";
      this.paragraphHanoi.style.marginRight = "10%";
      this.paragraphHanoi.style.marginTop = "1%";
      this.paragraphHanoi.style.marginBottom = "1%";
      this.paragraphHanoi.style.textAlign = "justify";
      this.paragraphHanoi.style.textIndent = "5%";
      this.paragraphHanoi.style.lineHeight = "1.3em";
      this.paragraphHanoi.style.fontSize = "1.8em";
}

function titleTextHanoi() {

      caixaTextoDestaque();
      this.box01.textContent = "Bem Vindos a explicação das Torres de Hanói";
      screen.appendChild(box01);

      textoExplicativo();
      this.paragraphHanoi.style.paddingTop = "0.5em";
      this.paragraphHanoi.textContent = "As Torres de Hanói é um quebra-cabeça que consiste em uma base contendo três pinos, em um dos quais são dispostos alguns discos uns sobre os outros, em ordem crescente de diâmetro, de cima para baixo.";
      screen.appendChild(paragraphHanoi);

      textoExplicativo();
      this.paragraphHanoi.textContent = "O problema consiste em passar todos os discos de um pino para outro qualquer, usando um dos pinos como auxiliar, de maneira que um disco maior nunca fique em cima de outro menor em nenhuma situação. O número de discos pode variar sendo que o mais simples contém apenas três.";
       screen.appendChild(paragraphHanoi);

      textoExplicativo();
      this.paragraphHanoi.textContent = "Somente pode-se mover um disco por vez. Dependendo do número de discos, existe um número mínimo de movimentos para realizar o quebra-cabeça. Este número é fornecido pela expressão matemática = '2**(número de Pinos) -1'. Por exemplo:";
      screen.appendChild(paragraphHanoi);

      textoExplicativo();
      this.paragraphHanoi.textContent = "Se o número de Discos for igual a 3, temos 2**3 - 1 = 2 x 2 x 2 - 1 = 7 movimentos;";
      screen.appendChild(paragraphHanoi);

      textoExplicativo();
      this.paragraphHanoi.textContent = "Se o número de Discos for igual a 4, temos 2**4 - 1 = 2 x 2 x 2 x 2 - 1 = 15 movimentos;";
      screen.appendChild(paragraphHanoi);

      textoExplicativo();
      this.paragraphHanoi.textContent = "Se o número de Discos for igual a 5, temos 2**5 - 1 = 2 x 2 x 2 x 2 x 2 - 1 = 31 movimentos.";
      screen.appendChild(paragraphHanoi);

      textoExplicativo();
      this.paragraphHanoi.textContent = "Devido a limitação do tamanho das telas dos computadores, limitaremos o número de discos em 10 unidades. Escolha, a seguir, a demonstração da solução do quebra-cabeça com o número de discos desejados, dentro da limitação."
      this.paragraphHanoi.style.marginBottom = "4%";
      screen.appendChild(paragraphHanoi);

      floatcaixaTextoDestaque();
      this.box01.style.marginLeft = "0%";
      this.box01.textContent = "3";

      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #075025";
      this.box01.style.backgroundColor = "#075025";
      this.box01.textContent = "4";
      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #3D0750";
      this.box01.style.backgroundColor = "#3D0750";
      this.box01.textContent = "5";
      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #B80F33";
      this.box01.style.backgroundColor = "#B80F33";
       this.box01.textContent = "6";
      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #ff0ff0";
      this.box01.style.backgroundColor = "#ff0ff0";
      this.box01.textContent = "7";
      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #ffff00";
      this.box01.style.backgroundColor = "#ffff00";
      this.box01.textContent = "8";
      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #0F17B8";
      this.box01.style.backgroundColor = "#0F17B8";
      this.box01.textContent = "9";
      screen.appendChild(box01);

      floatcaixaTextoDestaque();
      this.box01.style.border = "double #B8820F";
      this.box01.style.backgroundColor = "#B8820F";
      this.box01.textContent = "10";
      screen.appendChild(box01);

      textoExplicativo();
      this.paragraphHanoi.textContent = ""
      this.paragraphHanoi.style.marginTop = "4%";
      screen.appendChild(paragraphHanoi);
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


/*function selectStartEndMov(tower) {
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
}*/



function start() {                                           // Iniciar as aplicacoes
      screen = document.getElementsByTagName("body") [0];
      screen.style.textAlign = "center";;
      titleTextHanoi();



    //  screen.appendChild(tower1.box);
   //   screen.appendChild(tower2.box);
   //   screen.appendChild(tower3.box);

     // tower1.box.style.backgroundColor = "#ADFAFF";

 /*     tower1.box.addEventListener("mouseover", over1, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 1
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
      screen.appendChild(paragraph);*/
}

window.addEventListener("load", start, false);




/*function over1() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
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
}*/