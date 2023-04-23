import React from 'react';
import cn from 'classnames';

export interface ITable {
  className?: string;
  data: Object[];
  config: {
    label: string;
    render: Function;
  }[];
  keyFn: Function;
}

const Table: React.FC<ITable> = ({ className, data, config, keyFn }) => {
  const style = {
    table: 'table-auto',
    tRow: '',
    tHeader: 'text-left border-2 pl-2 pr-4 mr-1',
    tData: 'border-2 py-2 pl-1 pr-2',
  };

  const renderedHeaders = config.map((column) => {
    return (
      <th key={column.label} className={style.tHeader}>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className={style.tData} key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className={style.tRow} key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className={cn(style.table, className)}>
      <thead>
        <tr className={style.tRow}>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
