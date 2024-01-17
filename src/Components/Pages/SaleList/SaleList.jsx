import React from 'react'
import '../../Pages/PageComponent.css'
import SaleTable from './SaleTable'
import SaleAddBtn from './SaleListBtn'

const SaleList = () => {
  return (
    <>
      <div className='SaleListBody'>
          <h1>Sale List</h1>
          <div style={{marginTop: '20px', marginLeft: '20px',}}><SaleAddBtn /></div>
          <div style={{maxWidth: 1500, margin: '20px',}}><SaleTable /></div>
      </div>
    </>
  )
}

export default SaleList
