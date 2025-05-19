import Character from "../js/Magician";

test('object', () => {
    const character = new Character('Hero', 'Magician');
    const result = {
        name: 'Hero',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(character).toMatchObject(result);
});