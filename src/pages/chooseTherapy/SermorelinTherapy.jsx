import React from 'react'
import SermorelinHeader from '../../components/SermorelinTherapy/SermorelinHeader'
import SermorelinContent from '../../components/SermorelinTherapy/SermorelinContent'
import SermorelinBenefits from '../../components/SermorelinTherapy/SermorelinBenefits'
import HghPeptidesForm from '../../components/HghPeptides/HghPeptidesForm'
import Form from '../../components/TestosteroneTherapy/Form'

const SermorelinTherapy = () => {
  return (
    <div className='w-full'>
      <SermorelinHeader/>
      <SermorelinContent/>
      <SermorelinBenefits/>
      <Form/>
    </div>
  )
}

export default SermorelinTherapy
