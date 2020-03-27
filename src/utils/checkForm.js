import validEmail from './validEmail';

export default function checkForm(obj) {
  if (
    !obj.name ||
    !obj.last_name ||
    !obj.email ||
    (!obj.subject && !obj.confirm_email) ||
    !obj.description
  ) {
    return '* Preencha todos os campos';
  }

  if (!validEmail(obj.email)) {
    return '* Utilize um e-mail válido';
  }

  return false;
}
