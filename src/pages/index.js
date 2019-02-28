import React from 'react'
import socialLinks from '../components/content/socialLinks'
import PersonalCard from '../components/PersonalCard'

import SEO from '../components/templates/layout/seo'

const IndexPage = () => {
  return (
    <main>
      <SEO
        title="صفحه اصلی"
        keywords={['Moein Alizadeh', 'معین علیزاده', 'طراح وب']}
      />
      <PersonalCard icons={socialLinks} />
    </main>
  )
}

export default IndexPage
