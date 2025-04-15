export class Player {
  constructor(name, level) {
   this.name = name
   this.level = level
   this.exp = 0
  }
  info(){
    return console.log(`${this.name} ha alcanzado el nivel ${this.level}!`)
  }
  levelUp(){
    this.level += 1
    this.info()
    return null
  }
  expUp(){
    this.exp += 100
    console.log("Ha ganado 100 puntos de exp.")
    if (this.exp == 300) {
      this.exp = 0;
      this.levelUp();
    }
    return null
  }
}

const player = new Player("Ignacio",1)

player.expUp()
player.expUp()
player.expUp()