const { Router } = require("express");
const AdminCtl = require("../controllers/adminControl");
const { uploadImage } = require("../middlewares/adminmiddleware");

const adminRouter = Router();

adminRouter.post("/add_admin", uploadImage, AdminCtl.addAdminData);
adminRouter.get("/delete_admin/:adminId", AdminCtl.deleteAdmin);
adminRouter.post("/edit_admin/:adminId", uploadImage, AdminCtl.editAdmin);
adminRouter.get("/logout", AdminCtl.logoutAdmin);
module.exports = adminRouter;
