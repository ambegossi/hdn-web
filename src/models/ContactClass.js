/**
 * Contact Model Class
 * @typedef Contact
 * @property {string} name - The name of the contact.
 * @property {string} last_name - The last name of the contact.
 * @property {string} email - The e-mail of the contact.
 * @property {string} subject - The subject of the contact.
 * @property {string} description - The description of the contact.
 * @property {any} file - The file of the contact.
 */
export default class Contact {
  constructor() {
    this.name = '';
    this.last_name = '';
    this.email = '';
    this.subject = '';
    this.description = '';
    this.file = null;
  }
}
