// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
}


// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
    return this.strength;
}
Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    }
    else {
        return this.name + " has died in act of combat";
    }
};
Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(health, strength);
    this.health = health;
    this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function () {
    return this.strength;
}
Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    }
    else {
        return "A Saxon has died in combat";
    }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var Vikingos = this.vikingArmy[indexViking];
    var Saxons = this.saxonArmy[indexSaxon];
    var dead = Saxons.receiveDamage(Vikingos.attack());
  
    if (Saxon.health >= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
  
    return dead;
    }

    War.prototype.saxonAttack = function () {
        var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var Vikingos = this.vikingArmy[indexSaxon];
        var Saxons = this.saxonArmy[indexViking];
        var dead= Vikingos.receiveDamage(Saxons.attack());

        if (Viking.health >=0) {
            this.vikingArmy.splice(indexViking, 1);
        }
    }
