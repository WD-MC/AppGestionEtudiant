/***************************************** Enregistrer un étudiant *****************************************************/

// recupere tous les Id
let nouveau = document.getElementById("nouveau");
let Annuler = document.getElementById("annuler");
let Ajouter = document.getElementById("ajouter");
let Enregistrer = document.getElementById("enregistrer");

dataStudent = document.getElementById("newStudent");
noteStudent = document.getElementById("noteStudent");

let createStudent = document.getElementById("createStudent");
let noteEtudiant = document.getElementById("noteEtudiant");

// Identifiant de chaque eleve
let id= 0;
//identifiant de chaque matiere et note
let idNote = 0;

// tableau de stockage des donnees de chaque etudiant
tableauGlobal =new Array();

// desactive les boutons
Annuler.style.display = 'none';
Enregistrer.disabled = true;

/*affiche les block pour remplir les donnees d'un etudiant*/
function afficher_form() {

    dataStudent.style.display = 'flex';
    noteStudent.style.display = 'flex';
    nouveau.disabled = true;
    Annuler.style.display = 'inline-block';
    Enregistrer.disabled = false;
    tableauMat= new Array();
    tableauEtu = new Array();
}
/*affiche block pour remplir les donnees d'un etudiant*/

/*annule les block */
function annuler_form(){

    dataStudent.style.display = 'none';
    noteStudent.style.display = 'none';
    nouveau.disabled = false;
    Annuler.style.display = 'none';
    Enregistrer.disabled = true;

    // supprime les tableaux et efface tous les notes ajoutées
    delete tableauMat;
    delete tableauEtu;

    if (idNote!=0) {
        for (let index = 1; index < idNote+1; index++) {
            var tr = document.getElementById(index+"tr");
            tr.innerHTML='';   
        }
    }
    
}
/*annuler les block */

/*crée les balises pour l'affichage des données */
function createData(){
    var elt = document.createElement("tr"); elt.style.textAlign="center";

    // ajoute un id a la balise cree
    id=id+1;
    elt.setAttribute("id","etud"+id);

    elt1 = document.createElement("td"); 
    elt1.setAttribute("id","num"+id)
    elt2 = document.createElement("td");
    elt2.setAttribute("id","n1")
    elt3 = document.createElement("td");
    elt3.setAttribute("id","n2")
    elt4 = document.createElement("td");
    elt4.setAttribute("id","n3")
    elt5 = document.createElement("td");
    elt5.setAttribute("id","n4")
    elt6 = document.createElement("td");
    elt6.setAttribute("id","n5")
    elt7 = document.createElement("td");
    
    i3 = document.createElement("i");
    i3.setAttribute("id",id);
    i4 = document.createElement("i");
    i4.setAttribute("id","minus"+id);
    i5 = document.createElement("i");
    i5.setAttribute("id",id);

    createStudent.appendChild(elt);
    elt.appendChild(elt1);
    elt.appendChild(elt2);
    elt.appendChild(elt3);
    elt.appendChild(elt4);
    elt.appendChild(elt5);
    elt.appendChild(elt6);
    elt.appendChild(elt7);
    
    elt7.appendChild(i3);
    i3.classList.add("fa");
    i3.classList.add("fa-plus");
    i3.style.color= 'white';
    i3.style.backgroundColor= 'green';
    i3.style.borderRadius= '50%';
    i3.style.padding= '2px';
    i3.style.cursor= 'pointer';

    elt7.appendChild(i4);
    i4.classList.add("fa");
    i4.classList.add("fa-minus");
    i4.style.color= 'white';
    i4.style.backgroundColor= 'red';
    i4.style.borderRadius= '50%';
    i4.style.padding= '2px';
    i4.style.marginLeft= '4px';
    i4.style.cursor= 'pointer';
    
    elt7.appendChild(i5);
    i5.classList.add("fa");
    i5.classList.add("fa-check");
    i5.style.color= 'white';
    i5.style.backgroundColor= 'yellow';
    i5.style.borderRadius= '50%';
    i5.style.padding= '2px';
    i5.style.marginLeft= '4px';
    i5.style.cursor= 'pointer';

    return id;
}
/*cree les balises pour l'affichage des données */

/*cree les balises pour l'affichage des notes */
function createNote() {
    noteLine = document.createElement("tr"); noteLine.style.textAlign="center";

    // ajoute un id a la balise cree
    idNote=idNote+1;
    noteLine.setAttribute("id",idNote+"tr");

    Enote = document.createElement("td");
    Ematiere = document.createElement("td");
    Ematiere.setAttribute("id","mat"+idNote);
    Eaction = document.createElement("td");
    i1 = document.createElement("i");
    i1.setAttribute("id",idNote);

    noteEtudiant.appendChild(noteLine);
    Eaction.appendChild(i1);
    noteLine.appendChild(Ematiere);
    noteLine.appendChild(Enote);
    noteLine.appendChild(Eaction);

    return idNote;
}
/*cree les balises pour l'affichage des notes */

