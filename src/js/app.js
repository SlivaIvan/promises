export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  // eslint-disable-next-line no-undef
  [Simbol.iterator]() {
    const i = 0;
    const { characters } = this;

    return {
      next() {
        if (i < characters.length) {
          return { value: characters[i], done: false };
        }
        return { done: true };
      },
    };
  }
}
