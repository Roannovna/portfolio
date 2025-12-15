import { useMemo } from "react";

export const useGroupedContacts = (contacts) => {
  return useMemo(() => {
    if (!contacts) return {};

    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.first.localeCompare(b.name.first, 'en', { sensitivity: 'base' })
    );

    return sortedContacts.reduce((acc, contact) => {
      const firstLatter = contact.name.first[0].toUpperCase();

      if (!acc[firstLatter]) {
        acc[firstLatter] = [];
      }

      acc[firstLatter].push(contact);
      return acc;
    }, {});
  }, [contacts]);
};