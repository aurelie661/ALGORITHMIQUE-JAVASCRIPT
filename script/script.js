// ----------------------------------------------EXO1----------------------------------------------------------------------------------------------

// Exo 1 : Déclarer une variable nommée userName.
// Demander à l’utilisateur de saisir son nom et affecter la variable userName avec ce qu’il a saisi.
// Afficher un message du genre « Hello … » contenant le nom saisi et stocké dans la variable userName

// let userName = prompt("Quel est votre prenom?");

// console.log(`Bonjour ${userName}`);

// -----------------------------------------------EXO2----------------------------------------------------------------------------------------------

// Exo 2 : Initialiser 2 variables firstName et lastName avec des valeurs demandées à l’utilisateur.
// Initialiser ensuite une constante fullName qui sera la concaténation de firstName et lastName (séparés par un espace)
// Afficher cette constante dans un message à l’utilisateur du genre « Bonjour … »


// let firstName = prompt("Quel est votre prenom?");
// let lastName = prompt("Quel est votre nom?");

// const fullName= `${firstName} ${lastName}`;

// console.log(`Boujour ${fullName}`);

// // ------------------------------------------------EXO3------------------------------------------------------------------------------------------------

// Exo 3 : Demander à l’utilisateur de saisir 2 nombres (successivement) et lui en afficher le produit
// produit* -> résultat de la multiplication

// let firstNumber = prompt("Veuillez saisir un premier nombre:");
// let secondeNumber = prompt("Veuillez saisir un deuxieme nombre:");
// let result = firstNumber*secondeNumber;

// console.log(`Resultat de votre multiplication : ${result}`);

// ------------------------------------------------EXO4--------------------------------------------------------------------------------------------------------

// Exo 4 : Demander à l’utilisateur de saisir 2 nombres (successivement) et lui en afficher la somme (résultat de l’addition)

// let firstNumber = +prompt("Veuillez saisir un premier nombre:");
// let secondeNumber = +prompt("Veuillez saisir un deuxieme nombre:");

// let result = firstNumber + secondeNumber;
// console.log(`Resultat de votre addition : ${result}`);

// ------------------------------------------------EXO5------------------------------------------------------------------------------------------

// Exo 5 : Demander à l’utilisateur de saisir 1 nombre et lui indiquer si ce qu’il a saisi n’est pas un nombre
// Si c’est un nombre lui indiquer ensuite si ce nombre est négatif, positif ou égal à 0

// let number = +prompt("Veuillez saisir un nombre:");

// if(number === 0){
//     alert("Votre nombre est egal a zero!");
// }
// else if(number < 0){
//     alert("Ceci est un nombre negatif!");
// }
// else if(number > 0){
//     alert("Ceci est un nombre positif!");
// }
// else{
//     alert("Ceci n'est pas un nombre !");
// }
// ------------------------------------------------------------
// let number = prompt("Veuillez saisir un nombre:");
// let numberVerify = +number;

// if (number == numberVerify) {
//     if (number === 0) {
//         alert("Votre nombre est egal a zero!");
//     }
//     else if (number < 0) {
//         alert("Ceci est un nombre negatif!");
//     }
//     else if (number > 0) {
//         alert("Ceci est un nombre positif!");
//     }
// }
// else{
//     alert("Ceci n'est pas un nombre !");
// }

// -------------------------------------EXO6--------------------------------------------------------------------------------------------------

// Exo 6 : Demander à l’utilisateur de saisir 1 nombre entier et lui indiquer si ce qu’il a saisi n’est pas un nombre entier
// Si c’est un nombre entier lui indiquer ensuite si ce nombre entier est pair ou impair

// let number = +prompt("Veuillez saisir un nombre entier:");
// let numberVerify = parseFloat(number);

// if(numberVerify != 0){

//         if(!isNaN(number) && Number.isInteger(number) === true){ 

//             if(number % 2 === 0){

//                 alert("Ok bien joue ! tu as bien un nombre entier et plus un entier pair ;)");
//       
//             }
//             else{
//                 alert("Ok ! tu as bien un nombre entier mais pas un entier pair");
//            
//             }

//         }
//         else if(isNaN(number)){

//             alert("Ceci n'est pas un nombre !")
//          
//         }
//         else{

//             alert("Ceci n'est pas un nombre entier !")
//           
//         }
// }
// else{

//     alert("Rien noté !")

// }
// -------------------------------------EXO7---------------------------------------------------------------------------------------------------

// Exo 7 : écrire un algorithme en JS qui demande à l’utilisateur de 
// saisir 3 mots et qui lui affiche ensuite la liste des mots classés
//  par ordre alphabétique. Pas de contrôle de saisi requis.

