import { PropTypes } from 'prop-types';

export const MobileTable = ({ table }) => (
  <div className="block md:hidden px-4">
    {table.getRowModel().rows.map(row => (
      <div key={row.id} className="mb-2 p-2 border rounded-lg shadow-sm bg-white dark:bg-gray-900">
        {row.getVisibleCells().map(cell => (
          <div key={cell.id} className="flex justify-between py-1">
            <span className="font-medium text-gray-500 dark:text-gray-300 text-sm">{cell.column.columnDef.header}:</span>
            <span className="text-gray-900 dark:text-gray-300 text-sm">{cell.getValue()}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

MobileTable.propTypes = {
  table: PropTypes.object.isRequired,
};