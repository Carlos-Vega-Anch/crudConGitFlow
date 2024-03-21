import React, { useState } from 'react' 

const initialForm = {
    id:null,
    name:'',
    constellation:''
}


const CrudForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e)=>{
       
    }

    const handleSubmit = (e)=>{

    }

    const handleReset = (e)=>{
        setForm(initialForm)
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