// let word1 = prompt("Veuillez saisir 1 mot:");
// let word2 = prompt("Veuillez saisir un 2eme mot:");
// let word3 = prompt("Veuillez saisir un 3eme mot:");

// let array = [word1,word2,word3];
// let arraySort = array.sort()
// console.log(arraySort);

// -----------------------------------EXO8--------------------------------------------------------------------------------------------------------------

// Exo 8 : écrire un algorithme en JS qui demande à l’utilisateur de saisir son age et 
// qui lui affiche s’il est majeur (18 ans ou plus) ou mineur (17 ans ou moins). Contrôle de saisie 
// : vérifier que l’age saisi est correcte (compris entre 0 et 99 par exemple) si ça n’est pas le cas,
//  indiquer à l’utilisateur qu’il s’est trompé.

// let age = +prompt("Quel est votre âge ?");
// let ageVerify = parseInt(age);


// if(ageVerify != 0){
//     if(!isNaN(age) && age < 18){

//         alert("Vous êtes mineur ! ")
//     }
//     else if(age >= 18){
//         alert("Vous êtes majeur, un coktail ! ")

//     }
//     else{
//         alert("Besoin d'un coup de main pour trouver le clavier numérique ? ")

//     }
// }
// else{
//     alert("Votre âge est requis ! ")

// }


// -----------------Exercice refait avec boucle de condition--------------------

// let age;
// let ageVerify;
// do{
//     age = +prompt("Quel est votre âge ?");
//     ageVerify = parseInt(age);

// }while(isNaN(age) || parseFloat(age) != parseInt(age) || ageVerify == 0)

// if(age < 18){

//     alert("Vous êtes mineur ! ")
// }else{
//     alert("Vous êtes majeur, un coktail ?! ")

// }

// --------------------------------EXO9-----------------------------------------------------------------------------------------------------

// Exo 9 : écrire un algorithme en JS qui demande à l’utilisateur 
// de saisir l’age de son enfant et qui lui affiche dans quelle 
// catégorie celui-ci jouera au foot cette saison.
// Moins de 5 ans : pas possible de s’inscrire !
// 5-6 ans : baby foot
// 7-8 ans : poussins
// 9-10 ans : pupilles
// 11-12 ans : minimes
// 13-14 ans : cadets
// 15-16-17 ans : junior
// 18 ans et + : ça n’est plus un enfant !

// let age = +prompt("Quel est l'âge de votre enfant ?");
// let ageVerify = parseFloat(age);

// if(ageVerify != 0){
//     if(!isNaN(age)){
//         if(age < 18){
//             if(age > 5){
//                 if(age >= 15 && age <=17){
//                     alert("Votre enfant sera admis chez les juniors")         
//                 }else if(age >= 13 && age <=14){
//                     alert("Votre enfant sera admis chez les cadets")         
//                 }else if(age >= 11 && age <=12){
//                     alert("Votre enfant sera admis chez les minimes")         
//                 }else if(age >= 9 && age <=10){
//                     alert("Votre enfant sera admis chez les pupilles")         
//                 }else if(age >= 7 && age <=8){
//                     alert("Votre enfant sera admis chez les poussins")         
//                 }else{           
//                     alert("Votre enfant sera admis chez les baby foot")         
//                 }
//             }else{
//                 alert("Pas de catégorie disponible pour votre enfant.")
//             }            
//         }else{
//             alert("ça n’est plus un enfant !")
//         }
//     }else{
//         alert("Besoin d'un coup de main pour trouver le clavier numérique ? ")
//     }
// }else{
//     alert("L'âge de votre enfant est requis !")
// }
// -----------------Exercice refait avec boucle de condition--------------------

// let age;
// let ageVerify;
// do {
//     age = +prompt("Quel est l'âge de votre enfant ?");
//     ageVerify = parseInt(age);

// } while (isNaN(age) || parseFloat(age) != parseInt(age) || ageVerify == 0);

// if (age < 18) {
//     if (age > 5) {
//         if (age >= 15 && age <= 17) {
//             alert("Votre enfant sera admis chez les juniors")
//         } else if (age >= 13 && age <= 14) {
//             alert("Votre enfant sera admis chez les cadets")
//         } else if (age >= 11 && age <= 12) {
//             alert("Votre enfant sera admis chez les minimes")
//         } else if (age >= 9 && age <= 10) {
//             alert("Votre enfant sera admis chez les pupilles")
//         } else if (age >= 7 && age <= 8) {
//             alert("Votre enfant sera admis chez les poussins")
//         } else {
//             alert("Votre enfant sera admis chez les baby foot")
//         }
//     } else {
//         alert("Pas de catégorie disponible pour votre enfant.")
//     }
// } else {
//     alert("ça n’est plus un enfant !")
// }
// ---------------------------------EXO10----------------------------------------------------------------------------------------------------------------------

