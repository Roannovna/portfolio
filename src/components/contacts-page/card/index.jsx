import { ipadTokens } from "@/tokens/ipad-ui-tokens";
import { formatBirthDate } from "@/utils/formatDate";
import { myCard } from "../data/my-card";
import styles from "./card.module.css";

export function ContactCard({ contact }) {
  if (!contact) contact = myCard;

  return (
    <section className={styles.card} style={{"--bg-img": `url(${contact.picture.large})`, borderRadius: ipadTokens.widget.large.br}}>
      <img className={styles.card__img} src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`} />
      <h2 className={styles.card__title}>{contact.name.first} {contact.name.last}</h2>
      <ul className={styles.card__list} style={{borderRadius: ipadTokens.widget.large.br}}>
        <li className={styles.list__item}>
          <p>mobile</p>
          <div>{contact.phone}</div>
        </li>
        <li className={styles.list__item}>
          <p>email</p>
          <div>{contact.email}</div>
        </li>
        <li className={styles.list__item}>
          <p>birthday</p>
          <div>{formatBirthDate(contact.dob.date)}</div>
        </li>
        <li className={styles.list__item}>
          <p>address</p>
          <div>{contact.location.city} {contact.location.street.name} {contact.location.street.number}</div>
        </li>
      </ul>
    </section>
  );
}