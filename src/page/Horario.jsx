import dayjs from "dayjs";
import {
  Header,
  Table,
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
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Header title="Mi Horario" themeToggle={<ThemeToggle />} currentDate={currentDate} />
      <div className="flex-1 flex flex-col items-center py-8 lg:py-12 xl:py-16 w-full">
        <Table />
      </div>
    </div>
  );
};
