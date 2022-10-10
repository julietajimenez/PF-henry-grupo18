import React, { useEffect } from "react";
import {
  CRow,
  CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/actions/UsersAction";
import { cilOptions } from "@coreui/icons";
import { CChartLine } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import { useNavigate } from "react-router-dom";

const WidgetsDropdown = () => {
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate()
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
          action={
            <CDropdown alignment="end">
              <CDropdownToggle
                color="transparent"
                caret={false}
                className="p-0"
              >
                <CIcon
                  icon={cilOptions}
                  className="text-high-emphasis-inverse"
                />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => navigate('update/')}>Actualizar Usuario</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
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
        />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