/*Ajoute les matieres et notes */

function ajoutNote() {
    
    var note = document.getElementById("note").value;
    var matiere = document.getElementById("matiere").value;
    

    if (note.length !=0 && matiere!=0){
        if (note<=20 && note >=0) {
            //verifie si la matiere a deja ete ajoute
            for (let index = 0; index < idNote; index++) {
                if (tableauMat[index] == matiere) {
                    alert("cette matiere a deja ete ajoute!");
                    return false;
                }  
            }
            createNote();
            Ematiere.append(matiere);
            Enote.append(note);
            
            
            i1.classList.add("fa");
            i1.classList.add("fa-minus");
            i1.style.color= 'white';
            i1.style.backgroundColor= 'red';
            i1.style.borderRadius= '50%';
            i1.style.padding= '2px';
            i1.style.marginLeft= '4px';
            i1.style.cursor= 'pointer';
            tableauMat.push(matiere,note);

            // ajoute l'evenement
            i1.addEventListener('click',function () {
                // recupere l'element cliquer
                value = this.id
                // recupere la ligne correspondante
                eltSupp = document.getElementById(value+"tr");
                // recupere la matiere a supprimer
                n1 = document.getElementById("mat"+value).textContent;
                // supprime la ligne correspondante
                noteEtudiant.removeChild(eltSupp);
                
                // parcours le tableau des matieres et supprime les matieres correspondante
                for (let index = 0; index < idNote; index++) {
                    if (tableauMat[index] == n1) {
                        tableauMat.splice(index,2);
                    }
                }
            })
    
            // renitialise les champs
            document.getElementById("form6").reset();document.getElementById("form3").reset();
            document.getElementById("form7").reset();document.getElementById("form5").reset();

        } else{
            alert("La note ne doit pas dépasser 20 ou etre inférieur a 0! ");
        }
    } else{
        alert("veuillez remplir tous les champs");
    }
    
}
/*Ajoute les matieres et notes */


/*Enregistrer les donnees de l'etudiant*/
function saveData(){


    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    naissance = document.getElementById("naissance").value;
    parcours = document.getElementById("parcours").value;
    taille = document.getElementById("taille").value;
    matricule = document.getElementById("matricule").value;
    date = document.getElementById("date").value;

    if (nom.length !=0 && prenom.length!=0 && naissance.length!=0 && parcours!=0
    && taille.length!=0 && matricule.length!=0 && sexe!="" && date.length!=0 && tableauMat.length!=0) {
        existe = 0;
        //verifie si un etudiant existe deja
        for (let index = 0; index < tableauGlobal.length; index++) {
            if (tableauGlobal[index][5] == matricule || tableauGlobal[index][1] == nom) {
                existe  =1;
                alert("cet etudiant existe deja!");
                return false;
            }
        }
        if (existe==0) {
            if (confirm("Etes-vous sûr de vouloir enregistrer ces données?")) {
            
                createData();
    
                if (document.getElementById("sexe").checked) {
                    sexe = document.getElementById("sexe");
                }
                if (document.getElementById("sexe1").checked) {
                    sexe = document.getElementById("sexe1");
                }
                elt1.append(matricule);
                elt2.append(nom," ",prenom);
                elt3.append(naissance);
                elt4.append(parcours);
                elt5.append(sexe.value);
                elt6.append(date);
        
                dataStudent.style.display = 'none';
                noteStudent.style.display = 'none';
                nouveau.disabled = false;
                Annuler.style.display = 'none';
                Enregistrer.disabled = true;
    
                // efface les notes qui ont été crées
                for (let index = 1; index < idNote+1; index++) {
                    var tr = document.getElementById(index+"tr");
                    tr.innerHTML='';   
                }
                
                // ajoute les données dans le tableau final
                tableauEtu.push(id,nom,prenom,naissance,parcours,matricule,taille,sexe.value,date);
                tableauEtu = tableauEtu.concat(tableauMat);
                tableauGlobal.push(tableauEtu);
                
                // ajoute l'evenement pour supprimer un etudiant
                i4.addEventListener('click',function () {
                    // recupere l'element cliquer
                    valeur = this.id
                    v = valeur.charAt(5);
                    // recupere la ligne correspondante
                    eltSupp = document.getElementById("etud"+v);
                    // recupere l'etudiant' a supprimer
                    n1 = document.getElementById("num"+v).textContent;
                    // supprime la ligne correspondante
                    createStudent.removeChild(eltSupp);
                    
                    // parcours le tableau des matieres et supprime les matieres correspondante
                    for (let index = 0; index < tableauGlobal.length; index++) {
                        if (tableauGlobal[index][5] == n1) {
                            tableauGlobal.splice(index,1);
                        }
                    }
                })

                // ajoute l'evenement pour modifier les données de l'etudiant
                i5.addEventListener('click', function () {
                    modifier(this.id);
                });

                // ajoute l'evenement pour valider les données modifier
                i3.addEventListener('click', function () {
                    validerModification(this.id);
                })
        
                document.getElementById("form").reset();document.getElementById("form1").reset();
                document.getElementById("form2").reset();document.getElementById("form3").reset();
                document.getElementById("form4").reset();document.getElementById("form5").reset();
            }
        }
        
    }else{
        alert ("veuillez remplir tous les informations et ajouter les notes de l'étudiant");
        //return false;
    }
}

