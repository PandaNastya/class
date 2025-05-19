import Character from "../js/character";

test('length name < 2', () => {
    expect(() => new Character('z', 'Zombie')).toThrowError(new Error('Неправильная длина имени'));
});

test('length name > 10', () => {
    expect(() => new Character('megatestname', 'Zombie')).toThrowError(new Error('Неправильная длина имени'));
});

test('wrong type', () => {
    expect(() => new Character('testname', 'Archer')).toThrowError(new Error('Такого класса нет'));
});

test('object', () => {
    const character = new Character('Hero', 'Magician');
    const result = {
        name: 'Hero',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };
    expect(character).toMatchObject(result);
});

test('health = 0 to levelUp', () => {
    const character = new Character('Hero', 'Magician');
    character.health = 0;
    expect(() => character.levelUp()).toThrowError(new Error('Нельзя повысить уровень, умер'));
});

test('levelUp', () => {
	const character = new Character('Hero', 'Magician');
	character.level = 1;
	character.attack = 10;
	character.defence = 10;
	character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(12);
    expect(character.defence).toBe(12);
	expect(character.health).toBe(100);
});

test('damage', () => {
	const character = new Character('Hero', 'Magician');
	character.defence = 10;
	character.damage(50);
    expect(character.health).toBe(55);
});

test('damage if health < 0', () => {
	const character = new Character('Hero', 'Magician');
	character.defence = 10;
	character.damage(200);
    expect(character.health).toBe(0);
});