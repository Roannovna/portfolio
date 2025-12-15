import { ContactCard } from "@/components/contacts-page/card";
import { ContactList } from "@/components/contacts-page/list";
import { useContacts } from "@/hooks/useContacts";
import { useGroupedContacts } from "@/hooks/useGroupedContacts";
import { ipadTokens } from "@/tokens/ipad-ui-tokens";
import styles from "./contacts.module.css";

function Contacts() {
  const { contacts, selectedContact, setSelectedContact, loading, error } = useContacts();

  const groupedContacts = useGroupedContacts(contacts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className={styles.contacts} style={{ gap: ipadTokens.spacing.uniGap }}>
      <section className={styles.contactsList}>
        <label className="search" htmlFor="search">
          <input type="text" placeholder="Search" />
        </label>
        {Object.entries(groupedContacts).map(([letter, contacts]) => (
          <div key={letter}>
            <h2>{letter}</h2>
            <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
          </div>
        ))}
      </section>
      <section className={styles.contactsCard}>
        <ContactCard contact={selectedContact} />
      </section>
    </main>
  );
}

export default Contacts;
