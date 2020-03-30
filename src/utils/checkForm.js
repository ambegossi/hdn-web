import validEmail from './validEmail';

/**
 * Checks if the form was filled out correctly.
 *
 * @param {Object} obj - The form to be analyzed.
 * @return {string} - Returns the description in case of an error.
 *
 * @example
 *
 *     checkForm(form)
 */
export default function checkForm(obj) {
  // Checks if all fields have been filled
  if (
    !obj.name ||
    !obj.last_name ||
    !obj.email ||
    (!obj.subject && !obj.email_confirmation) ||
    !obj.description
  ) {
    return '* Preencha todos os campos';
  }

  // Check if the e-mail is valid
  if (!validEmail(obj.email)) {
    return '* Utilize um e-mail válido';
  }

  // Checks that the confirmation e-mail is the same as the e-mail
  if (obj.email_confirmation) {
    if (obj.email !== obj.email_confirmation) {
      return '* Os e-mails não são iguais';
    }
  }

  // Returns false if no error was found
  return false;
}
