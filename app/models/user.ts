import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') declare name: string;

  get fullName() {
    if (this.isNew) {
      return 'New User';
    }

    return this.name;
  }
}
