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
  const styles = {
    color: "white",
  };

  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
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
          style={styles}
          color="primary"
          value="Usuarios registrados"
          title={usuariosRegistrados}
          onClick={() => navigate("/dashboard/update")}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={styles}
          className="mb-4"
          color="warning"
          value="Usuarios verificados"
          title={usuariosVerificados.length}
          onClick={() => navigate("/dashboard/update")}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={styles}
          className="mb-4"
          color="success"
          value="Usuarios no verificados "
          title={usuariosNoVerificados.length}
          onClick={() => navigate("/dashboard/update")}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          style={styles}
          className="mb-4"
          color="danger"
          value="Usuarios baneados "
          title={usuariosBaneados.length}
          onClick={() => navigate("/dashboard/update")}
        />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
