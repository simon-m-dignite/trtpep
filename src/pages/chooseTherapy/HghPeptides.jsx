import React from 'react'
import Header from '../../components/HghPeptides/Header'
import Content from '../../components/HghPeptides/Content'
import HghPeptidesForm from '../../components/HghPeptides/HghPeptidesForm'
import BenefitsSection from '../../components/HghPeptides/BenefitsSection'
import Faqs from '../../components/HghPeptides/Faqs'
import Form from '../../components/TestosteroneTherapy/Form'

const TesamorelinTherapy = () => {
  return (
    <div className='w-full'>
      <Header/>
      <Content/>
      <BenefitsSection/>
      {/* <Faqs/> */}
      <Form/>
    </div>
  )
}

export default TesamorelinTherapy
