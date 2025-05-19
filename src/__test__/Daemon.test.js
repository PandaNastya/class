import Character from "../js/Daemon";

test('object', () => {
    const character = new Character('Hero', 'Daemon');
    const result = {
        name: 'Hero',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(character).toMatchObject(result);
});
