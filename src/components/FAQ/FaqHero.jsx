import React from 'react'
import { styles } from '../../styles/styles'

const FaqHero = () => {
  return (
    <div className={`faq-hero flex items-center ${styles.paddingHorizontal} pt-32 lg:pt-24`}>
      <h1 className='text-white font-bold text-3xl'>Frequently Asked Questions</h1>
    </div>
  )
}

export default FaqHero
