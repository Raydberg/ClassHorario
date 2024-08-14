import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";

export const useTableData = (data) => {
    
        const columns = useMemo(
          () => [
            { header: 'Dia', accessorKey: 'day' },
            { header: 'Curso', accessorKey: 'course' },
            { header: 'Hora', accessorKey: 'hour' },
            { header: 'Tipo', accessorKey: 'type' },
            { header: 'Salon', accessorKey: 'salon' },
            { header: 'Lugar', accessorKey: 'lugar' },
          ],
          []
        );
      
      const table = useReactTable({
          data,
          columns,
          getCoreRowModel: getCoreRowModel(),
        });
      
        return table;
}
