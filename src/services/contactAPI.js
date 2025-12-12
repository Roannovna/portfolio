export async function fetchContacts() {
  const response = await fetch('https://randomuser.me/api/?results=200&nat=us');
  const data = await response.json();
  return data.results;
}