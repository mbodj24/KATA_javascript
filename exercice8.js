function capitale(pays){
    let capitales = {
        "France": "Paris",
        "Allemagne": "Berlin",
        "Italie": "Rome",
        "Maroc": "Rabat",
        "Portugal": "Lisbonne",
        "Angleterre": "Londres",
    }
    return capitales[pays]
}
     console.log(capitale("France"))
     console.log(capitale("Allemagne"))
     console.log(capitale("Italie"))  
     console.log(capitale("Maroc"))
     console.log(capitale("Portugal"))
     console.log(capitale("Angleterre"))
     console.log(capitale("Belgique"))


function Capitale(pays){
    let ville ="";
    switch(pays){
    case "France":
            ville = "Paris";
            break;
    case "Allemagne":
            ville = "Berlin";
            break;
    case "Italie":
            ville = "Rome";
            break;
    case "Maroc":
            ville = "Rabat";
            break;
    case "Espagne":
            ville = "Madrid";
            break;
    case "Portugal":
            ville = "Lisbonne";
            break;
    case "Angleterre":
            ville = "Londres";
            break;
    default:"Autre pays"
            console.log("Je ne connais pas cette Capitale")
            break;
    }
     return ville;
     }
console.log(Capitale("France")); // "Paris"
console.log(Capitale("Allemagne")); // "Berlin"
console.log(Capitale("Italie")); // "Rome"
console.log(Capitale("Maroc")); // "Rabat"
console.log(Capitale("Espagne")); // "Madrid"
console.log(Capitale("Portugal")); // "Lisbonne"
console.log(Capitale("Angleterre")); // "Londres"
console.log(Capitale("Autre pays"));
    