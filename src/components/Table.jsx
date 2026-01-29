import { useMemo } from 'react';
import { data } from '../data/data';
import { useTableData } from '../hooks/useTableData';
import { DesktopTable } from './DesktopTable';
import { MobileTable } from './MobileTable';

export const Table = () => {
    const tableData = useMemo(() => data, []);
    const table = useTableData(tableData);

    return (
        <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-32">
            <div className="mb-8 text-center">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-white">
                    23 Mar - 12 Jul
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm lg:text-base">
                    Semestre Académico 2026-I
                </p>
            </div>
            <div className="overflow-x-auto">
                <DesktopTable table={table} />
                <MobileTable table={table} />
            </div>
        </div>
    );
};
