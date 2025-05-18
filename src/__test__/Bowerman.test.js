import Character from "../js/Bowerman";

test('object', () => {
    const character = new Character('Hero', 'Bowman');
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