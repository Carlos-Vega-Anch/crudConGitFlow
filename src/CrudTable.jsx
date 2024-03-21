import React, { useState } from 'react'

const CrudTable = ({data}) => {
        //const {id,name,constellation}=data

    const [table, setTable] = useState(data)


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
  
                table.map(el=>
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.constellation}</td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </tr>
                )
            }
        </tbody>
    </table>
    </>
  )
}

export default CrudTable
