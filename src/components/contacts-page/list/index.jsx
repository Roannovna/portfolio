import styles from "./list.module.css";

export function ContactList({ contacts, setSelectedContact }) {
  return (
    <section>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li className={styles.list__item} key={contact.login.uuid} onClick={() => setSelectedContact(contact)}>
            <img className={styles.item__img } src={contact.picture.thumbnail} alt="" />
            {contact.name.first} {contact.name.last}
          </li>
        ))}
      </ul>
    </section>
  );
}