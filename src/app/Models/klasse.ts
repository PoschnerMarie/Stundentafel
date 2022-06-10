/*
* Autoren:  Mirella Pluta, Marie Poschner
* Klasse:   FS191
* Datum:    09.06.2022
* Inhalt:   Die Klasse "Klasse" ist ein Model, in das Daten aus der Datenbank übertragen und als Objekt dargestellt werden können.
*/
export class Klasse { 
  
  K_Bezeichnung: string;
  Kuerzel: string;

  constructor(
    K_Bezeichnung: string,
    Kuerzel: string
  ){
    this.K_Bezeichnung = K_Bezeichnung;
    this.Kuerzel = Kuerzel;
  }
  // Wandelt das Observable in ein Lehrerobjekt um
  static fromDoc(document: any){
    const obj = new Klasse(
      document['K_Bezeichnung'],
      document['Kuerzel']
    )
    return obj;
  }
}