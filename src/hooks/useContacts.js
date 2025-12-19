import { myCard } from "@/components/contacts-page/data/my-card";
import { fetchContacts } from "@/services/contactAPI";
import { useEffect, useState } from "react";

export const useContacts = () => {
	const [contacts, setContacts] = useState([]);
	const [selectedContact, setSelectedContact] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchContacts()
			.then((data) => {
				const allContacts = [myCard, ...data];
				setContacts(allContacts);
				setSelectedContact(myCard); // Default selection
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	return {
		contacts,
		selectedContact,
		loading,
		error,
		setSelectedContact,
	};
};
