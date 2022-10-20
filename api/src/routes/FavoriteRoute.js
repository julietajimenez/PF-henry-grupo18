const { Router } = require("express");
const {
  postFavorites,
  getFavorites,
  deleteFavorites,
} = require("../controllers/FavoritesController");
const router = Router();

router.post("/create", postFavorites);
router.get("/:idUser", getFavorites);
router.delete("/delete", deleteFavorites);

module.exports = router;
