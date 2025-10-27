function nombreVoyelles(str){
    
return str.match(/[a,e,i,o,u,y]/gi).length;
   }
   console.log(nombreVoyelles("Bonjour"));
   console.log(nombreVoyelles("Hello"));
   console.log(nombreVoyelles("Oui"));