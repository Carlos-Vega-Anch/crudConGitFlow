import React from 'react'

const CrudTableRow = ({el,updateData,dataToEdit,setDataToEdit}) => {
  return (
    <>
     <tr>
                        <td>{el.name}</td>
                        <td>{el.constellation}</td>
                        <td>
                        <button onClick={()=>setDataToEdit(el)}>Editar</button>
                        <button>Eliminar</button>
                        </td>
    </tr>
    
    </>
  )
}

export default CrudTableRow