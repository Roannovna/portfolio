import { fetchContacts } from "@/services/contactAPI";
import { useEffect, useState } from "react";

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts()
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return {
    contacts,
    selectedContact,
    loading,
    error,
    setSelectedContact
  };
}