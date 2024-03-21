import React, { useState } from "react";
import CrudTable from "./CrudTable";

const initialDb = [
  { id: 1, name: "name1", constellation: "constellation1" },
  { id: 2, name: "name2", constellation: "constellation2" },
  { id: 3, name: "name3", constellation: "constellation3" },
];

function App() {
  const [dB, setDB] = useState(initialDb);

  return (
    <>
      <CrudTable data={initialDb} />
    </>
  );
}

export default App;
