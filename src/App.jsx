import React, { useState } from "react";
import CrudTable from "./CrudTable";
import CrudForm from "./CrudForm";

const initialDb = [
  { id: 1, name: "name1", constellation: "constellation1" },
  { id: 2, name: "name2", constellation: "constellation2" },
  { id: 3, name: "name3", constellation: "constellation3" },
];

function App() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null)
  const createData =(data)=>{
    data.id= Date.now();
   
    setDb([...db,data])
  }
  const updateData =(data)=>{


  }

  return (
    <>
    <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
    <CrudTable db={db} updateData={updateData}  dataToEdit={dataToEdit}  setDataToEdit={setDataToEdit}/>
    </>
  );
}

export default App;
