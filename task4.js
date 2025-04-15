export class Player {
  constructor(name, level) {
   this.name = name
   this.level = level
  }
  info(){
    return console.log(`${this.name} has reached Level ${this.level}!`)
  }
  levelUp(){
    this.level += 1
    return null
  }
}