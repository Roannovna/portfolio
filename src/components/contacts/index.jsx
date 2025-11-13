import style from './contacts.module.css';
import github from './icons/github.svg';
import telegram from './icons/telegram.svg';
import email from './icons/email.svg';
import { ipadTokens, Container } from '../../tokens/ipad-ui-tokens.jsx';

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
        <a href="https://github.com/roannovna" target='_blank'><img src={github} alt="github" style={iconSize}/></a>
        <p>GitHub</p>
      </div>
      <div className={style.icon_group}>
        <a href="https://t.me/topotulina" target='_blank'><img src={telegram} alt="telegram" style={iconSize}/></a>
        <p>Telegram</p>
      </div>
      <div className={style.icon_group}>
        <a href="mailto:roannovna@gmail.com"><img src={email} alt="email" style={iconSize}/></a>
        <p>Email</p>
      </div>
    </Container>
  )
}