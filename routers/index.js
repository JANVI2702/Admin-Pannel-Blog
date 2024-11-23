const { Router } = require("express");
const ApRouter = require("./adminPanelRouter");
const adminRouter = require("./adminRouter");
const blogRouter = require("./blogRouter");

const router = Router();

router.use("/", ApRouter);
router.use("/", adminRouter);
router.use("/blog", blogRouter);

module.exports = router;
