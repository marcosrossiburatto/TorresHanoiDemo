const mbObj = window.matchMedia("(min-width: 725px)");
mbObj.addEventListener("change", sizeScreenEquipment, false);
let sizeScreenEquip;

function sizeScreenEquipment(x) {                // verificando o tamanho da tela
      if (x.matches) {
            sizeScreenEquip = true;
      } else {
            sizeScreenEquip = false;
      }
}

function titleTextHanoi() {                      // Esta parte descreve as Torres de Hanoi
     
      var ethText = [                                      // Montando uma Array para aprender (não necessario).
            'Bem Vindos a explicação das Torres de Hanói', 
            'As Torres de Hanói é um quebra-cabeça que consiste em uma base contendo três pinos, em um dos quais são dispostos alguns discos uns sobre os outros, em ordem crescente de diâmetro, de cima para baixo.', 
            'O problema consiste em passar todos os discos de um pino para outro qualquer, usando um dos pinos como auxiliar, de maneira que um disco maior nunca fique em cima de outro menor em nenhuma situação. O número de discos pode variar sendo que o mais simples contém apenas três.', 
            'Somente pode-se mover um disco por vez. Dependendo do número de discos, existe um número mínimo de movimentos para realizar o quebra-cabeça. Este número é fornecido pela expressão matemática = 2**(número de discos) -1. Por exemplo:', 
            'Se o número de Discos for igual a 3, temos 2**3 - 1 = 2 x 2 x 2 - 1 = 7 movimentos', 
            'Se o número de Discos for igual a 4, temos 2**4 - 1 = 2 x 2 x 2 x 2 - 1 = 15 movimentos', 
            'Se o número de Discos for igual a 5, temos 2**5 - 1 = 2 x 2 x 2 x 2 x 2 - 1 = 31 movimentos.', 
            'Devido a limitação do tamanho das telas dos computadores, limitaremos o número de discos em 10 unidades. Escolha, a seguir, a demonstração da solução do quebra-cabeça com o número de discos desejados, dentro da limitação.'
      ];  
     
      eth = document.createElement ("div");
      eth.style.height = "100%";
      eth.style.marginLeft = "auto";
      eth.style.marginRight = "auto";    
      eth.style.border = "solid #ff0000";
      eth.style.borderWidth = "6px";
      eth.style.borderRadius = "10%"
      eth.style.textAlign = "center";
      eth.style.verticalAlign = "Middle";   
      eth.style.paddingTop = "10px";
      eth.style.paddingBottom = "10px";
      eth.style.color = "#11607c";

      if (sizeScreenEquip) {
            eth.style.width = "60%";
            eth.style.marginTop = "30px";
            eth.style.marginBottom = "0%";  
            eth.style.fontSize = "2.5vw";
            eth.style.fontWeight = "800";

      } else {

            eth.style.clear = "both";
            eth.style.width = "90%";
            eth.style.marginTop = "5%";
            eth.style.marginBottom = "4%";    
            eth.style.fontSize = "4vh";
            eth.style.fontWeight = "600";
      }

      eth.textContent = ethText[0]
      screen.appendChild(eth);

      for (var i = 0; i < 8; i++) {

            eth = document.createElement("div");
            eth.style.color = "#000";
            eth.style.clear = "both";
            eth.style.textAlign = "justify";
            eth.style.paddingTop = "0em";
            eth.style.paddingBottom = "0em";
            eth.style.marginBottom = "1%";
      
            if (sizeScreenEquip) {
                  eth.style.textIndent = "5%";
                  eth.style.marginLeft = "10%";
                  eth.style.marginRight = "10%";
                  eth.style.marginTop = "0%";
                  eth.style.marginBottom = "1%";
                  eth.style.lineHeight = "4.8vh";
                  eth.style.fontSize = "1.5vw";
            } else {
                  eth.style.textIndent = "10%";
                  eth.style.marginLeft = "5%";
                  eth.style.marginRight = "5%";
                  eth.style.marginBottom = "3vh";
                  eth.style.lineHeight = "6.3vh";
                  eth.style.fontSize = "3.5vh";
            }

            if (( i === 0 )) {
                  if (sizeScreenEquip) {
                        eth.style.paddingTop = "5vh";
                  }
                  eth.textContent = ethText[1]

            } else if (( i === 1 )) {
                  eth.textContent = ethText[2]

            } else if (( i === 2 )) {
                  eth.textContent = ethText[3]

            } else if (( i === 3 )) {
                  eth.textContent = ethText[4]

            } else if (( i === 4 )) {
                 eth.textContent = ethText[5]

            } else if (( i === 5 )) {
                  eth.textContent = ethText[6]

            } else if (( i === 6 )) {

                  if (sizeScreenEquip) {
                        eth.style.marginBottom = "3vh";
                  } else {
                        eth.style.marginBottom = "0vh";
                  }
                  eth.textContent = ethText[7]
            }

            screen.appendChild(eth);
      }
}

