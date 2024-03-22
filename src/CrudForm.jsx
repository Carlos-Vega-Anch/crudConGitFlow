import React, { useEffect, useState } from 'react'

const initialForm = {
    id:null,
    name:'',
    constellation:''
}


const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);
    console.log(form)

    useEffect(() => {
     if(dataToEdit){
      setForm(dataToEdit)
     }else{
      setForm(initialForm)
     }
    }, [dataToEdit])
    
    const handleChange = (e)=>{

       setForm({
        ...form,
        [e.target.name]:e.target.value
       })
    }

    const handleSubmit = (e)=>{
          e.preventDefault()
          if(!form.name || !form.constellation){
            alert('datos incompletos')
            return
          }
          if(form.id === null){
            createData(form)
          }else{updateData(form)}

          handleReset()
    }

    const handleReset = (e)=>{
        setForm(initialForm)
        setDataToEdit(null)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name}   placeholder='ingrese nombre' onChange={handleChange}/>
        <input type="text" name='constellation'  value={form.constellation} placeholder='ingrese constellation' onChange={handleChange}/>
        <input type="submit" value='enviar'  />
        <input type="reset" value='limpiar' onClick={handleReset} />
    </form>
    </>
  )
}

export default CrudForm