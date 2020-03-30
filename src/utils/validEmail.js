/**
 * Checks whether the email format is valid.
 *
 * @param {string} email - The e-mail to be analyzed.
 * @return {boolean} - True if the e-mail is valid, False if it is not.
 *
 * @example
 *
 *     validEmail('example@example.com')
 */
export default function validEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
