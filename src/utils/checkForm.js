import validEmail from './validEmail';

export default function checkForm(obj) {
  if (
    !obj.name ||
    !obj.last_name ||
    !obj.email ||
    (!obj.subject && !obj.email_confirmation) ||
    !obj.description
  ) {
    return '* Preencha todos os campos';
  }

  if (!validEmail(obj.email)) {
    return '* Utilize um e-mail válido';
  }

  if (obj.email_confirmation) {
    if (obj.email !== obj.email_confirmation) {
      return '* Os e-mails não são iguais';
    }
  }

  return false;
}
