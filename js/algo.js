/*
Összegzés algoritmusa:

összeg=0
CIKLUS AMÍG van még szám,ADDIG
szám=következő elem
összeg= összeg+szám
CIKLUS VÉGE
*/

let szamok=[1,3,2,5,4,7,6,9];
let sum=0;
for(let i=0;i<szamok.length;i++){
    sum+=szamok[i]
    
}
console.log("Sum: ",sum);

let szamok2=[5,4,3,2,1,5];
let összeg=0;
for(let i=0;i<szamok2.length;i++){
    összeg+=szamok2[i]
}
console.log("számok összege",összeg);

/*Számlálás algoritmusa:

db=0
CIKLUS AMÍG van még szám,ADDIG
szám=következő elem
HA igaz a feltétel a számra,AKKOR
    db=db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE*/    

let db=0
for(let i=0;i<szamok.length;i++){
    if(szamok[i]%2==0){
        db++;
    }
}
console.log("even numbers:",db);

let darab=0
for(let i=0;i<szamok2.length;i++){
    if(szamok2[i]%2==1){
        darab++;
    }
}
console.log("páratlan számok:",darab)

/* Szélső érték algoritmusa:

legnagyobb=első elem
CIKLUS AMÍG van még szám,ADDIG
szám=következő elem
ha szám> legnagyobb,AKKOR
legnagyobb=szám
FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let legnagyobb= szamok[0];
for (let i = 0; i < szamok.length; i++) {
 if(szamok[i]>legnagyobb){
     legnagyobb=szamok[i];
} 
    
}
console.log("legnagyobb szám:",legnagyobb);

let legkisebb= szamok[0];
for (let i = 0; i < szamok.length; i++) {
 if(szamok[i]<legkisebb){
     legkisebb=szamok[i];
} 
    
}
console.log("legkisebb szám:",legkisebb);

/*Eldöntés tétele

találat=HAMIS
CIKLUS AMÍG van elem ÉS NEM találat.
szám=következő elem
HA igaz a feltétel a számra,AKKOR
találat=IGAZ
FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let tartalmazza=false;
for (let i = 0; i < szamok.length && tartalmazza==false; i++) {
   if(szamok[i]==5){
       tartalmazza=true; szamok[i];

   } 
    
}
console.log("tartalmazza az 5 ös számot:",tartalmazza);

let vanBenne=false;
for (let i = 0; i < szamok.length && tartalmazza==false; i++) {
    if(szamok[i]==10){
        vanBenne=true; szamok[i];
 
    } 
     
 }
 console.log("tartalmazza az 10-es számot:",vanBenne);

