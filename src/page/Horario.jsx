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
        <SubTitle title="24 de Marzo - 18 de Mayo" />
        <TableSeptember />
        <hr className="dark:border-gray-700" />
        <SubTitle title="19 de Mayo - 13 de Julio" />
        <TableNovember />
      </div>
    </div>
  );
};