// Exo 10 : écrire un algorithme en JS qui demande à l’utilisateur de saisir un horaire 
// (heures et minutes). Vérifier qu’il s’agit d’un horaire valide (h : 0 à 23, m : 0 à 59).
//  Si ça n’est pas le cas, lui indiquer qu’il s’est trompé. 
//  Sinon lui dire quelle horaire il sera dans une heure.

// let hour = +prompt("Quelle est heure actuel ?");
// let min = +prompt("Quelle sont les minutes actuel ?");

// if(Number.isInteger(hour) && Number.isInteger(min) && !isNaN(hour) && !isNaN(min)){
//     if(hour <= 23 && min >=0 ){
//         if(hour == 23 && min == 59){
//             hour = 1;
//         }else{
//             hour += 1;
//         }
//         alert("Dans 1 heure il sera "+hour+"Heure et "+min+" Minutes.");
//     }else{
//         alert("Heure non valide !")
//     }    

// }else{
//     alert("Heure non valide !");
// }

// -----------------Exercice refait avec boucle de condition--------------------

// let hour;
// let min;
// let hourVerify;
// let minVerify;
// do {
//     hour = +prompt("Quelle est heure actuel ?");
//     hourVerify = parseInt(hour);
//     min = +prompt("Quelle sont les minutes actuel ?");
//     minVerify = parseInt(min);

// } while (isNaN(hour) || isNaN(min) ||
//          !Number.isInteger(hour) || !Number.isInteger(min) ||
//          hourVerify == 0 || minVerify == 0);

// if (hour <= 23 && min >= 0) {
//     if (hour == 23 && min == 59) {
//         hour = 1;
//     } else {
//         hour += 1;
//     }
//     alert("Dans 1 heure il sera " + hour + "Heure et " + min + " Minutes.");
// } else {
//     alert("Heure non valide !")
// }
// ------------------------------EXO11---------------------------------------------------------------------------------------------------------

// Exo 11 : écrire un algorithme en JS qui demande à l’utilisateur de saisir 
// une date (jour, mois, année). 
// Vérifier qu’il s’agit d’une date valide 
// (attention au mois de février et aux années bissextiles)
// Si ça n’est pas le cas, lui indiquer qu’il s’est trompé.
//  Sinon lui demander combien de jour il souhaite ajouter 
//  à cette date et lui dire quelle sera la date en ajoutant 
//  ce nombre de jour à la date initialement saisie.

// let day = prompt("Veuillez saisir le jour (de 1 à 31) :");
// let month = prompt("Veuillez saisir le mois (de 1 à 12) :");
// let years = prompt("Veuillez saisir l'année :");

// let bissextile = false;
// if(years % 100 == 0 && years % 400 == 0){
//     bissextile = true;
// }else if(years % 100 == 0 && years % 400 != 0){
//     bissextile = false;
// }else if (years % 4 == 0) {
//     bissextile = true;
// } else {
//     bissextile = false;
// }

// if (month == 8) {
//     if (day < 1 || day > 31) {
//         alert("Date incorrecte");
//     } else {
//         alert("Date correcte");
//     }
// }else if (month == 2) {
//     if (bissextile == true) {
//         if (day < 1 || day > 29) {
//             alert("Date Incorrecte.");
//         } else {
//             alert("Date Correcte.");
//         }
//     } else if (bissextile == false) {
//         if (day < 1 || day > 28) {
//             alert("Date Incorrecte.");
//         } else {
//             alert("Date Correcte.");
//         }
//     }
// }else if (month % 2 == 0) {
//     if (month < 1 || month > 12) {
//         if (day < 1 || day > 30) {
//             alert("Date Incorrecte.");
//         } else {
//             alert("Date Incorrecte.");
//         }
//     } else if (day < 1 || day > 30) {
//         alert("Date Incorrecte.");
//     } else {
//         alert("Date Correcte.");
//     }
// }else {
//     if (month < 1 || month > 12) {
//         if (day < 1 || day > 31) {
//             alert("Date Incorrecte.");
//         } else {
//             alert("Date Incorrecte.");
//         }

//     } else if (day < 1 || day > 31) {
//         alert("Date Incorrecte.");
//     } else {
//         alert("Date Correcte.");
//     }
// }   

