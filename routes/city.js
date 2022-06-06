import express from "express";
import normalizeString from "../utils/normalizeString.js";
import checkCity from "../utils/checkCity.js";
import {
  CUNDINAMARCA,
  BOLIVAR,
  ATLANTICO,
  MAGDALENA,
  ERROR,
} from "../constants.js";

const router = express.Router();

router.get("/:city", (req, res) => {
  const cityParam = normalizeString(req.params.city);

  if (checkCity("bogota", cityParam)) {
    res.json({"departamento": CUNDINAMARCA(req.params.city).outputDepartment});

  } else if (checkCity("cartagena", cityParam)) {
    res.json({"departamento": BOLIVAR(req.params.city).outputDepartment});

  } else if (checkCity("barranquilla", cityParam)) {
    res.json({"departamento": ATLANTICO(req.params.city).outputDepartment});

  } else if (checkCity("santa marta", cityParam)) {
    res.json({"departamento": MAGDALENA(req.params.city).outputDepartment});

  } else {
    res.json(ERROR);
  }
});
export default router;
