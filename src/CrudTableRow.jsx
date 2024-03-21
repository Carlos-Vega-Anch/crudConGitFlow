import React from 'react'

const CrudTableRow = ({el}) => {
  return (
    <>
     <tr>
                        <td>{el.name}</td>
                        <td>{el.constellation}</td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </tr>
    
    </>
  )
}

export default CrudTableRow