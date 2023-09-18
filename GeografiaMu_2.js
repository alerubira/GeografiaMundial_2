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
const aleatorio=(al)=>{
  return Math.floor(Math.random() * al) ;
}
const llenarDiv=(a,b)=>{
    a.innerHTML=`<img src="${b}" width="${200}" height="${100}"  />`;
  }
  const llenarDivC=(a,b)=>{
    a.textContent=b;
  }
  const llenarDivs=(j,c1,c2,c3,c4)=>{
          
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
}
const jugar=(c,cI)=>{
  var d =aleatorio(4);
  var c1,c2,c3,c4;
  switch (d) {
    case 0:
      c1=c;c2=cI;c3=cI+1;c4=cI+2;
      break;
    case 1:
      c1=cI;c2=c;c3=cI+1;c4=+2;
      break;
    case 2:
      c1=cI;c2=cI+1;c3=c;c4=cI+2;
      break;
    case 3:
      c1=cI;c2=cI+1;c3=cI+2;c4=c;
      break;
    
  if(aleatorio(2)==1){
      eligeBandera(c1,c2,c3,c4);
  }else{
    eligeCapital(c1,c2,c3,c4);
  }
}
}
 
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    //content = "";
    
    
    data.forEach((pais) => {
      p1= new P(pais.name.official,pais.capital,pais.flags.svg);
      
      paises.push(p1);
       cantidad=paises.length-1;
        
    });
    //console.log(paises[0]);
    
    //const posicion=Math.floor(Math.random() * cantidad) ;
    //adivinaBandera.textContent="Adivina Bandera";
    //adivinaCapital.textContent="Adivina Capital";
    //nombrePais.textContent=paises[posicion].nombre;
    //nombreCapital.textContent=paises[posicion].capital[0];
    //ruta=paises[posicion].bandera;
    //llenarDiv(div1,ruta);
    //llenarDivC(div1,paises[posicion].capital[0]);
    //console.log(ruta);
    });
    
    

    inicio.addEventListener("click", function() {
           aliasObligatorio.innerHTML="";
           if(alias.value==""){
            
            aliasObligatorio.innerHTML="el alias debe se obligatorio";
           }else{
            paisesJugar=llenarArray(cantidad,43);//llena un arreglo con 40 numeros para buscar los paises para jugar 
            empezar();
           }
          
          });
 
 
 //
 function empezar(){
  var cont=0;//para seleccionar paises para acertar
  var cantI=10;//para seleccionar paises para rellenar
  vaciar();
  do{
     jugar(cont,cantI);
     
     cont++;
     cantI=cantI+3;
     //vaciar();
  }while(cont>10);

 }



const eligeCapital=(c1,c2,c3,c4)=>{
  adivinaCapital.textContent="Adivina Capital";
  //var posPais=aleatorio(cantidad);
  nombrePais.textContent=paises[paisesJugar[c]].nombre;
 // llenarDivC(div1,paises[paisesJugar[c]].capital[0]);
 // llenarDivC(div2,paises[paisesJugar[cI]].capital[0]);
 // llenarDivC(div3,paises[paisesJugar[cI+1]].capital[0]);
 // llenarDivC(div4,paises[paisesJugar[cI+3]].capital[0]);
  llenarDivs("adivCapital",c,cI)
}
const eligeBandera=(c1,c2,c3,c4)=>{
  adivinaBandera.textContent="Adivina Bandera";
  nombrePais.textContent=paises[paisesJugar[c]].nombre;
  llenarDivs("adivi",c,cI)
}

