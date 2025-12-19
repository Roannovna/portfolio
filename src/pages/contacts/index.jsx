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

  const myContact = contacts.find(c => c.login.uuid === 'my-personal-card-uuid');
  const otherContacts = filteredContacts.filter(c => c.login.uuid !== 'my-personal-card-uuid');

  const groupedContacts = useGroupedContacts(otherContacts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.contacts__wrapper}>
      <main className={styles.contacts} style={{ gap: ipadTokens.spacing.uniGap }}>
        <section className={styles.contacts_list}>
          <SearchInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <div className={styles.contacts_list__content}>
            {myContact && (
              <div 
                className={styles.contacts_list__myCard} 
                onClick={() => setSelectedContact(myContact)}
              >
                <img src={myContact.picture.large} alt="" className={styles.contacts_list__myCard__img}/>
                <div className={styles.contacts_list__myCard__name}>
                  {myContact.name.first} {myContact.name.last}
                  <p className={styles.contacts_list__myCard__info}>Моя карточка</p>
                </div>
              </div>
            )}
            {Object.entries(groupedContacts).map(([letter, contacts]) => (
              <div key={letter}>
                <h2 className={styles.contacts_list__letter}>{letter}</h2>
                <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.contacts_card}>
          <ContactCard contact={selectedContact} />
        </section>
      </main>
    </div>
  );
}

export default Contacts;