/*Enregistrer les donnees de l'etudiant*/


/*Modifier les donnees de l'etudiant*/

modelt = 0;
function modifier(id) {

    valeur = id;
    dataStudent.style.display = 'flex';
    nouveau.disabled = true;
    Annuler.style.display = 'inline-block';
    infosEtu.disabled = true;

    nom = document.getElementById("nom");
    prenom = document.getElementById("prenom");
    naissance = document.getElementById("naissance");
    parcours = document.getElementById("parcours");
    taille = document.getElementById("taille");
    matricule = document.getElementById("matricule");
    date = document.getElementById("date");
    minus = document.getElementById("minus"+id);
    minus.style.display='none';

    for (let index = 0; index < tableauGlobal.length; index++) {
        if (tableauGlobal[index][0] == valeur) {
            nom.value = tableauGlobal[index][1];
            prenom.value = tableauGlobal[index][2];
            naissance.value = tableauGlobal[index][3];
            parcours.value = tableauGlobal[index][4];
            matricule.value = tableauGlobal[index][5];
            taille.value = tableauGlobal[index][6];
            sexe.value = tableauGlobal[index][7];
            date.value = tableauGlobal[index][8];

            modelt = 1;
            return modelt;
        }
    }
}

function validerModification(id) {
    // verifie la modification
    if (modelt ==1) {
        valeur1 = id;

        nom = document.getElementById("nom").value;
        prenom = document.getElementById("prenom").value;
        naissance = document.getElementById("naissance").value;
        parcours = document.getElementById("parcours").value;
        taille = document.getElementById("taille").value;
        matricule = document.getElementById("matricule").value;
        date = document.getElementById("date").value;

        if (nom.length !=0 && prenom.length!=0 && naissance.length!=0 && parcours!=0
            && taille.length!=0 && matricule.length!=0 && sexe!="" && date.length!=0 && idNote!=0) {

            for (let index = 0; index < tableauGlobal.length; index++) {
                if (tableauGlobal[index][0] == valeur1) {

                    tableauGlobal[index][1] = nom;
                    tableauGlobal[index][2] = prenom;
                    tableauGlobal[index][3] = naissance;
                    tableauGlobal[index][4] = parcours;
                    tableauGlobal[index][5] = matricule;
                    tableauGlobal[index][6] = taille;
                    tableauGlobal[index][7] = sexe.value;
                    tableauGlobal[index][8] = date;

                    document.getElementById("num"+valeur1).textContent = matricule;
                    document.getElementById("n1").textContent = (nom," ",prenom);
                    document.getElementById("n2").textContent = (naissance);
                    document.getElementById("n3").textContent = (parcours);
                    document.getElementById("n4").textContent = (sexe.value);
                    document.getElementById("n5").textContent = (date);

                    minus = document.getElementById("minus"+id);
                    minus.style.display='inline-block';

                    document.getElementById("form").reset();document.getElementById("form1").reset();
                    document.getElementById("form2").reset();document.getElementById("form3").reset();
                    document.getElementById("form4").reset();document.getElementById("form5").reset();
                }
            }
                    
            modelt = 0;
            dataStudent.style.display = 'none';
            nouveau.disabled = false;
            Annuler.style.display = 'none';
            
            return modelt;
        }else{
            alert ("veuillez remplir tous les informations");
            return false;
        }
    }
}
/*Modifier les donnees de l'etudiant*/

/***************************************** Enregistrer un étudiant *****************************************************/

/***************************************** Afficher les details de l'étudiant *****************************************************/

let masquerZone = document.getElementById("masquer");
let afficher = document.getElementById("aff");
let zone = document.getElementById("zone");

