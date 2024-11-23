const admin = require("../models/adminSchema");
const fs = require("fs");

module.exports.addAdminData = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    req.body.name = req.body.fname + " " + req.body.lname;
    await admin.create(req.body);
    return res.redirect("/view_admin");
  } catch (error) {
    console.log(error);
    return res.redirect("/view_admin");
  }
};

module.exports.deleteAdmin = async (req, res) => {
  try {
    let { adminId } = req.params;
    let deleteData = await admin.findByIdAndDelete(adminId);
    console.log("admin data  deleted");
    fs.unlinkSync(deleteData.image);
    return res.redirect("/view_admin");
  } catch (error) {
    console.log(error);
    return res.redirect("/view_admin");
  }
};

module.exports.editAdmin = async (req, res) => {
  try {
    let { adminId } = req.params;
    req.body.name = req.body.fname + "" + req.body.lname;
    if (req.file) {
      req.body.image = req.file.path;
      fs.unlinkSync(req.body.oldImage);
    }
    let adminData = await admin.findByIdAndUpdate(adminId, req.body);
    return res.redirect("/view_admin");
  } catch (error) {
    console.log(error);
    return res.redirect("/view_admin");
  }
};

module.exports.logoutAdmin = (req, res) => {
  res.clearCookie("adminId");
  return res.redirect("/login");
};