// -----------------Exercice refait avec boucle de condition--------------------
// let day;
// let month;
// let year;

// do {
//     let day = prompt("Veuillez saisir le jour (de 1 à 31) :");
//     let month = prompt("Veuillez saisir le mois (de 1 à 12) :");
//     let year = prompt("Veuillez saisir l'année :");
// } while (day <= 0 || day > 31);


// ------------------------------------EXO12------------------------------------------------------------------------------------------------------------------

// Exo 12 : Un magasin de reprographie facture 0,10 E 
// les dix premières photocopies, 0,09 E les vingt suivantes
//  et 0,08 E au-delà. Ecrivez un algorithme en JS qui demande à l’utilisateur
//  le nombre de photocopies effectuées et qui affiche le prix correspondant.

// let photocopie = prompt("Combien de photocopie voulez vous effectuer :");

// let result;
// if (photocopie <= 10) {
//     result = photocopie * 0.10;
// } 
// //LES 20 PROCHAINES
// else if (photocopie > 10 && photocopie <= 30) {
//     result = 1 + (photocopie - 10) * 0.09;
// } 
// //AU DELA
// else {
//     result = 2.80 + (nbCphotocopieopie - 30) * 0.08;
// }
// if (result < 1) {
//     alert(`Pour ${photocopie} photocopies, le prix sera de ${result.toFixed(2)} centimes.`);

// } else {
//     alert(`Pour ${photocopie} photocopies, le prix sera de ${result.toFixed(2)} euros.`);
// }


// -----------------Exercice refait avec boucle de condition--------------------

// let photocopie;
// let photocopVerify;
// do{
//     photocopie = +prompt("Combien de photocopie voulez vous effectuer :");
//     photocopVerify = parseInt(photocopie);

// }while(photocopVerify == 0 || isNaN(photocopie) || photocopVerify != parseFloat(photocopie));

// let result;
// if (photocopie <= 10) {
//     result = photocopie * 0.10;
// } 
// //LES 20 PROCHAINES
// else if (photocopie > 10 && photocopie <= 30) {
//     result = 1 + (photocopie - 10) * 0.09;
// } 
// //AU DELA
// else {
//     result = 2.80 + (nbCphotocopieopie - 30) * 0.08;
// }
// if (result < 1) {
//     alert(`Pour ${photocopie} photocopies, le prix sera de ${result} centimes.`);

// } else {
//     alert(`Pour ${photocopie} photocopies, le prix sera de ${result} euros.`);
// }



// --------------------------------------EXO13-----------------------------------------------------------------------------------------------

// Exo 13 : Demander à l’utilisateur de saisir une note comprise entre 0 et 20.
//  Si la saisie n’est pas correcte lui indiquer. 
//  Si la saisie est correcte lui indiquer la mention qu’il
//   a obtenu à son examen suivant le « barème » suivant :
// < 10 : Examen non réussi
// >= 10 et < 12 : Examen réussi
// >= 12 et < 14 : Examen réussi, mention AB
// >= 14 et < 16 : Examen réussi, mention B
// >= 16 et < 18 : Examen réussi, mention TB
// >= 18 et >20 : Examen réussi, mention Excellent
// 20 : Examen réussi, mention Parfaits
// Réaliser dans un premier temps l’exercice avec un if else if ...
// Recommencer l’exercice avec un switch


// let note = +prompt("Quelle est votre note obtenu à l'examen ?");
// let noteVerifie = parseInt(note);

// if(noteVerifie != 0 && !isNaN(note)){
//     if(note != 20){
//         if(note >=18 && note < 20){
//             alert("Examen réussi, mention Excellent");
//         }else if(note >=16 && note < 18){
//             alert("Examen réussi, mention TB");
//         }else if(note >=14 && note < 16){
//             alert("Examen réussi, mention B");
//         }else if(note >=12 && note < 14){
//             alert("Examen réussi, mention AB");
//         }else if(note >=10 && note < 12){
//             alert("Examen réussi");
//         }else{
//             alert("Examen non réussi");
//         }
//     }else{
//         alert("Examen réussi, mention Parfaits")
//     }
// }else{
//     alert("Saisie incorrect !")
// }

// --------------------------------refaire l'exo avec switch + condition bouclé--------------

// let note;
// let noteVerify;
// do{
//     note = +prompt("Quelle est votre note obtenu à l'examen ?");
//     noteVerify = parseFloat(note);

// }while(isNaN(note) || noteVerify == 0 || parseFloat(note) != parseInt(note));


