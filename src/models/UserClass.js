/**
 * User Model Class
 * @typedef User
 * @property {string} id - The id of the user.
 * @property {string} name - The name of the user.
 * @property {string} email - The e-mail of the user.
 * @property {string} password - The password of the user.
 */
export default class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
