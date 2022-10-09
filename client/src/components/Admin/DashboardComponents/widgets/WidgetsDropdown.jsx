import React, { useEffect } from "react";
import { CRow, CCol, CWidgetStatsA } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/actions/UsersAction";

const WidgetsDropdown = () => {
  const users = useSelector((state) => state.users.users);
  const usuariosRegistrados = users.length;
  const usuariosVerificados = [];
  const usuariosNoVerificados = [];
  const usuariosBaneados = [];

  users.map((e) =>
    e.status == "VERIFIED"
      ? usuariosVerificados.push(e)
      : usuariosNoVerificados.push(e)
  );
  users.map((e) => (e.active == false ? usuariosBaneados.push(e) : null));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="secondary"
          value="Usuarios registrados"
          title={usuariosRegistrados}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value="Usuarios verificados"
          title={usuariosVerificados.length}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="success"
          value="Usuarios no verificados "
          title={usuariosNoVerificados.length}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value="Usuarios baneados "
          title={usuariosBaneados.length}
          // action={
          //   <CDropdown alignment="end">
          //     <CDropdownToggle color="transparent" caret={false} className="p-0">
          //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
          //     </CDropdownToggle>
          //     <CDropdownMenu>
          //       <CDropdownItem>Action</CDropdownItem>
          //       <CDropdownItem>Another action</CDropdownItem>
          //       <CDropdownItem>Something else here...</CDropdownItem>
          //       <CDropdownItem disabled>Disabled action</CDropdownItem>
          //     </CDropdownMenu>
          //   </CDropdown>
          // }
          // chart={
          //   <CChartLine
          //     className="mt-3 mx-3"
          //     style={{ height: '70px' }}
          //     data={{
          //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          //       datasets: [
          //         {
          //           label: 'My First dataset',
          //           backgroundColor: 'transparent',
          //           borderColor: 'rgba(255,255,255,.55)',
          //           pointBackgroundColor: getStyle('--cui-primary'),
          //           data: [65, 59, 84, 84, 51, 55, 40],
          //         },
          //       ],
          //     }}
          //     options={{
          //       plugins: {
          //         legend: {
          //           display: false,
          //         },
          //       },
          //       maintainAspectRatio: false,
          //       scales: {
          //         x: {
          //           grid: {
          //             display: false,
          //             drawBorder: false,
          //           },
          //           ticks: {
          //             display: false,
          //           },
          //         },
          //         y: {
          //           min: 30,
          //           max: 89,
          //           display: false,
          //           grid: {
          //             display: false,
          //           },
          //           ticks: {
          //             display: false,
          //           },
          //         },
          //       },
          //       elements: {
          //         line: {
          //           borderWidth: 1,
          //           tension: 0.4,
          //         },
          //         point: {
          //           radius: 4,
          //           hitRadius: 10,
          //           hoverRadius: 4,
          //         },
          //       },
          //     }}
          //   />
          // }
        />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
