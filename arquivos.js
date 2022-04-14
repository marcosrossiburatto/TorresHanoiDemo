/*function sizeScreenEquipTrue() {
      if (sizeScreenEquip) { 
            box01 = document.createElement ("div");
            box01.style.clear = "both";
         //   box01.style.marginTop = "40px";
        //    box01.style.marginBottom = "40px";
            screen.appendChild(box01);
      }
}*/


/*function diskNumberBox() {
      
    for (var i = 3; i < 11; i++) {
          this.box01 = document.createElement ("div");
          this.box01 = document.createElement ("float");
          this.box01.style.clear = "both";
          this.box01.style.borderWidth = "6px";
          this.box01.style.borderRadius = "20%"
          this.box01.style.fontWeight = "800";
          this.box01.style.textAlign = "center";
          this.box01.style.verticalAlign = "Middle"; 
          this.box01.style.backgroundColor = "#FFF";
          this.box01.textContent = i;


                if (sizeScreenEquip) { 
                      this.box01.style.marginLeft = "4%";
                      this.box01.style.fontSize = "1.75vw";
                      this.box01.style.paddingTop = "10px";
                      this.box01.style.paddingBottom = "10px";
                      this.box01.style.paddingLeft = "1.3%";
                      this.box01.style.paddingRight = "1.3%";
                } else {
                      this.box01.style.marginLeft = "10%";
                      this.box01.style.fontSize = "7vw";
                      this.box01.style.paddingLeft = "4%";
                      this.box01.style.paddingRight = "4%";
                      this.box01.style.paddingTop = "6px";
                      this.box01.style.paddingBottom = "6px";
                }

          if (( i === 3 )) {
                if (sizeScreenEquip) { 
                      this.box01.style.marginLeft = "10%";
                } else {
                      this.box01.style.marginLeft = "0%";  
                }
                this.box01.style.border = "solid #0000ff";
                this.box01.style.Color = "#0000ff";
                var diskNumberBox3 = box01;
                screen.appendChild(box01);

          } else if (( i === 4 )) {
                this.box01.style.border = "solid #075025";
                this.box01.style.backgroundColor = "#075025";
                var diskNumberBox4 = this.box01;
                screen.appendChild(box01);

          } else if (( i === 5 )) {
                this.box01.style.border = "solid #3D0750";
                this.box01.style.backgroundColor = "#3D0750";
                var diskNumberBox5 = this.box01;
                screen.appendChild(box01);
          
          } else if (( i === 6 )) {
                this.box01.style.border = "solid #B80F33";
               // this.box01.style.backgroundColor = "#B80F33";
                var diskNumberBox6 = this.box01;
                screen.appendChild(box01);

                sizeScreenEquipFalse()
          
          } else if (( i === 7 )) {
                if (sizeScreenEquip === false) {
                      this.box01.style.marginLeft = "9.5%";
                }
                this.box01.style.border = "solid #ff0ff0";
               // this.box01.style.backgroundColor = "#ff0ff0";
                var diskNumberBox7 = this.box01;
                screen.appendChild(box01);

          } else if (( i === 8 )) {
                this.box01.style.border = "solid #DDE02D";
                //this.box01.style.backgroundColor = "#DDE02D";
                var diskNumberBox8 = this.box01;
                screen.appendChild(box01);

          } else if (( i === 9 )) {
                this.box01.style.border = "solid #0F17B8";
               // this.box01.style.backgroundColor = "#0F17B8";
                var diskNumberBox9 = this.box01;
                screen.appendChild(box01);

          } else if (( i === 10 )) {
                this.box01.style.marginRight = "10%";
                this.box01.style.border = "solid #B8820F";
                //this.box01.style.backgroundColor = "#B8820F";
                this.box01.style.paddingLeft = "0.8%";
                this.box01.style.paddingRight = "0.8%";
                
                if (sizeScreenEquip === false) { 
                      this.box01.style.paddingLeft = "2.2%";
                      this.box01.style.paddingRight = "2.2%";
                      }

                var diskNumberBox10 = this.box01;
                screen.appendChild(box01);

                sizeScreenEquipTrue()
          }
          
    }
    
}*/


/*
var tower3 = new Tower();
var tower4 = new Tower();
var tower5 = new Tower();
var tower6 = new Tower();
var tower7 = new Tower();
var tower8 = new Tower();
var tower9 = new Tower();
var tower10 = new Tower();
*/

