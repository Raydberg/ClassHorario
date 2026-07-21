import { useMemo } from 'react';
import { dataMarzo } from '../data/dataMarzo';
import { dataMayo } from '../data/dataMayo';
import { useTableData } from '../hooks/useTableData';
import { DesktopTable } from './DesktopTable';
import { MobileTable } from './MobileTable';

export const Table = () => {
    const tableDataMarzo = useMemo(() => dataMarzo, []);
    const tableDataMayo = useMemo(() => dataMayo, []);
    const tableMarzo = useTableData(tableDataMarzo);
    const tableMayo = useTableData(tableDataMayo);

    return (
        <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-32">
            <div className="mb-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                    Semestre Académico 2026-II
                </p>
            </div>

            {/* Tabla Marzo */}
            <div className="mb-12">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                17 Agos - 11 Oct
                </h3>
                <div className="overflow-x-auto">
                    <DesktopTable table={tableMarzo} />
                    <MobileTable table={tableMarzo} />
                </div>
            </div>

            {/* Tabla Mayo */}
            <div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    12 Oct - 06 Dic
                </h3>
                <div className="overflow-x-auto">
                    <DesktopTable table={tableMayo} />
                    <MobileTable table={tableMayo} />
                </div>
            </div>
        </div>
    );
};
