import { Fragment } from "react";

// <Table data={data} config={config} keyFn={keyFn} />
// Takes two lists of objects
// config => [{ label: "ColumnName", render: (item) => item.name }]
// ===> render is a function to display whatever data in the cell for that column
// ===> Optional: header: () => <th className="bg-red-500">Score</th>
//      ===> customise header
// data = [{ name: "Orange", color: "bg-orange-500", score: "5" }]
// ===> object contain a key value for each column
// Takes a keyFn => how a key can be generated from the data

function Table({ config, data, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((item) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(item)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(item)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
