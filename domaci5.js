//zad 01 - Spremi svoje godine (dob, broj rođendana) u varijablu. Izračunaj koliko imaš godina u psećim godinama, pa rezultat ispiši na konzolu.
console.log("1. zadatak");
var myAge = 39;
var dogAge = myAge*7;
console.log(dogAge);

///zad 02 - Spremi svoje ime i prezime u zasebne varijable, konkateniraj te varijable u treću varijablu, te ispiši vrijednost treće varijable na konzolu.
console.log("2. zadatak");
var myName = "Hrvojka ";
var mySurname = "Ivkošić Rubelj";
var nameSurname = myName.concat(mySurname);
console.log(nameSurname);

//zad 03 - Koristeći varijable, napiši program koji uzima dva cjelobrojna broja između 1 i 20, te na konzolu ispisuje njihov ostatak pri dijeljenju.
console.log("3. zadatak");
var firstNumb = 5;
var secondNumb = 11;
console.log(11%5);

//04 - Kreiraj varijablu koja prati broj polaznika Brainlab akademije. početna vrijednost je 22. nakon nekog vremena, 2 nova polaznika su se upisala. nakon toga su se 3 polaznika ispisala. nakon toga se 5 novih polaznika upisalo. nakon svakog koraka ispiši vrijednost varijable u konzolu.
console.log("4. zadatak");
var brPolaznika = 22;
brPolaznika += 2;
console.log(brPolaznika);
brPolaznika -= 3;
console.log(brPolaznika);
brPolaznika += 5;
console.log(brPolaznika);

//zad 05 Pokušaj pogoditi.... -sve sam pogodila!
console.log("5. zadatak");
console.log("3" + 3); //33
console.log(5 + 12); //17
console.log(5 + "4"); //54
console.log("My points: " + 4 + 9); //My points:49
console.log(2 + 2); //4
console.log("11" + "14"); //1114

//zad 06  - Svoje puno ime i prezime ispiši na konzoli, pa ga pretvori u velika slova i ispiši na konzoli, pa ponovno pretvori u sva mala slova i ispiši na konzoli.
console.log("6. zadatak");
var imePrezime = "Hrvojka Ivkošić Rubelj"
console.log(imePrezime.toUpperCase());
console.log(imePrezime.toLowerCase());

//zad 07 - Nekom od naredbi s predavanja provjeri koliko tvoje ime i prezime ima znakova
console.log("7. zadatak");
console.log("HrvojkaIvkošićRubelj".length);
