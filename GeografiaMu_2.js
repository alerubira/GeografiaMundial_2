const paises = [];
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
const llenarDiv=(a,b)=>{
    a.innerHTML=`<img src="${b}" width="${200}" height="${100}"  />`;
  }
  const llenarDivC=(a,b)=>{
    a.textContent=b;
  }
  const llenarDivs=(j,c)=>{
          
    if(j=="adivCapital"){
      div1.innerHTML=paises[paisesJugar[c]].capiltal[0];
      div2.innerHTML=paises[paisesJugar[c]].capiltal[0];
      div3.innerHTML=paises[paisesJugar[c]].capiltal[0];
      div4.innerHTML=paises[paisesJugar[c]].capiltal[0];

    } else{
      div1.innerHTML=`<img src="${paises[paisesJugar[c]].bandera}" width="${200}" height="${100}"  />` ;
      div2.innerHTML= `<img src="${paises[paisesJugar[c]].bandera}" width="${200}" height="${100}"  />`;
      div3.innerHTML= `<img src="${paises[paisesJugar[c]].bandera}" width="${200}" height="${100}"  />`;
      div4.innerHTML= `<img src="${paises[paisesJugar[c]].bandera}" width="${200}" height="${100}"  />`;
    }
}
const llenarArray=(al,tam,arr)=>{//llena un arreglo de 40 para jugar
    var bandera=true;
    do{
      var a=aleatorio(al);
        if(!arr.includes(a)){
            arr.push(a);
        }
        if(arr.length==tam){
          bandera=false;
        }
    }while(bandera);
}
 
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    //content = "";
    
    
    data.forEach((pais) => {
      p1= new P(pais.name.official,pais.capital,pais.flags.svg);
      
      paises.push(p1);
      
        
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
    
     
      const aleatorio=(al)=>{
        return Math.floor(Math.random() * al) ;
      }
      
      const vaciar=()=>{
        div1.innerHTML="";
        div2.innerHTML="";
        div3.innerHTML="";
        div4.innerHTML="";
        adivinaBandera.innerHTML="";
        adivinaCapital.innerHTML="";
      }
    
    const cantidad=paises.length-1;
    inicio.addEventListener("click", function() {
           aliasObligatorio.innerHTML="";
           if(alias.value==""){
            
            aliasObligatorio.innerHTML="el alias debe se obligatorio";
           }else{
            empezar();
           }
          
          });
 let paisesJugar=[];
 
 //llenarArray(cantidad,40,paisesJugar);//llena un arreglo con 40 numeros para buscar los paises para jugar
 function empezar(){
  var cont=0;//para seleccionar paises para acertar
  var cantI=10;//para seleccionar paises para rellenar
  do{
     jugar(cont);
     
     cont++;
  }while(cont>10);

 }
const jugar=(c)=>{
  
  vaciar();
  if(aleatorio(2)==1){
      eligeBandera(c);
  }else{
    eligeCapital(c);
  }

}
const eligeCapital=(c)=>{
  adivinaCapital.textContent="Adivina Capital";
  //var posPais=aleatorio(cantidad);
  nombrePais.textContent=paises[paisesJugar[c]].nombre;
  //llenarDivC(div1,paises[paisesJugar[]].capital[0]);
  //llenarDivC(div2,paises[paisesJugar[]].capital[0]);
  //llenarDivC(div3,paises[paisesJugar[]].capital[0]);
  //llenarDivC(div4,paises[paisesJugar[]].capital[0]);
  llenarDivs("adivinaCapital",c)
}
const eligeBandera=(c)=>{
  adivinaBandera.textContent="Adivina Bandera";
  nombrePais.textContent=paises[paisesJugar[c]].nombre;
  llenarDivs("adivi",c)
}

