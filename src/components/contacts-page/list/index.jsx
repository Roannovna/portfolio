export function ContactList({ contacts, setSelectedContact }) {

  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.login.uuid} onClick={() => setSelectedContact(contact)}>
            <img src={contact.picture.thumbnail} alt="" />
            {contact.name.first} {contact.name.last}
          </li>
        ))}
      </ul>
    </section>
  );
}