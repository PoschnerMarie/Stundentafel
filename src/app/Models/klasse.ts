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

  static fromDoc(document: any){
    const obj = new Klasse(
      document['K_Bezeichnung'],
      document['Kuerzel']
    )
    return obj;
  }
}