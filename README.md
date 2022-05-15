Titlul proiectului: Aplicatie pentru traducerea unui text
Nume: Talaba Adina
Grupa: 1119

Link back: https://github.com/adina19/CloudProiect/tree/04_Final

Link front: https://github.com/adina19/CloudComputingFront/tree/04_FinalFront

Link prezentare: https://youtu.be/dJGNh195grw


1. Introducere
Proiectul s-a bazat pe crearea unei aplicatii de traducere. Pentru realizarea back-end-ului am folosit node.js, iar pentru front-end – react.
2.  Descriere problemă 
Aplicatia este destinata traducerii de texte, similar Google Translate. Dupa introducerea textului de tradus, utilizatorul alege limba tinta si apasa butonul de traducere.
3. Descriere API 
Cele doua servicii de cloud folosite pentru aplicatie sunt cel de SQL de la Google Cloud Platform si Cloud Translation API. Serviciul Cloud SQL permite configurarea, intretinerea si administrarea unei baze de date, iar limbajul pe care l-am ales este MySQL. Cloud Translation este un API public care permite detectarea limbii si traducerea textelor.
Baza de date este alcatuita dintr-o tabela ce stocheaza textele si traducerile acestora:
 ![image](https://user-images.githubusercontent.com/75979307/168481678-573c9f4f-61ba-4070-b4d4-317b50a5d198.png)

 
4. Flux de date 
Exemple de request / response si metode HTTP
Aplicatia se bazeaza pe doua metode HTTP:
a. Cea care traduce textul si insereaza informatia in baza de date:
 
![image](https://user-images.githubusercontent.com/75979307/168481728-d6a8e20a-d61a-461c-a1b0-a3c0fc178056.png)
![image](https://user-images.githubusercontent.com/75979307/168481731-0059216e-3b66-4364-8711-e16c139c079c.png)

 
b. Cea care afiseaza traducerea textului introdus de utilizator:
 ![image](https://user-images.githubusercontent.com/75979307/168481736-1584f8ec-7e2f-40ca-b86f-9e4c1178bd4d.png)
![image](https://user-images.githubusercontent.com/75979307/168481742-404f9164-9370-4aa8-a23e-34de35a66590.png)

 
5. Capturi ecran aplicație 
 ![image](https://user-images.githubusercontent.com/75979307/168481753-33f3794f-23ff-4f02-b6ee-c74e2c48a926.png)
![image](https://user-images.githubusercontent.com/75979307/168481760-f425deda-d2c7-40e6-8961-3d9d51973824.png)

 
6. Referințe
https://gurita-alexandru.gitbook.io/cloud-computing-2022-simpre/

