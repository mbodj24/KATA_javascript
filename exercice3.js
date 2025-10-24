function entiers(a,b,c){
    if (a>b && a>c)
        return a;
    else
        if (b>a && b>c)
            return b;
        else
            return c;
}
console.log(entiers(1,2,3));


function entiers(a,b,c){
    let max
   if(a>b){
      max=a
   }
   else{
      max=b
   }
   if(c>max){
      max=c
   }
   return max
}
console.log(entiers(6,3,9))
