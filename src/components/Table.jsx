import TableRow from "./TableRow";

import "./Table.css";

const Table = ({ medalCounties, onClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {medalCounties.map((country) => (
          <TableRow key={country.name} country={country} onClick={onClick} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
