import json from './parser';
import read from './raeder';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((resolveRead) => json(resolveRead).then((resolveJson) => {
      const saving = JSON.parse(resolveJson);
      return saving;
    }).then((saving) => {
      const savingObject = new GameSaving(saving.id, saving.created, saving.userInfo);
      return savingObject;
    }).catch((error) => {
      throw error;
    }));
  }
}
