export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = 0;
    this.inventory = {
      "objetos": {},
      "objetos_clave": {},
      "armas": {}
    };
    this.party = [this.name];
  }

  info() {
    console.log(`${this.name} | Nivel: ${this.level} | exp: ${this.exp}`);
    console.log(`Los miembros de tu grupo son: ${this.party.join(", ")}`);
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`);
    return;
  }

  expUp() {
    this.exp += 100;
    console.log("Ha ganado 100 puntos de exp.");
    if (this.exp === 300) {
      this.exp = 0;
      this.levelUp();
    }
    return;
  }

  addParty(name) {
    this.party.push(name);
    console.log(`Se ha agregado a ${name} al grupo de ${this.name}`);
  }

  removeParty(name) {
    this.party = this.party.filter(x => x !== name);
  }

  addItem(type, name, cantidad=1) {
    if (!this.inventory[type]){
      console.log(`Tipo de ítem no válido: ${type}`);
      return;
    }

    if (this.inventory[type][name]){
      this.inventory[type][name] += cantidad;
    }
    else {
      this.inventory[type][name] = cantidad;
    }

    console.log(`$ name} x${cantidad} añadido al inventario (${type})`);
  }

  removeItem(tipo, nombre, cantidad = 1) {
    if (!this.inventory[tipo] || !this.inventory[tipo][nombre]) {
      console.log(`${nombre} no se encuentra en el inventario (${tipo})`);
      return;
    }

    this.inventory[tipo][nombre] -= cantidad;
    if (this.inventory[tipo][nombre] <= 0) {
      delete this.inventory[tipo][nombre];
      console.log(`${nombre} ha sido eliminado del inventario (${tipo})`);
    } else {
      console.log(`${nombre} x${cantidad} removido. Quedan ${this.inventory[tipo][nombre]}`);
    }
  }

  showInventory() {
    console.log("Inventario actual:");
    for (const tipo in this.inventory) {
      console.log(`- ${tipo}:`);
      const items = this.inventory[tipo];
      if (Object.keys(items).length === 0) {
        console.log("  (vacío)");
      } else {
        for (const nombre in items) {
          console.log(`  ${nombre} x${items[nombre]}`);
        }
      }
    }
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

console.clear()

const player3 = new Player("Alya", 1);
player3.addItem("objetos", "Poción", 3);
player3.addItem("objetos", "Potys", 5);
player3.addItem("armas", "Espada de Hierro");
player3.removeItem("objeto", "Poción", 1);
player3.showInventory();
