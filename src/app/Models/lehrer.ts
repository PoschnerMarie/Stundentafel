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

  getKuerzel(){
    return this.kuerzel
  }

  getAbwesenheitsnotiz(){
    return this.abwesenheitsnotiz
  }

  getFortbildungs_ID(){
    return this.fortbildungs_ID
  }

  static fromDoc(document: any){
    const obj = new Lehrer(
      document['Kuerzel'],
      document['Abwesenheitsnotiz'],
      document['Fortbildungs_ID']
    )
    return obj;
  }
}