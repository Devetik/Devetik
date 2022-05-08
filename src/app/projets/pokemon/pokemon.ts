export class Pokemon {
  id!: number;
  name: string;
  hp: number;
  cp: number;
  def: number;
  Speed: number;
  Special: number;
  GIF: string;
  PNG: string;
  PNGHD: string;
  types: string[];
  Description: string;

  constructor(
    name: string = 'Entrer un nom',
    hp: number = 10,
    cp: number = 10,
    def: number = 10,
    Speed: number = 10,
    Special: number = 10,
    GIF: string = '',
    PNG: string = '',
    PNGHD: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/',
    Description: string = 'Introduir une description',
    types: string[] = ['Normal']
  ) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.def = def;
    this.Speed = Speed;
    this.Special = Special;
    this.GIF = GIF;
    this.PNG = PNG;
    this.PNGHD = PNGHD;
    this.Description = Description;
    this.types = types;
  }
}
