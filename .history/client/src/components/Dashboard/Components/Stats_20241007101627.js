import React from 'react';

function Stats() {

  const allcars=useSelector((store)=>store.car?.car)
  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Users</h3>
        <p>20</p>
        <p className="negative">-8%</p>
      </div>
      <div className="stat-card">
        <h3>Cars</h3>
        <p>{cars.length}</p>
        <p className="positive">+12%</p>
      </div>
      <div className="stat-card">
        <h3>Income</h3>
        <p>$2,000</p>
        <p className="positive">+24%</p>
      </div>
      <div className="stat-card">
        <h3>Expenses</h3>
        <p>$425</p>
        <p className="negative">-10%</p>
      </div>
    </div>
  );
}

export default Stats;