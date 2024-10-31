import Button from "./Button";

const TableRow = ({ country, onClick }) => {
  return (
    <tr key={country.name}>
      <td>{country.name}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <Button
          type="button"
          name="삭제"
          onClick={() => onClick(country.name)}
        />
      </td>
    </tr>
  );
};

export default TableRow;
