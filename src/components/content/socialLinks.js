import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faTelegram,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const socialLinks = [
  {
    name: 'Instagram',
    link: 'https://Instagram.com/truemoein',
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://LinkedIn.com/in/truemoein',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    name: 'StackOverflow',
    link: 'https://stackoverflow.com/users/6636584/moein-alizadeh',
    icon: <FontAwesomeIcon icon={faStackOverflow} />,
  },
  {
    name: 'Github',
    link: 'https://GitHub.com/TrueMoein',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: 'Twitter',
    link: 'https://Twitter.com/truemoein',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    name: 'Telegram',
    link: 'https://t.me/truemoein',
    icon: <FontAwesomeIcon icon={faTelegram} />,
  },
  {
    name: 'Mail',
    link: 'mailto:truemoein@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    name: 'Phone',
    link: 'tel:+989120989415',
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
]

export default socialLinks
