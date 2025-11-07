import style from './contacts.module.css';
import github from './icons/github.svg';
import telegram from './icons/telegram.svg';
import email from './icons/email.svg';
import { ipadTokens, Сontainer } from '/src/tokens/ipad-ui-tokens';

const iconSize = { width: '59px', height: '59px' };

export function Contacts() {
  return (
    <Сontainer 
      {...ipadTokens.widget.medium} 
      style= {{ backgroundColor: 'var(--pink)', gap: '30px' }}
      >
    {/* <div className={style.contacts_container}> */}
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
    {/* </div> */}
    </Сontainer>
  )
}