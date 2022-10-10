import React, { useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CWidgetStatsC,
} from "@coreui/react";
import { CChartDoughnut } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import {
  cilSpeech,
  cilBasket,
  cilArrowBottom,
  cilArrowTop,
} from "@coreui/icons";
import "../DashboardComponents/style.scss";
import WidgetsDropdown from "../DashboardComponents/widgets/WidgetsDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/ProductsActions";

const Dashboard = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) {
      dispatch(getAllProducts());
    }
  }, [dispatch]);

  const mejorValorado = products.find((e) => e.rating === 5);
  const peorValorado = products.find((e) => e.rating === 1);
  console.log(peorValorado.name);

  let loreal = 0;
  let maybelline = 0;
  let revlon = 0;
  let PhysiciansFormula = 0;
  let elf = 0;
  let Pacífica = 0;
  let Almay = 0;
  let Colourpop = 0;

  products.map((e) =>
    e.brand === "l'oreal"
      ? (loreal += e.stock)
      : e.brand === "maybelline"
      ? (maybelline += e.stock)
      : e.brand === "revlon"
      ? (revlon += e.stock)
      : e.brand === "physicians Formula"
      ? (PhysiciansFormula += e.stock)
      : e.brand === "e.l.f"
      ? (elf += e.stock)
      : e.brand === "pacifica"
      ? (Pacífica += e.stock)
      : e.brand === "almay"
      ? (Almay += e.stock)
      : e.brand === "colourpop"
      ? (Colourpop += e.stock)
      : null
  );

  let stock =
    loreal +
    maybelline +
    revlon +
    PhysiciansFormula +
    elf +
    Pacífica +
    Almay +
    Colourpop;

  const brands = [...new Set(products.map((e) => e.brand))];

  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden", marginTop: "20px" }}>
      <WidgetsDropdown />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CCol xs={6}>
          <CCard
            className="mb-4"
            style={{ maxWidth: "800px", marginLeft: "20px" }}
          >
            <CCardHeader>Cantidad de productos por marca</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: brands,
                  datasets: [
                    {
                      backgroundColor: [
                        "#41B883",
                        "#E46651",
                        "#00D8FF",
                        "#DD1B16",
                        "brown",
                        "#000",
                        "pink",
                        "yellow",
                      ],
                      data: [
                        loreal,
                        maybelline,
                        revlon,
                        PhysiciansFormula,
                        elf,
                        Pacífica,
                        Almay,
                        Colourpop,
                      ],
                    },
                  ],
                }}
              />
            </CCardBody>
            <CCardFooter>Total: {stock} productos en stock</CCardFooter>
          </CCard>
        </CCol>
        {/* CAJAS DE ESTADÍSTICAS */}

        <CCol sm={3} md={3}>
          {" "}
          <CWidgetStatsC
            icon={<CIcon icon={cilSpeech} height={36} />}
            value="972"
            title="comments"
            progress={{ color: "info", value: 100 }}
            className="mb-4"
          />
          <CWidgetStatsC
            icon={<CIcon icon={cilArrowBottom} height={36} />}
            value="Peor valorado"
            title={peorValorado.name + " - " + peorValorado.rating + "⭐"}
            progress={{ color: "danger", value: 100 }}
            className="mb-4"
          />
        </CCol>
        <CCol sm={3} md={3}>
          {" "}
          <CWidgetStatsC
            icon={<CIcon icon={cilBasket} height={36} />}
            value="1238"
            title="Products sold"
            progress={{ color: "warning", value: 100 }}
            className="mb-4"
          />
          <CWidgetStatsC
            icon={<CIcon icon={cilArrowTop} height={36} />}
            value="Mejor valorado"
            title={mejorValorado.name + " - " + mejorValorado.rating + "⭐"}
            progress={{ color: "success", value: 100 }}
            className="mb-4"
          />
        </CCol>
      </div>
    </div>
  );
};

export default Dashboard;