// switch (note) {
//     case 10:
//     case 11:
//         console.log("Examen réussi");
//         break;
//     case 12:
//     case 13:
//         console.log("Examen réussi, mention AB");
//         break;
//     case 14:
//     case 15:
//         console.log("Examen réussi, mention B");
//         break;
//     case 16:
//     case 17:
//         console.log("Examen réussi, mention TB");
//         break;
//     case 18:
//     case 19:
//         console.log("Examen réussi, mention Excellent");
//         break;
//     case 20:
//         console.log("Examen réussi, mention Parfaits");
//         break;
//     default:
//         console.log("Examen non réussi");
//         break;
// }



// // -----------------Exercice refait avec boucle de condition--------------------
// let note;
// let noteVerifie
// do {
//     note = +prompt("Quelle est votre note obtenu à l'examen ?");
//     noteVerifie = parseFloat(note);
// } while (isNaN(note) || noteVerifie != parseInt(note) || noteVerifie == 0);

// if (note != 20) {
//     if (note >= 18 && note < 20) {
//         alert("Examen réussi, mention Excellent");
//     } else if (note >= 16 && note < 18) {
//         alert("Examen réussi, mention TB");
//     } else if (note >= 14 && note < 16) {
//         alert("Examen réussi, mention B");
//     } else if (note >= 12 && note < 14) {
//         alert("Examen réussi, mention AB");
//     } else if (note >= 10 && note < 12) {
//         alert("Examen réussi");
//     } else {
//         alert("Examen non réussi");
//     }
// } else {
//     alert("Examen réussi, mention Parfaits")
// }


// -----------------------------------EXO14---------------------------------------------------------------------------------------

//  Exo 14 :
// Écrire un algorithme qui demande un nombre entier à l’utilisateur et qui écrit ensuite la table de
// multiplication de ce nombre de 0 à 10.

// let number = +prompt("Nombre :");
// let numberVerify = parseFloat(number);
// console.log(`TABLE DE ${number}`);

// if(numberVerify != 0 && !isNaN(number)){

//     for (let i = 1; i <= 10; i++) {
//         let result = number * i;
//         console.log(`${number} * ${i} = ${result}`);

//     }
// }else{
//     console.log("Saisie incorrect !");
// }

// -------------------------------------EXO15-----------------------------------------------------------------------------------------------------------------------------------------

/*
 Exo 15 :
Écrire un algorithme qui demande un nombre entier à l’utilisateur et qui calcule la somme des
entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 +
5 = 15.

*/
// function somme(number){

//     let result = 0;
//     for (let i = 0; i <= number; i++) {
//         result = result + i;       
//     }
//     return result;
// }

// let nB = +prompt("Veuillez saisir un nombre :");
// console.log(`La somme de ${nB} est :`+ somme(nB));

// -------------------------------------EXO16---------------------------------------------------------------------------------------------------------------

/*
 Exo 15 :
 Exo 16 :
Écrire un algorithme qui demande un nombre entier à l’utilisateur et qui calcule sa factorielle.
Par exemple, si l’on entre 5, le programme doit calculer : 1 x 2 x 3 x 4 x 5 = 120.

*/

// function factorielle(number){

//     let result = 1;
//     for (let i =1; i <= number; i++) {
//         result = result * i;       
//     }
//     return result;
// }

// let nB = +prompt("Veuillez saisir un nombre :");
// console.log(`La factorielle de ${nB} est :`+ factorielle(nB));




// ---------------------------------------------------------------EXO18----------------------------------------------------------------------------------------------

/*
Exo 18 :
Écrire un algorithme qui demande à l’utilisateur de saisir des nombres entiers positifs pour en
calculer la moyenne. Si une saisie n’est pas valide, indiquer à l’utilisateur qu’il s’est trompé et lui
demander de recommencer sa saisie. Pour arrêter la saisie des nombres et faire le calcul de la
moyenne de tous les nombres saisis, l’utilisateur entrera comme valeur =.


*/



// --------------------------------------------------------------------EXO19-------------------------------------------------------------------------

/*
Exo 19 :
Réécrire l’algorithme précédent pour qu’il affiche cette fois ci le nombre saisi le plus petit et celui le
plus grand.

*/


// --------------------------------------------------------------------EXO20-------------------------------------------------------------------------

/*
 Exo 20 :
En utilisant ce qui a été fait dans les 2 exercices précédent, écrire un algorithme permettant de saisir
les moyennes des élèves d’une classe (note comprises entre 0 et 20) puis afficher la moyenne
générale de la classe, ainsi que la meilleur moyenne de la classe (avec sa position dans la saisie) et
la moins bonne moyenne de la classe (avec sa position dans la saisie)

*/