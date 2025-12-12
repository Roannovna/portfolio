export function ContactCard({ contact }) {
  if (!contact) return <section><p>Выберите контакт</p></section>;

  return (
    <section>
      <h2>{contact.name.first} {contact.name.last}</h2>
      <img src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`} />
      <ul>
        <li>
          <p>mobile</p>
          <div>{contact.phone}</div>
        </li>
        <li>
          <p>email</p>
          <div>{contact.email}</div>
        </li>
        <li>
          <p>birthday</p>
          <div>{contact.dob.date}</div>
        </li>
        <li>
          <p>address</p>
          <div>{contact.location.city} {contact.location.street.name} {contact.location.street.number}</div>
        </li>
      </ul>
    </section>
  );
}