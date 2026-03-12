const { create, getAll, getById, getByUserId, update, delete: deleteProfile } = require("./profile.controller");
const router = require("express").Router();

// CREATE - POST new profile
router.post("/add", create);

// READ - GET all profiles
router.get("/", getAll);

// READ - GET profile by ID
router.get("/:id", getById);

// READ - GET profile by user_id
router.get("/user/:user_id", getByUserId);

// UPDATE - PUT/POST profile
router.put("/:id", update);

// DELETE - DELETE profile
router.delete("/:id", deleteProfile);

module.exports = router;
