import style from './contacts.module.css';
import { contactIcons } from '@/assets/contact-icons/imp.js';
import { ipadTokens, Container } from '@/tokens/ipad-ui-tokens.jsx';

const iconSize = { width: ipadTokens.icon.app.w, height: ipadTokens.icon.app.w };

export function Contacts({ id, className }) {
  return (
    <Container
    id={id}
    className={className}
    {...ipadTokens.widget.medium} 
      style= {{ backgroundColor: 'var(--pink)', gap: '30px' }}
      >
      <div className={style.icon_group}>
        <a href="https://github.com/roannovna" target='_blank'><img src={contactIcons.github} alt="github" style={iconSize}/></a>
        <p>GitHub</p>
      </div>
      <div className={style.icon_group}>
        <a href="https://t.me/topotulina" target='_blank'><img src={contactIcons.telegram} alt="telegram" style={iconSize}/></a>
        <p>Telegram</p>
      </div>
      <div className={style.icon_group}>
        <a href="mailto:roannovna@gmail.com"><img src={contactIcons.email} alt="email" style={iconSize}/></a>
        <p>Email</p>
      </div>
    </Container>
  )
}