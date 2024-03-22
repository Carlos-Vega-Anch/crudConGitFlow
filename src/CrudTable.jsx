import React, { useState } from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({db,updateData,dataToEdit,setDataToEdit}) => {
        //const {id,name,constellation}=data



  return (
    <>
    <table>
        <thead>
            <tr>
            <th>name</th>
            <th>constellation</th>
            <th>actions</th>
            </tr>
        </thead>


        <tbody>
            {
                db.length === 0 ? <tr><td colSpan='3'>Sin datos</td></tr>:db.map(el =><CrudTableRow key ={el.id} el={el} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>)
                   
                
            }
        </tbody>
    </table>
    </>
  )
}

export default CrudTable
