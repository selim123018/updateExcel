import React, { useState } from 'react';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
 
const UpdateExcel = () => {
  const [initialData, setInitialData] = useState(undefined);
  const [currentSheet, setCurrentSheet] = useState({});
 
  const handleUpload = (event) => {
    const file = event.target.files[0];
    //read excel file
    readFile(file)
      .then((readedData) => setInitialData(readedData))
      .catch((error) => console.error(error));
  };
 
  const save = () => {
    const result = generateObjects(currentSheet);
    //save array of objects to backend
  };
 
  return (
    <React.Fragment>
      <input
        type='file'
        accept='.xlsx'
        onChange={handleUpload}
      />
      <ReactExcel
        initialData={initialData}
        onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
      <button onClick={save}>
          Save to API
      </button>
    </React.Fragment>
  );
}

export default UpdateExcel;