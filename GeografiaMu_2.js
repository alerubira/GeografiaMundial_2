let paises = [];
function P(nombre, capital, bandera) {
  this.nombre = nombre;
  this.capital = capital;
  this.bandera = bandera;
  
}
let adivinaCapital=document.getElementById("adivinaCapital");
let adivinaBandera=document.getElementById("adivinaBandera");
let nombrePais=document.getElementById("nombrePais");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
let div4=document.getElementById("div4");
let inicio=document.getElementById("inicio");
let alias=document.getElementById("alias");
let bandera;
let aliasObligatorio=document.getElementById("aliasObligatorio");
let cantidad;
let paisesJugar;
let correctas;
let cont;
let cantI;
const aleatorio=(al)=>{
  return Math.floor(Math.random() * al) ;
}
/*const llenarDiv=(a,b)=>{
    a.innerHTML=`<img src="${b}" width="${200}" height="${100}"  />`;
  }
  const llenarDivC=(a,b)=>{
    a.textContent=b;
  }*/
  const llenarDivs=(j,c1,c2,c3,c4,c)=>{
          
    if(j=="adivCapital"){
      div1.innerHTML=paises[paisesJugar[c1]].capital[0];
      div2.innerHTML=paises[paisesJugar[c2]].capital[0];
      div3.innerHTML=paises[paisesJugar[c3]].capital[0];
      div4.innerHTML=paises[paisesJugar[c4]].capital[0];

    } else{
      div1.innerHTML=`<img src="${paises[paisesJugar[c1]].bandera}" width="${200}" height="${100}"  />` ;
      div2.innerHTML= `<img src="${paises[paisesJugar[c2]].bandera}" width="${200}" height="${100}"  />`;
      div3.innerHTML= `<img src="${paises[paisesJugar[c3]].bandera}" width="${200}" height="${100}"  />`;
      div4.innerHTML= `<img src="${paises[paisesJugar[c4]].bandera}" width="${200}" height="${100}"  />`;
    }
}
 llenarArray=(al,tam)=>{//llena un arreglo de 40 para jugar
    var bandera=true;
    var arr =[];
    do{
      var a=aleatorio(al);
        if(!arr.includes(a)){
            arr.push(a);
        }
        if(arr.length==tam){
          bandera=false;
        }
    }while(bandera);
    return arr;
}
const vaciar=()=>{
  div1.innerHTML="";
  div2.innerHTML="";
  div3.innerHTML="";
  div4.innerHTML="";
  adivinaBandera.innerHTML="";
  adivinaCapital.innerHTML="";
  aliasObligatorio.innerHTML="";
   div1.removeAttribute("style");
   div1.classList.add("arriba");
   div2.removeAttribute("style");
   div2.classList.add("arriba");
   div3.removeAttribute("style");
   div3.classList.add("abajo");
   div4.removeAttribute("style");
   div4.classList.add("abajo");
}
const jugar=(c,cI)=>{
  var d =aleatorio(4);
  var c1,c2,c3,c4,retorno;
  switch (d) {
    case 0:
      c1=c;c2=cI;c3=cI+1;c4=cI+2;
      retorno=1;
      break;
    case 1:
      c1=cI;c2=c;c3=cI+1;c4=+2;
      retorno=2;
      break;
    case 2:
      c1=cI;c2=cI+1;c3=c;c4=cI+2;
      retorno=3;
      break;
    case 3:
      c1=cI;c2=cI+1;c3=cI+2;c4=c;
      retorno=4
      break;
  } 
  if(aleatorio(2)==1){
      eligeBandera(c,c1,c2,c3,c4);
  }else{
    eligeCapital(c,c1,c2,c3,c4);
  }
}
  function marcar(co){
    
     switch (co) {
    case 1:
          div1.style.border = "6px solid green";
          div2.style.border = "6px solid red";
          div3.style.border = "6px solid red";
          div4.style.border = "6px solid red";
          
      break;
    case 2:
           div1.style.border = "6px solid red";
           div2.style.border = "6px solid green";
           div3.style.border = "6px solid red";
           div4.style.border = "6px solid red";
           
      break;
    case 3:
          div1.style.border = "6px solid red";
          div2.style.border = "6px solid red";
          div3.style.border = "6px solid green";
          div4.style.border = "6px solid red";
          
      break;
    case 4:
          div1.style.border = "6px solid red";
          div2.style.border = "6px solid red";
          div3.style.border = "6px solid red";
          div4.style.border = "6px solid green";
          
      break;
  }  
  setTimeout(empezar, 3000);
}
 

//console.log(d,c1,c2,c3,c4);
//console.log(retorno)

//setTimeout(empezar, 3000);
//return retorno;

 
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    //content = "";
    
    
    data.forEach((pais) => {
      p1= new P(pais.name.official,pais.capital,pais.flags.svg);
      
      paises.push(p1);
       cantidad=paises.length-1;
        
    });
    
    });
    
    

    inicio.addEventListener("click", function() {
           aliasObligatorio.innerHTML="";
           if(alias.value==""){
            
            aliasObligatorio.innerHTML="el alias debe se obligatorio";
           }else{
            paisesJugar=llenarArray(cantidad,43);//llena un arreglo con 40 numeros para buscar los paises para jugar 
            cont=0;//para seleccionar paises para acertar
            cantI=10;//para seleccionar paises para rellenar
            correctas=0;
            empezar();
           
          }
           
          });
 
 
 //
 function empezar(){

    vaciar();
    var corr= jugar(cont,cantI);//me devuelve en que div coloco la respuesta correcta
     
     cont++;
     cantI=cantI+3;
     console.log(cont);
    clic(corr);

 }
  function clic(co){
    var a;
div1.addEventListener('click', function() {
  
  if(co==1){
     correctas++;
     marcar(co); 
  }else{
    marcar(co);
  }
    
});
div2.addEventListener('click', function() {
  if(co==2){
     correctas++;
     marcar(co);
  }else{
    marcar(co);
  }
    
});
div3.addEventListener('click', function() {
  if(co==3){
     correctas++;
     marcar(co); 
  }else{
    marcar(co);
  }
   
});
div4.addEventListener('click', function() {
  if(co==4){
     correctas++; 
     marcar(co);
  }else{
    marcar(co);
  }
   
});
     
     
 }

const eligeCapital=(c,c1,c2,c3,c4,)=>{
  adivinaCapital.textContent="Adivina Capital";
  
  nombrePais.textContent=paises[paisesJugar[c]].nombre;
  llenarDivs("adivCapital",c1,c2,c3,c4,c)
}
const eligeBandera=(c,c1,c2,c3,c4)=>{
  adivinaBandera.textContent="Adivina Bandera";
  nombrePais.textContent=paises[paisesJugar[c]].nombre;
  llenarDivs("adivi",c1,c2,c3,c4,c)
}



