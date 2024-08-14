import { Header } from "../components/Header";
import { TableSeptember } from "../components/TableSeptember";
import {TableNovember} from '../components/TableNovember'
import {SubTitle} from '../components/SubTitle'
export const Horario = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header title="Mi Horario" />
      <div className="flex flex-col">
        <SubTitle title="9 de Septiembre - 27 de Octubre" />
        <TableSeptember />
        <hr></hr>
        <SubTitle title="4 de Noviembre - 22 de Diciembre" />
        <TableNovember />
      </div>
    </div>
  );
};
