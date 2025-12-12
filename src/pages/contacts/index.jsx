import { ContactCard } from "@/components/contacts-page/card";
import { ContactList } from "@/components/contacts-page/list";
import { useContacts } from "@/hooks/useContacts";
import { ipadTokens } from "@/tokens/ipad-ui-tokens";
import styles from "./contacts.module.css";

function Contacts() {
  const { contacts, selectedContact, setSelectedContact, loading, error } = useContacts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className={styles.contacts} style={{ gap: ipadTokens.spacing.uniGap }}>
      <section className={styles.contactsList}>
        <label className="search" htmlFor="search">
          <input type="text" placeholder="Search" />
        </label>
        <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
      </section>
      <section className={styles.contactsCard}>
        <ContactCard contact={selectedContact} />
      </section>
    </main>
  );
}

export default Contacts;
