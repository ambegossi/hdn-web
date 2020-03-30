/**
 * WorkWithUs Model Class
 * @typedef WorkWithUs
 * @property {string} name - The name of the work with us.
 * @property {string} last_name - The last name of the work with us.
 * @property {string} email - The e-mail of the work with us.
 * @property {string} email_confirmation - The e-mail confirmation of the work with us.
 * @property {string} description - The description of the work with us.
 * @property {any} file - The file of the work with us.
 */
export default class WorkWithUs {
  constructor() {
    this.name = '';
    this.last_name = '';
    this.email = '';
    this.email_confirmation = '';
    this.description = '';
    this.file = null;
  }
}
