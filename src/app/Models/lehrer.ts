/*
* Autoren:  Mirella Pluta, Marie Poschner
* Klasse:   FS191
* Datum:    09.06.2022
* Inhalt:   Die Klasse Lehrer ist ein Model, in das Daten aus der Datenbank übertragen und als Objekt dargestellt werden können.
*/
export class Lehrer { 
  kuerzel: string;
  abwesenheitsnotiz: string;
  fortbildungs_ID: number;

  constructor(
    kuerzel: string,
    abwesenheitsnotiz: string,
    fortbildungs_ID: number
  ){
    this.kuerzel = kuerzel;
    this.abwesenheitsnotiz = abwesenheitsnotiz;
    this.fortbildungs_ID = fortbildungs_ID;
  }
  // Wandelt das Observable in ein Lehrerobjekt um
  static fromDoc(document: any){
    const obj = new Lehrer(
      document['Kuerzel'],
      document['Abwesenheitsnotiz'],
      document['Fortbildungs_ID']
    )
    return obj;
  }
}