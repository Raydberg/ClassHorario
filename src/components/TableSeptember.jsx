import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { dataSeptember } from '../data/dataSeptember';
import { useTableData } from '../hooks/useTableData';
import { DesktopTable } from './DesktopTable';
import { MobileTable } from './MobileTable';

export const TableSeptember = () => {
  const data = useMemo(() => dataSeptember, []);
  const table = useTableData(data);

  return (
    <div className="overflow-x-auto">
      <DesktopTable table={table} />
      <MobileTable table={table} />
    </div>
  );
};

TableSeptember.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};