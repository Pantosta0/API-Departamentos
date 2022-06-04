import express from "express";
import normalizeString from "../utils/normalizeString.js";
import checkCity from "../utils/checkCity.js";
import {
  CUNDINAMARCA,
  BOLIVAR,
  ATLANTICO,
  MAGDALENA,
  BARRANCABERMEJA,
  ERROR,
} from "../constants.js";

const router = express.Router();

router.get("/:city", (req, res) => {
  const cityParam = normalizeString(req.params.city);

  if (checkCity("bogota", cityParam)) {
    res.json(CUNDINAMARCA(req.params.city).outputDepartment);

  } else if (checkCity("cartagena", cityParam)) {
    res.json(BOLIVAR(req.params.city).outputDepartment);

  } else if (checkCity("barranquilla", cityParam)) {
    res.json(ATLANTICO(req.params.city).outputDepartment);

  } else if (checkCity("santa marta", cityParam)) {
    res.json(MAGDALENA(req.params.city).outputDepartment);

  } else if (checkCity("barrancabermeja", cityParam)) {
    res.json(BARRANCABERMEJA);

  } else {
    res.json(ERROR);
  }
});
export default router;
