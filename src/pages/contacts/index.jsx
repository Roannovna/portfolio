import { ContactCard } from "@/components/contacts-page/card";
import { ContactList } from "@/components/contacts-page/list";
import { SearchInput } from "@/components/contacts-page/search-input";
import { useContacts } from "@/hooks/useContacts";
import { useDebounce } from "@/hooks/useDebounce";
import { useGroupedContacts } from "@/hooks/useGroupedContacts";
import { ipadTokens } from "@/tokens/ipad-ui-tokens";
import { useMemo, useState } from "react";
import styles from "./contacts.module.css";


function Contacts() {
  const { contacts, selectedContact, setSelectedContact, loading, error } = useContacts();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const filteredContacts = useMemo(() => {
    if (!debouncedSearchQuery) return contacts;

    return contacts.filter((contact) => {
      const fullName = `${contact.name.first} ${contact.name.last}`.toLowerCase();
      return fullName.includes(debouncedSearchQuery.toLowerCase());
    });
  }, [contacts, debouncedSearchQuery]);

  const groupedContacts = useGroupedContacts(filteredContacts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.contacts__wrapper}>
      <main className={styles.contacts} style={{ gap: ipadTokens.spacing.uniGap }}>
        <section className={styles.contacts_list}>
          <SearchInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          {Object.entries(groupedContacts).map(([letter, contacts]) => (
            <div key={letter}>
              <h2>{letter}</h2>
              <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
            </div>
          ))}
        </section>
        <section className={styles.contacts_card}>
          <ContactCard contact={selectedContact} />
        </section>
      </main>
    </div>
  );
}

export default Contacts;
