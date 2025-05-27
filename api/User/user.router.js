const { create, getById , get, update, deleteById,createUser,blockById,updateOVMICNO} = require("./user.controller");
const router = require("express").Router();


router.post("/add", create)
        .post("/:id/added", getById)
        .post("/getUser", get)
        .post("/:id/updateUser", update)
        .post("/blockById", blockById)
        .post("/updateOVMICNO", updateOVMICNO)
        .post("/createUser",createUser)
        .delete("/:id/deleteUser", deleteById);

module.exports = router;