function sizeScreenEquipFalse() {                // fornece espaço entre os blocos e quebra o comando float para tela mobile
      if (sizeScreenEquip === false) { 
            boxspace = document.createElement ("div");
            boxspace.style.clear = "both";
            boxspace.style.paddingTop = "10px";
            boxspace.style.paddingBottom = "10px";
            screen.appendChild(boxspace);
      }
}

function sizeScreenEquipTrue() {                 // fornece espaço entre os blocos e quebra o comando float para tela computador
      if (sizeScreenEquip) { 
            eth = document.createElement ("div");
            eth.style.clear = "both";
            eth.style.paddingTop = "15px";
            eth.style.paddingBottom = "15px";
            screen.appendChild(eth);
      }
}

function numberofgroups() {

      let numberOfDisks = 15;
      let numberNeedRows = 0;
      let numberNeedRowsOriginal = 0;
      let numberBoxesRow = 0;
      let numberBoxesRowOriginal = 0;
      let ArraysSum = 0;
      let boxesPerLineArray = new Array;
      let restNumberBoxesRow = 0;
      let boxNumber = 2;
      let colorD = 0;

      if (numberOfDisks % 10 === 0) {
            numberNeedRows = parseInt(numberOfDisks / 10);
      } else {
            numberNeedRows = parseInt(numberOfDisks / 10) + 1;
      };
      numberNeedRowsOriginal = numberNeedRows;

      const points = new Array(20);
      
      const cplArray = [

            linesArray = {
                  boxesPerLineArray: 0,
                  boxesPerLineArrayLine: 0,
                  boxesPerLineArrayColumn: 0,
            }
      
      ];

      
      for (var cpl = 0; cpl < numberNeedRows; cpl++) {
            boxesPerLineArray[cpl] = 0;
      };

      numberBoxesRow = numberOfDisks / numberNeedRows;
      numberBoxesRowOriginal = numberBoxesRow;
      restNumberBoxesRow = (numberBoxesRow - parseInt(numberBoxesRow));

      if (restNumberBoxesRow === 0) {

            for (var i = 1; i <= boxesPerLineArray.length; i++) {

                  if (boxesPerLineArray[boxesPerLineArray.length - i] === 0) {
                        boxesPerLineArray[boxesPerLineArray.length - i] = parseInt(numberBoxesRowOriginal);
                  };
            };

      } else {

            while (restNumberBoxesRow !== 0) {

                  for (var i = 1; i <= boxesPerLineArray.length; i++) {

                        if (boxesPerLineArray[boxesPerLineArray.length - i] === 0) {
                              boxesPerLineArray[boxesPerLineArray.length - i] = parseInt(numberBoxesRowOriginal) + 1;
                              numberNeedRows = numberNeedRowsOriginal - i;
                              i = boxesPerLineArray.length + 1;

                              ArraysSum = 0;
                              for (let index = 0; index < boxesPerLineArray.length; index++) {
                                    ArraysSum += boxesPerLineArray[index];
                              };

                              numberBoxesRow = ((numberOfDisks - ArraysSum) / numberNeedRows);
                              restNumberBoxesRow  =  (numberBoxesRow - parseInt(numberBoxesRow));
                        };
                  };
            };

            for (var i = 1; i <= boxesPerLineArray.length; i++) {

                  if (boxesPerLineArray[boxesPerLineArray.length - i] === 0) {
                        boxesPerLineArray[boxesPerLineArray.length - i] = parseInt(numberBoxesRowOriginal);
                  };
            };
      };   

      for (var nol = 0; nol <= (boxesPerLineArray.length); nol++) {

            if (boxesPerLineArray[nol] === 1) {

                  colorDisks1();

            } else if (boxesPerLineArray[nol] === 2) {

                  colorDisks1();
                  colorDisks2();

            } else if (boxesPerLineArray[nol] === 3) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();

            } else if (boxesPerLineArray[nol] === 4) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();

            } else if (boxesPerLineArray[nol] === 5) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();
                  colorDisks5();

            } else if (boxesPerLineArray[nol] === 6) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();
                  colorDisks5();
                  colorDisks6();

            } else if (boxesPerLineArray[nol] === 7) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();
                  colorDisks5();
                  colorDisks6();
                  colorDisks7();

            } else if (boxesPerLineArray[nol] === 8) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();
                  colorDisks5();
                  colorDisks6();
                  colorDisks7();
                  colorDisks8();

            } else if (boxesPerLineArray[nol] === 9) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();
                  colorDisks5();
                  colorDisks6();
                  colorDisks7();
                  colorDisks8();
                  colorDisks9();

            } else if (boxesPerLineArray[nol] === 10) {

                  colorDisks1();
                  colorDisks2();
                  colorDisks3();
                  colorDisks4();
                  colorDisks5();
                  colorDisks6();
                  colorDisks7();
                  colorDisks8();
                  colorDisks9();
                  colorDisks10();

            };
            
            spaceNol = document.createElement ("div");
            spaceNol.style.clear = "both";
            spaceNol.style.paddingTop = "15px";
            spaceNol.style.paddingBottom = "15px";
            screen.appendChild(spaceNol);
      };

      function nodisks() {
            nod = document.createElement ("div");
            nod.style.borderWidth = "6px";
            nod.style.borderRadius = "20%";
            nod.style.fontWeight = "800";
            nod.style.backgroundColor = "#fff"; 
            nod.style.float = "left";
            nod.style.minWidth = "3.4%";
            nod.style.maxWidth = "3.4%";
            nod.style.minHeight = "30px";
            nod.style.maxHeight = "30px";
            nod.style.fontSize = "1.75vw";
            boxNumber = boxNumber + 1;
            nod.textContent = boxNumber;
            if (boxNumber < 10) {
                  nod.style.padding = "6px 0 12px 0";
                  nod.style.fontSize = "210%";
            } else if (boxNumber >= 10 && boxNumber < 100) {
                  nod.style.padding = "6px 0 13px 0";
                  nod.style.fontSize = "200%";
            } else if (boxNumber >= 100 && boxNumber < 1000) {
                  nod.style.padding = "7.5px 0 12px 0";
                  nod.style.fontSize = "180%";
            } else if (boxNumber >= 1000 && boxNumber < 10000) {
                  nod.style.padding = "9px 0 10px 0";
                  nod.style.fontSize = "160%";
            } else if (boxNumber >= 10000 && boxNumber < 100000) {
                  nod.style.padding = "11px 0 8px 0";
                  nod.style.fontSize = "140%";
            } else if (boxNumber >= 100000 && boxNumber < 1000000) {
                  nod.style.padding = "9px 0 10px 0";
                  nod.style.fontSize = "120%";
            } else {
                  nod.style.padding = "11px 0 12px 0";;
                  nod.style.fontSize = "20%";
            };

            if (boxesPerLineArray[nol] === 1) {
                  nod.style.margin = "3px 48% 3px 48%";
            } else if (boxesPerLineArray[nol] === 2) {
                  nod.style.margin = "3px -39.1% 3px 43.6%";
            } else if (boxesPerLineArray[nol] === 3) {
                  nod.style.margin = "3px -34.6% 3px 39.1%";
            } else if (boxesPerLineArray[nol] === 4) {
                  nod.style.margin = "3px -30.7% 3px 35.2%";
            } else if (boxesPerLineArray[nol] === 5) {
                  nod.style.margin = "3px -26.2% 3px 30.7%";
            } else if (boxesPerLineArray[nol] === 6) {
                  nod.style.margin = "3px -22.3% 3px 26.8%";
            } else if (boxesPerLineArray[nol] === 7) {
                  nod.style.margin = "3px -18.1% 3px 22.6%";
            } else if (boxesPerLineArray[nol] === 8) {
                  nod.style.margin = "3px -13.9% 3px 18.4%";
            } else if (boxesPerLineArray[nol] === 9) {
                  nod.style.margin = "3px -9.7% 3px 14.2%";
            } else if (boxesPerLineArray[nol] === 10) {
                  nod.style.margin = "3px -5.4% 3px 10%";
            };

      };

      function colorDisks1() {
            colorD = 1;
            nodisks();
            nod.style.border = "solid #0000ff";
            nod.style.color = "#0000ff";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks2() {
            colorD = 2;
            nodisks();
            nod.style.border = "solid #075025";
            nod.style.color = "#075025";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks3() {
            colorD = 3;
            nodisks();
            nod.style.border = "solid #3D0750";
            nod.style.color = "#3D0750";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks4() {
            colorD = 4;
            nodisks();
            nod.style.border = "solid #B80F33";
            nod.style.color = "#B80F33";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks5() {
            colorD = 5;
            nodisks();
            nod.style.border = "solid #ff0ff0";
            nod.style.color = "#ff0ff0";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks6() {
            colorD = 6;
            nodisks();
            nod.style.border = "solid #DDE02D";
            nod.style.color = "#DDE02D";
            window["nod" + boxNumber] = nod;
         //   element.id = boxNumber;
            screen.appendChild(window["nod" + boxNumber]);
      };

      function colorDisks7() {
            colorD = 7;
            nodisks();
            nod.style.border = "solid #0F17B8";
            nod.style.color = "#0F17B8";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks8() {
            colorD = 8;
            nodisks();
            nod.style.border = "solid #B8820F";
            nod.style.color = "#B8820F";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks9() {
            colorD = 9;
            nodisks();
            nod.style.border = "solid #6E5B7E";
            nod.style.color = "#6E5B7E";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);

      };

      function colorDisks10() {
            colorD = 10;
            nodisks();
            nod.style.border = "solid #FFC300";
            nod.style.color = "#FFC300";
            window["nod" + boxNumber] = nod;
            screen.appendChild(window["nod" + boxNumber]);
      };



      /*function over() {

          //  window["nod" + boxNumber].addEventListener("mouseover", over, false);


              //    text = window["nod" + boxNumber]
                  alert(boxNumber)
                  window["nod" + boxNumber].style.color = "#fff";
                  window["nod" + boxNumber].style.backgroundColor = "#ADFAFF"

                 /* for (i = 0; i < boxesPerLineArray.length; i++) {

                        if (boxesPerLineArray[i] === 10) {
                              window["nod" + boxNumberText].style.color = "#fff";
                              window["nod" + boxNumber].style.backgroundColor = "#FFC300";
                        };
                 / };
      };*/

};

/*function over (tower) {
      tower.box.style.backgroundColor = "#ADFAFF"

           // boxesPerLineArray[boxesPerLineArray.length - i


            for (boxN = 1; boxN <= boxesPerLineArray.length; boxN++) {
                  alert(boxN);
                  alert(colorD);
                  alert(boxNumber);


                  for (i = 1; i <= boxesPerLineArray[0]; i++) {

                  }


                  if (colorD === 1 && boxNumber === 3) {
                        alert("ok");
                        window["nod" + boxNumber].style.color = "#fff";
                        window["nod" + boxNumber].style.backgroundColor = "#0000ff";

                  } /*else if (colorD === 2) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#075025";

                  } else if (colorD === 3) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#3D0750";
      
                  } else if (colorD === 4) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#B80F33";

                  } else if (colorD === 5) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#ff0ff0";

                  } else if (colorD === 6) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#DDE02D";

                  } else if (colorD === 7) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#0F17B8";

                  } else if (colorD === 8) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#B8820F";

                  } else if (colorD === 9) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#6E5B7E";

                  } else if (colorD === 10) {
                        window["nod" + boxN].style.color = "#fff";
                        window["nod" + boxN].style.backgroundColor = "#FFC300";
                  }
            
      */


function groupMouseOver () {
      nod3.addEventListener("mouseover", over3, false);
      nod4.addEventListener("mouseover", over4, false);
      nod5.addEventListener("mouseover", over5, false); 
      nod6.addEventListener("mouseover", over6, false);
      nod7.addEventListener("mouseover", over7, false);
      nod8.addEventListener("mouseover", over8, false); 
      nod9.addEventListener("mouseover", over9, false);
      nod10.addEventListener("mouseover", over10, false);
      nod11.addEventListener("mouseover", over11, false);
      nod12.addEventListener("mouseover", over12, false);

      for (qw = 13; qw < 18; qw++) {
          //  if (qw===15) {alert("qw")};
           window["nod" + qw].addEventListener("mouseover", overaa, false);
          



            function overaa() {
                  let num = document.nameItem;
             alert(num)
               for (it = 3; it <= 17; it++) {
                  alert(it);

            //      let rwrw = window["nod" + it];
              //    alert(rwrw)


                  if (num === nod15) {
                        alert("positivoooooooooooooooooooooooooooooo");
                  } else {
                        alert("negativo");            
                  }


               }
            }
      
      
               
               
          /*     let text;
               let yt
               if (document.hasFocus()) {
                  yt = document.getElementById();
                                   //   text = "The document has focus.";
         //        yt = document.hasFocus.boxNumber
               } else {
                 text = "The document does NOT have focus.";
               }
         //      alert(text)
         //      alert(yt)
        //       yt.style.color = "#00f323"
              // window["nod" + qw].style.backgroundColor = "#ff0000"
            //  mnmn.style.color = "#00f323"

            }*/

         
      }
}
              //    alert(overaa)
            //  alert(mouseover)
              //    alert("aa")
             /*     alert(joined)
                  if ("nod13" === true) {
                        alert(13);
                        nod13.c
                  }
                  function over14() {
                        alert(14)
                        window["nod" + i].style.backgroundColor = "#ADFA00"
                  }
                  function over15() {
                        window["nod" + i].style.backgroundColor = "#11607c"
                  }
                  function over16() {
                        window["nod" + i].style.backgroundColor = "#ffADFA"
                  }
                  function over17() {
                        window["nod" + i].style.backgroundColor = "#00ADFA"
                  }*/
            



function over3() {
      alert("boxNumber");
      nod3.style.color = "#fff";
      nod3.style.backgroundColor = "#0000ff";
}
function over4() {
      alert("boxNumber");
      nod4.style.color = "#fff";
      nod4.style.backgroundColor = "#075025";
}
function over5() {
      alert("boxNumber");
      nod5.style.color = "#fff";
      nod5.style.backgroundColor = "#3D0750";
}
function over6() {
      alert("boxNumber");
      nod6.style.color = "#fff";
      nod6.style.backgroundColor = "#B80F33";
}
function over7() {
      alert("boxNumber");
      nod7.style.color = "#fff";
      nod7.style.backgroundColor = "#ff0ff0";
}
function over8() {
      alert("boxNumber");
      nod8.style.color = "#fff";
      nod8.style.backgroundColor = "#DDE02D";
}
function over9() {
      alert("boxNumber");
      nod9.style.color = "#fff";
      nod9.style.backgroundColor = "#0F17B8";
}
function over10() {
      alert("boxNumber");
      nod10.style.color = "#fff";
      nod10.style.backgroundColor = "#B8820F";
}
function over11() {
      alert("boxNumber");
      nod11.style.color = "#fff";
      nod11.style.backgroundColor = "#6E5B7E";
}
function over12() {
      alert("boxNumber");
      nod12.style.color = "#fff";
      nod12.style.backgroundColor = "#FFC300";
}


function groupMouseOut() {
      nod3.addEventListener("mouseout", out3, false);
      nod4.addEventListener("mouseout", out4, false);
      nod5.addEventListener("mouseout", out5, false); 
      nod6.addEventListener("mouseout", out6, false);
      nod7.addEventListener("mouseout", out7, false);
      nod8.addEventListener("mouseout", out8, false); 
      nod9.addEventListener("mouseout", out9, false);
      nod10.addEventListener("mouseout", out10, false);
      nod11.addEventListener("mouseout", out11, false);
      nod12.addEventListener("mouseout", out12, false);
}

function out3() {
      nod3.style.color = "#0000ff";
      nod3.style.backgroundColor = "#fff";
}
function out4() {
      nod4.style.color = "#075025";
      nod4.style.backgroundColor = "#fff";
}
function out5() {
      nod5.style.color = "#3D0750";
      nod5.style.backgroundColor = "#fff";
}
function out6() {
      nod6.style.color = "#B80F33";
      nod6.style.backgroundColor = "#fff";
}
function out7() {
      nod7.style.color = "#ff0ff0";
      nod7.style.backgroundColor = "#fff";
}
function out8() {
      nod8.style.color = "#DDE02D";
      nod8.style.backgroundColor = "#fff";
}
function out9() {
      nod9.style.color = "#0F17B8";
      nod9.style.backgroundColor = "#fff";
}
function out10() {
      nod10.style.color = "#B8820F";
      nod10.style.backgroundColor = "#fff";
}
function out11() {
      nod11.style.color = "#B8820F";
      nod11.style.backgroundColor = "#fff";
}
function out12() {
      nod12.style.color = "#B8820F";
      nod12.style.backgroundColor = "#fff";
}

function groupClick () {
      nod3.addEventListener("click", click3, false);
      nod4.addEventListener("click", click4, false);
      nod5.addEventListener("click", click5, false);
      nod6.addEventListener("click", click6, false);
      nod7.addEventListener("click", click7, false);
      nod8.addEventListener("click", click8, false);
      nod9.addEventListener("click", click9, false);
      nod10.addEventListener("click", click10, false);
      nod11.addEventListener("click", click11, false);
      nod12.addEventListener("click", click12, false);
}

function click3() {
      nod3.elected = !nod3.elected;
}
function click4() {
      nod4.elected = !nod4.elected;
}
function click5() {
      nod5.elected = !nod5.elected;
}
function click6() {
      nod6.elected = !nod6.elected;
}
function click7() {
      nod7.elected = !nod7.elected;
}
function click8() {
      nod8.elected = !nod8.elected;
}
function click9() {
      nod9.elected = !nod9.elected;
}
function click10() {
      nod10.elected = !nod10.elected;
}
function click11() {
      nod11.elected = !nod11.elected;
}
function click12() {
      nod12.elected = !nod12.elected;
}


function start() {
      screen = document.getElementsByTagName("body") [0];
      screen.style.textAlign = "center";
      sizeScreenEquipment(mbObj);
      titleTextHanoi();
      numberofgroups();

      groupMouseOver();
//      groupMouseOut();
//      groupClick();

      
      var text = document.createTextNode("at");
      var paragraph = document.createElement("p");
      paragraph.style.clear = "both";
      paragraph.style.paddingTop = "3em";
      paragraph.appendChild(text);
      screen.appendChild(paragraph);

}

      window.addEventListener("load", start, false);







/*const towerHeight = "40px";                                  // Constante altura das fichas

var screen;                                                  // (CriacaoTorres01.js) Criação da Varavel que contem a apresentacao

//var movements = 0;

var tower1 = new Tower(true);                               // Criação da torre 1 + Colocado true se é a posição original do inicio  
var tower2 = new Tower(false);                              // Criação da torre 2 + Colocado false se não é a posição original do inicio 
var tower3 = new Tower(false);                              // Criação da torre 3 + Colocado false se não é a posição original do inicio 

var selectedDisk;
var startMov;
var endMov;

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

}*/


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
