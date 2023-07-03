import React from 'react';
import DataTable from './components/data_table/DataTable';
import tableData from './data/tableData.json';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DataTable tableData={tableData.data} />
      </header>
    </div>
  );
};

export default App;
