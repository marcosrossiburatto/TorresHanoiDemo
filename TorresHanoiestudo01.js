const towerHeight = "40px";                                  // Constante altura das fichas

var screen;                                                  // (CriacaoTorres01.js) Criação da Varavel que contem a apresentacao

//var movements = 0;

var selectedDisk;



function create01Div() {                                       // Criacao de uma divisão igual a tag <div> no HTML
      var box01 = document.createElement ("div");              // Criacao da var 'box' para criação das torres A, B e C
      return box01;
}

function fillContentesssss() {
      var contente = new Array();
            
      for (var i = 0; i < 5; i++) {
      contente[i] = new Filled01();                       // Chama funcao de criacao dos futuros discos, 05 unidades por torre, ainda tamanho maximo
      }

      return contente;
}
            
function Filled01hhhh() {                                          // Criacao dos tamanhos dos futuros discos
      this.box01 = create01Div();
      this.box01.style.width = "100%";                         // Sendo vazio, a largura é 100% da caixa
      this.box01.style.height = towerHeight;                   // A altura é definida pela var 'towerHeight'
}


function titleTextHanoi() {
      var titleTextHanoi01 = document.createTextNode("Bem Vindos a explicação das Torres de Hanói");
      var paragraphHanoi01 = document.createElement("h1");
      paragraphHanoi01.style.color = "#11607c";
      paragraphHanoi01.style.clear = "both";
      paragraphHanoi01.style.textAlign = "center";
      paragraphHanoi01.style.paddingTop = "0em";
      paragraphHanoi01.appendChild(titleTextHanoi01);
      screen.appendChild(paragraphHanoi01);
      
      var titleTextHanoi02 = document.createTextNode("As Torres de Hanói é um quebra-cabeça que consiste em uma base contendo três pinos, em um dos quais são dispostos alguns discos uns sobre os outros, em ordem crescente de diâmetro, de cima para baixo.");
      var paragraphHanoi02 = document.createElement("h3");
      paragraphHanoi02.style.color = "#11607c";
      paragraphHanoi02.style.clear = "both";
      paragraphHanoi02.style.paddingTop = "0em";
      paragraphHanoi02.style.marginLeft = "10%";
      paragraphHanoi02.style.marginRight = "10%";
      paragraphHanoi02.style.textAlign = "justify";
      paragraphHanoi02.style.textIndent = "5%";
      paragraphHanoi02.style.lineHeight = "1.3em";
      paragraphHanoi02.appendChild(titleTextHanoi02);
      screen.appendChild(paragraphHanoi02);

      var titleTextHanoi03 = document.createTextNode("O problema consiste em passar todos os discos de um pino para outro qualquer, usando um dos pinos como auxiliar, de maneira que um disco maior nunca fique em cima de outro menor em nenhuma situação. O número de discos pode variar sendo que o mais simples contém apenas três. ");
      var paragraphHanoi03 = document.createElement("h3");
      paragraphHanoi03.style.color = "#11607c";
      paragraphHanoi03.style.clear = "both";
      paragraphHanoi03.style.paddingTop = "0em";
      paragraphHanoi03.style.marginLeft = "10%";
      paragraphHanoi03.style.marginRight = "10%";
      paragraphHanoi03.style.textAlign = "justify";
      paragraphHanoi03.style.textIndent = "5%";
      paragraphHanoi03.style.lineHeight = "1.3em";
      paragraphHanoi03.appendChild(titleTextHanoi03);
      screen.appendChild(paragraphHanoi03);

      var titleTextHanoi04 = document.createTextNode("Somente pode-se mover um pino por vez. ");
      var paragraphHanoi04 = document.createElement("h3");
      paragraphHanoi04.style.color = "#11607c";
      paragraphHanoi04.style.clear = "both";
      paragraphHanoi04.style.paddingTop = "0em";
      paragraphHanoi04.style.marginLeft = "10%";
      paragraphHanoi04.style.marginRight = "10%";
      paragraphHanoi04.style.textAlign = "justify";
      paragraphHanoi04.style.textIndent = "5%";
      paragraphHanoi04.style.lineHeight = "1.3em";
      paragraphHanoi04.appendChild(titleTextHanoi04);
      screen.appendChild(paragraphHanoi04);

      var titleTextHanoi05 = document.createTextNode("Dependendo do número de pinos, existe um número mínimo de movimentos para realizar o quebra-cabeça. Este número é fornecido pela expressão matemática = '2**(número de Pinos) -1'. Ou seja:");
      var paragraphHanoi05 = document.createElement("h3");
      paragraphHanoi05.style.color = "#11607c";
      paragraphHanoi05.style.clear = "both";
      paragraphHanoi05.style.paddingTop = "0em";
      paragraphHanoi05.style.marginLeft = "10%";
      paragraphHanoi05.style.marginRight = "10%";
      paragraphHanoi05.style.textAlign = "justify";
      paragraphHanoi05.style.textIndent = "5%";
      paragraphHanoi05.style.lineHeight = "1.3em";
      paragraphHanoi05.appendChild(titleTextHanoi05);
      screen.appendChild(paragraphHanoi05);

      
      var titleTextHanoi06 = document.createTextNode("Somente pode-se mover um pino por vez.");
      var paragraphHanoi06 = document.createElement("h3");
      paragraphHanoi06.style.color = "#11607c";
      paragraphHanoi06.style.clear = "both";
      paragraphHanoi06.style.paddingTop = "0em";
      paragraphHanoi06.style.marginLeft = "10%";
      paragraphHanoi06.style.marginRight = "10%";
      paragraphHanoi06.style.textAlign = "justify";
      paragraphHanoi06.style.textIndent = "5%";
      paragraphHanoi06.style.lineHeight = "1.3em";
      paragraphHanoi06.appendChild(titleTextHanoi06);
      screen.appendChild(paragraphHanoi06);
  
     


      var titleTextHanoi0 = document.createTextNode("Somente pode-se mover um pino por vez. ");
      var paragraphHanoi0 = document.createElement("h3");
      paragraphHanoi0.style.color = "#11607c";
      paragraphHanoi0.style.clear = "both";
      paragraphHanoi0.style.paddingTop = "0em";
      paragraphHanoi0.style.marginLeft = "10%";
      paragraphHanoi0.style.marginRight = "10%";
      paragraphHanoi0.style.textAlign = "justify";
      paragraphHanoi0.style.textIndent = "5%";
      paragraphHanoi0.style.lineHeight = "1.3em";
     // paragraphHanoi0.style.float = "left";
      paragraphHanoi0.appendChild(titleTextHanoi0);
      screen.appendChild(paragraphHanoi0);
     
}

function marcos() {
      this.box01 = create01Div();
      this.box01.style.width = "28%";
      this.box01.style.height = "100px";
      this.box01.style.marginTop = "3%";    
      this.box01.style.marginLeft = "auto";
      this.box01.style.marginRight = "auto";    
      this.box01.style.borderWidth = "2%";
      this.box01.style.border = "solid #11607c";
      this.box01.style.borderRadius = "10%"
      screen.appendChild(box01);
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
      screen.style.textAlign = "center";
      marcos();
      titleTextHanoi();



      screen.appendChild(tower1.box);
      screen.appendChild(tower2.box);
      screen.appendChild(tower3.box);

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