import dayjs from "dayjs";
import {
  Header,
  TableSeptember,
  TableNovember,
  SubTitle,
  ThemeToggle,
} from "../components";
import { useEffect, useState } from "react";
export const Horario = () => {
  const [currentDate, setCurrentDate] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(dayjs().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center dark:bg-gray-900 dark:text-white">
      <Header title="Mi Horario" themeToggle={<ThemeToggle />} currentDate={currentDate} />
      <div className="flex flex-col">
        <SubTitle title="15 de Septiembre - 02 de Noviembre" />
        <TableSeptember />
        <hr className="dark:border-gray-700" />
        <SubTitle title="10 de Noviembre - 28 de Diciembre" />
        <TableNovember />
      </div>
    </div>
  );
};