//alert(totalNOD);
//alert(btnod01);
//alert(btnod02);
//alert(btnod03);


function intermediaryNumberOfGroups() {                         // montagem da disposição dos discos na tela entre 1 e 9

      if (btnod01 !== 0 && btnod02 === 1) {
            btnod02 = 5;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            btnod02 = 6;
            groupnumberOfDisk();
            sizeScreenEquipTrue();        

      } else if (btnod01 !== 0 && btnod02 === 2) {
            btnod02 = 6;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            groupnumberOfDisk();         

      } else if (btnod01 !== 0 && btnod02 === 3) {
            btnod02 = 6;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            btnod02 = 7;
            groupnumberOfDisk();
            sizeScreenEquipTrue();

      } else if (btnod01 !== 0 && btnod02 === 4) {
            btnod02 = 7;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            groupnumberOfDisk();
            sizeScreenEquipTrue();

      } else if (btnod01 !== 0 && btnod02 === 5) {
            btnod02 = 7;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            btnod02 = 8;
            groupnumberOfDisk();
            sizeScreenEquipTrue();

      } else if (btnod01 !== 0 && btnod02 === 6) {
            btnod02 = 8;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            groupnumberOfDisk();
            sizeScreenEquipTrue();

      } else if (btnod01 !== 0 && btnod02 === 7) {
            btnod02 = 8;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            btnod02 = 9;
            groupnumberOfDisk();
            sizeScreenEquipTrue();

      } else if (btnod01 !== 0 && btnod02 === 8) {
            btnod02 = 9;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            groupnumberOfDisk();
            sizeScreenEquipTrue();

      } else if (btnod01 !== 0 && btnod02 === 9) {
            btnod02 = 9;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
            btnod02 = 10;
            groupnumberOfDisk();
            sizeScreenEquipTrue();
      }
      btnod02 = btnod03;
}


let totalNOD = 19;                                              // número de discos a ser escolhido pelo usuario
let btnod01 = parseInt(totalNOD / 10);                          // número de grupos com 10 discos (máx. tela)
let btnod02 = (totalNOD - (10 * parseInt(totalNOD/10)));        // número de fichas extras entre 1 e 9 discos
let btnod03 = btnod02;


function numberOfDisk() {
      nod = document.createElement ("div");
      nod.style.borderWidth = "6px";
      nod.style.borderRadius = "20%";
      nod.style.fontWeight = "800";
      nod.style.textAlign = "center";
      nod.style.verticalAlign = "Middle"; 
      nod.style.backgroundColor = "#fff"; 
      nod.style.float = "left";
      
      if (sizeScreenEquip) {
            nod.style.padding = "10px 1.3% 9px 1.3%";
            nod.style.fontSize = "1.75vw";

            if (btnod02 === 1) {
                  nod.style.margin = "3px 48% 3px 48%";
             } else if (btnod02 === 2) {
                  nod.style.margin = "3px -39.1% 3px 43.6%";
            } else if (btnod02 === 3) {
                  nod.style.margin = "3px -34.6% 3px 39.1%";
            } else if (btnod02 === 4) {
                  nod.style.margin = "3px -30.7% 3px 35.2%";
            } else if (btnod02 === 5) {
                  nod.style.margin = "3px -26.2% 3px 30.7%";
            } else if (btnod02 === 6) {
                  nod.style.margin = "3px -22.3% 3px 26.8%";
            } else if (btnod02 === 7) {
                  nod.style.margin = "3px -18.1% 3px 22.6%";
            } else if (btnod02 === 8) {
                  nod.style.margin = "3px -13.9% 3px 18.4%";
            } else if (btnod02 === 9) {
                  nod.style.margin = "3px -9.7% 3px 14.2%";
            } else if (btnod02 === 10) {
                  nod.style.margin = "3px -5.4% 3px 10%";
            }

      } else {
            nod.style.margin = "10px 0 3px 10%";
            nod.style.padding = "6px 4% 6px 4%";
            nod.style.fontSize = "5vw";
      }

      screen.appendChild(nod);
}

