export default class Character {
    constructor (name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Неправильная длина имени');
        }else {
            this.name = name;
        }
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!types.includes(type)) {
            throw new Error('Такого класса нет');
        } else {
            this.type = type;
        }
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
		this.defence = undefined;
    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить уровень, умер');
        }
    }
    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