infosEtu = document.getElementById("infosEtu");
infosEtu1 = document.getElementById("infosEtu1");
infosEtu2 = document.getElementById("infosEtu2");
infosEtu3 = document.getElementById("infosEtu3");
infosEtu4 = document.getElementById("infosEtu4");
infosEtu5 = document.getElementById("infosEtu5");

let listeMatiere = document.getElementById("listeMatiere");

afficher.style.display = 'none';

//  masquer les données
function masquer() {
    zone.style.display = 'none';
    masquerZone.style.display = 'none';
    afficher.style.display = 'inline-block';
}
// Afficher les données masquer
function Afficher() {
    zone.style.display = 'flex';
    masquerZone.style.display = 'inline-block';
    afficher.style.display = 'none';
}

// variable qui recupère si une note a été affiché
noteCree = 0;
// recupere le numero de l'étudiant
function PromptMessage() {
    trouve = 0;
    var matricule = prompt("Saisir le matricule de l'étudiant donc vous voulez afficher les informations :", "")
    detailEtudiant(matricule);
    
}

function remove() {
    r=9;
    if (noteCree == 1) {
        console.log(listeMatiere);
        for (let k = 1; k < l+1 ; k++) {

            ligne = document.getElementById(r+"mat");
            listeMatiere.removeChild(ligne);
            r=r+2;
        }
        // retire les infos de l'etudiant
        infosEtu.innerHTML="<p id='indexEtu'><strong>Noms et Prénoms: </strong></p>"
        infosEtu1.innerHTML="<p id='indexEtu1'><strong>Date et lieu de Naissance: </strong></p>"
        infosEtu2.innerHTML="<p id='indexEtu2'><strong>Sexe: </strong></p>"
        infosEtu3.innerHTML="<p id='indexEtu3'><strong>Parcours: </strong></p>"
        infosEtu4.innerHTML="<p id='indexEtu4'><strong>Taille: </strong></p>"
        infosEtu5.innerHTML="<h4 id='indexEtu5'>Matricule: </h4>"
    }   
}

function detailEtudiant(matricule) {

    //verifie si le matricule, l'etudiant est existant && matricule <= tableauGlobal.length
    if (matricule!=0 && id!=0 ) {
        
        // supprime les notes du précédent étudiant
        remove();
        l=0;
        // recupere le matricule de l'etudiant
        for (let index = 0; index < tableauGlobal.length; index++) {

            if (tableauGlobal[index][5] == matricule) {
                trouve = 1;
                indexEtu = index;
                nbre_matiere = tableauGlobal[index].length - 9;
            }
        }
        if (trouve == 1) {

            // affiche les infos de l'etudiant
            infosEtu.innerHTML="<p id='indexEtu'><strong>Noms et Prénoms: </strong>"+ tableauGlobal[indexEtu][1]+' '+ tableauGlobal[indexEtu][2]+"</p>"
            infosEtu1.innerHTML="<p id='indexEtu1'><strong>Date et lieu de Naissance: </strong>"+ tableauGlobal[indexEtu][8]+" à "+ tableauGlobal[indexEtu][3]+"</p>"
            infosEtu2.innerHTML="<p id='indexEtu2'><strong>Sexe: </strong>"+ tableauGlobal[indexEtu][7]+"</p>"
            infosEtu3.innerHTML="<p id='indexEtu3'><strong>Parcours: </strong>"+ tableauGlobal[indexEtu][4]+"</p>"
            infosEtu4.innerHTML="<p id='indexEtu4'><strong>Taille: </strong>"+ tableauGlobal[indexEtu][6]+"</p>"
            infosEtu5.innerHTML="<h4 id='indexEtu5'>Matricule: "+ tableauGlobal[indexEtu][5]+"</h4>"

            // affiche les matieres
            j=9;
            for (let i= 0; i < nbre_matiere; i= i+2) {
                
                ligne = document.createElement("tr");
                listeMatiere.appendChild(ligne);
                ligne.setAttribute("id",j+"mat");

                td1 = document.createElement("td");
                td2 = document.createElement("td");

                ligne.appendChild(td1);
                ligne.appendChild(td2);

                td1.append(tableauGlobal[indexEtu][j]);
                td2.append(tableauGlobal[indexEtu][j+1]);
                j= j+2;

                //recupere le nombre de matiere affiches
                l=l+1;
                nbre_matiere_prec = nbre_matiere;
            }
            
            noteCree=1; 
        }else{
            alert("cet etudiant n'existe pas! Cliquer a nouveau sur voir les details :", "");
        }
        
    }else{
        alert("cet etudiant n'existe pas! Cliquer a nouveau sur voir les details :", "");
    }
}

/***************************************** Afficher les details de l'étudiant *****************************************************/