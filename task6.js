export class Player {
  constructor(name, level) {
   this.name = name
   this.level = level
   this.exp = 0
   this.party = [this.name]
  }
  info(){
    console.log(`${this.name} | Nivel: ${this.level} | exp: ${this.exp}\n Los mimbros de tu grupo son: ${this.party.join(", ")}`)
  }
  levelUp(){
    this.level += 1
    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`)
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
  addParty(name){
    this.party.push(name)
    console.log(`Se ha agregado a ${name} al grupo de ${this.name}`)
  }
  removeParty(name){
    this.party = this.party.filter(x => x !== name)
  }
}

const player = new Player("Ignacio",1)
const player2 = new Player("Lala",1)

player.info()

player.addParty(player2.name)
player2.addParty(player.name)

player.removeParty(player2.name)
player.info()


player.expUp()
player.expUp()
player.expUp()