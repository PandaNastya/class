import Character from "../js/Undead";

test('object', () => {
    const character = new Character('Hero', 'Undead');
    const result = {
        name: 'Hero',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(character).toMatchObject(result);
});