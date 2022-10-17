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
 
  cilBalanceScale,
  cilBrush,
  cilStarHalf,
  cilStar,
} from "@coreui/icons";
import WidgetsDropdown from "../DashboardComponents/widgets/WidgetsDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/ProductsActions";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";

const Dashboard = () => {
  const navigate = useNavigate();


  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length <= 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch,products.length]);

  const mejorValorado = products.find((e) => e.rating === 5);
  let titleMVP = "";
  if (mejorValorado) {
    titleMVP = mejorValorado.name;
  } else {
    titleMVP = "No se pudo cargar el producto.";
  }

  const peorValorado = products.find((e) => e.rating === 1);
  let titleWVP = "";
  if (peorValorado) {
    titleWVP = peorValorado.name;
  } else {
    titleMVP = "No se pudo cargar el producto.";
  }

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
  if (products.length <= 0) {
    return <Loader />;
  }

  return (
    <div style={{minHeight:"100vh", maxWidth: "100vw", overflowX: "hidden", marginTop: "20px" }}>
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
            title="Reseñas totales"
            progress={{ color: "info", value: 100 }}
            className="mb-4"
          />
          <CWidgetStatsC
            onClick={() => navigate("/dashboard/products/create")}
            icon={<CIcon icon={cilBrush} height={36} />}
            value="Añadir producto"
            title="Crear un producto nuevo"
            progress={{ color: "default", value: 100 }}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
          <CWidgetStatsC
            onClick={() => navigate(`/products/${peorValorado.id}`)}
            style={{ cursor: "pointer" }}
            icon={<CIcon icon={cilStarHalf} height={36} />}
            value="Peor valorado"
            title={titleWVP}
            progress={{ color: "danger", value: 100 }}
            className="mb-4"
          />
        </CCol>
        <CCol sm={3} md={3}>
          {" "}
          <CWidgetStatsC
            icon={<CIcon icon={cilBalanceScale} height={36} />}
            value="1238"
            title="Productos vendidos"
            progress={{ color: "warning", value: 100 }}
            className="mb-4"
          />
          <CWidgetStatsC
            onClick={() => navigate("/dashboard/products/update")}
            icon={<CIcon icon={cilBasket} height={36} />}
            value="Productos"
            title="Lista de todos los productos"
            progress={{ color: "dark", value: 100 }}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
          <CWidgetStatsC
            onClick={() => navigate(`/products/${mejorValorado.id}`)}
            style={{ cursor: "pointer" }}
            icon={<CIcon icon={cilStar} height={36} />}
            value="Mejor valorado"
            title={titleMVP}
            progress={{ color: "success", value: 100 }}
            className="mb-4"
          />
        </CCol>
      </div>
    </div>
  );
};

export default Dashboard;
