import express from "express";
import { obtenerEstadisticas } from "../controllers/estadisticas.controller.js";
import {
  exportarEstadisticasExcel,
  exportarEstadisticasPDF,
  exportarGatosCSV,
  exportarGatosLista,
  exportarGatosJSON,
  exportarGatosSQL,
} from "../controllers/exportacion.controller.js";
import { capturarInfoSolicitud } from "../middlewares/auditoria.js";

const router = express.Router();

router.use(capturarInfoSolicitud);

// Estadísticas en JSON
router.get("/estadisticas", obtenerEstadisticas);

// Descarga el archivo Excel
router.get("/estadisticas/excel", exportarEstadisticasExcel);

// Descarga el archivo PDF
router.get("/estadisticas/pdf", exportarEstadisticasPDF);

router.get("/estadisticas/csv", exportarGatosCSV);

router.get("/lista", exportarGatosLista);
router.get("/json", exportarGatosJSON);
router.get("/sql", exportarGatosSQL);


export default router;
