export function ContactList({ contacts, setSelectedContact }) {

  return (
    <section>
      <h2>Contact List</h2>
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