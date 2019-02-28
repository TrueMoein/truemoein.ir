import React from 'react'
import MoeinAlizadeh from '../assets/images/MoeinAlizadeh.jpg'

export default function PersonalCard(props) {
  const { icons } = props
  return (
    <div className="personal-card">
      <img
        className="profile-picture"
        src={MoeinAlizadeh}
        alt="معین علیزاده - Moein Alizadeh"
      />

      <div className="social-links">
        {icons.map(i => (
          <div key={i.name} className="icon-box">
            <a href={i.link} target="_blank" rel="noreferrer noopener">
              {i.icon}
            </a>
          </div>
        ))}
      </div>

      <footer>
        Moein Alizadeh, Web developer - © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