function groupnumberOfDisk() {
      numberOfDisk3();
      numberOfDisk4();
      numberOfDisk5();
      numberOfDisk6();
      numberOfDisk7();
      numberOfDisk8();
      numberOfDisk9();
      numberOfDisk10();
      numberOfDisk11();
      numberOfDisk12();
}



function numberOfDisk3() {
      if (btnod02 + 2 >= 3) {
            numberOfDisk();
            nod3 = nod;
            nod3.style.border = "solid #0000ff";
            nod3.style.color = "#0000ff";
            nod3.textContent = 3;
      }
}

function numberOfDisk4() {
      if (btnod02 + 2 >= 4) {
            numberOfDisk();
            nod4 = nod;
            nod4.style.border = "solid #075025";
            nod4.style.color = "#075025";
            nod4.textContent = 4;
      }
}

function numberOfDisk5() {
      if (btnod02 + 2 >= 5) {
            numberOfDisk();
            nod5 = nod;
            nod5.style.border = "solid #3D0750";
            nod5.style.color = "#3D0750";
            nod5.textContent = 5;
      }
}

function numberOfDisk6() {
      if (btnod02 + 2 >= 6) {
            numberOfDisk();
            nod6 = nod;
            nod6.style.border = "solid #B80F33";
            nod6.style.color = "#B80F33";
            nod6.textContent = 6;
      }
   //   sizeScreenEquipFalse();
}

function numberOfDisk7() {
      if (btnod02 + 2 >= 7) {
            numberOfDisk();
            nod7 = nod;
            nod7.style.border = "solid #ff0ff0";
            nod7.style.color = "#ff0ff0";
            nod7.textContent = 7;
      }

   //   if (sizeScreenEquip === false) {
  //          nod7.style.margin = "10px 0 3px 12%"; 
   //   }
}

function numberOfDisk8() {
      if (btnod02 + 2 >= 8) {
            numberOfDisk();
            nod8 = nod;
            nod8.style.border = "solid #DDE02D";
            nod8.style.color = "#DDE02D";
            nod8.textContent = 8;
      }
}

function numberOfDisk9() {
      if (btnod02 + 2 >= 9) {
            numberOfDisk();
            nod9 = nod;
            nod9.style.border = "solid #0F17B8";
            nod9.style.color = "#0F17B8";
            nod9.textContent = 9;
      }
}

function numberOfDisk10() {
      if (btnod02 + 2 >= 10) {
            numberOfDisk();
            nod10 = nod;
            nod10.style.border = "solid #B8820F";
            nod10.style.color = "#B8820F";
            nod10.textContent = 10;

            if (sizeScreenEquip) {
                  nod10.style.padding = "10px 0.85% 9px 0.85%";
            } else {
                  nod10.style.padding = "6px 2.6% 6px 2.6%";
            }
      }
}

function numberOfDisk11() {
      if (btnod02 +2 >= 11) {
            numberOfDisk();
            nod11 = nod;
            nod11.style.border = "solid #6E5B7E";
            nod11.style.color = "#6E5B7E";
            nod11.textContent = 11;

            if (sizeScreenEquip) {
                  nod11.style.padding = "10px 0.85% 9px 0.85%";
            } else {
                  nod11.style.padding = "6px 2.6% 6px 2.6%";
            }
      }
}

function numberOfDisk12() {
      if (btnod02 +2 >= 12) {
            numberOfDisk();
            nod12 = nod;
            nod12.style.border = "solid #FFC300";
            nod12.style.color = "#FFC300";
            nod12.textContent = 12;

            if (sizeScreenEquip) {
                  nod12.style.padding = "10px 0.85% 9px 0.85%";
            } else {
                  nod12.style.padding = "6px 2.6% 6px 2.6%";
            }
      }
}


/*var pad9 = "10px 1.35% 9px 1.35%";
var size9 = "210%";

var pad99 = "11.5px 1.1% 10.5px 1.1%";
var size99 = "200%";

var pad999 = "13px 0.82% 12px 0.82%";
var size999 = "180%";

var pad9999 = "14.5px 0.65% 13.5px 0.65%";
var size9999 = "160%";

var pad99999 = "16px 0.5% 15px 0.5%";
var size99999 = "140%";

var pad999999 = "17.5px 0.3% 16.5px 0.3%";
var size999999 = "120%";

var padinfinite = "20px 0.3% 20px 0.3%";
var sizeinfinite = "20%";*/






