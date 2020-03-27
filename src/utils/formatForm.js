export default function formatForm(obj) {
  const form = new FormData();

  form.append('name', obj.name);
  form.append('last_name', obj.last_name);
  form.append('email', obj.email);
  form.append('description', obj.description);
  form.append('file', obj.file);

  if (obj.subject) {
    form.append('subject', obj.subject);
  } else if (obj.email_confirmation) {
    form.append('email_confirmation', obj.email_confirmation);
  }

  return form;
}
