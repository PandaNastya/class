import Character from "../js/Swordsman";

test('object', () => {
    const character = new Character('Hero', 'Swordsman');
    const result = {
        name: 'Hero',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(character).toMatchObject(result);
});