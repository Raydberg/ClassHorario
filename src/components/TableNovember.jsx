import  { useMemo } from 'react';
import PropTypes from 'prop-types';
import { dataNovember } from "../data/dataNovember";
import { useTableData } from '../hooks/useTableData';
import { DesktopTable } from './DesktopTable';
import { MobileTable } from './MobileTable';
export const TableNovember = () => {
  const data = useMemo(() => dataNovember, []);
  const table = useTableData(data);

  return (
    <div className="overflow-x-auto">
      <DesktopTable table={table} />
      <MobileTable table={table} />
    </div>
  );
};

TableNovember.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};