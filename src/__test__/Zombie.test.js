import Character from "../js/Zombie";

test('object', () => {
    const character = new Character('Hero', 'Zombie');
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