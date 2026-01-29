import { PropTypes } from 'prop-types';
import { flexRender } from '@tanstack/react-table';

export const DesktopTable = ({ table }) => (
  <div className="hidden md:block w-full">
    <table className="w-full border-collapse">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} className="border-b-2 border-gray-300 dark:border-gray-600">
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                className="px-6 py-5 lg:px-10 lg:py-6 xl:px-12 xl:py-7 text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider"
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
          >
            {row.getVisibleCells().map(cell => (
              <td
                key={cell.id}
                className="px-6 py-5 lg:px-10 lg:py-6 xl:px-12 xl:py-7 text-sm lg:text-base xl:text-lg text-gray-800 dark:text-gray-200"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

DesktopTable.propTypes = {
  table: PropTypes.object.isRequired,
};