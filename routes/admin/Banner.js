const express = require('express')
const router = express.Router()
const bannerController = require('../../controllers/admin/Banner')
const uploadImage = require('../../middlewares/Banner')

const upload = require('../../middlewares/profileimage')

router.post("/", uploadImage.single("bannerImage"), bannerController.saveBanner) // saveBanner
router.post('/:id', bannerController.updateBanner) // to update the banner
router.delete("/id", bannerController.deletebanner) // Delete banner

router.post('/personal', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
console.log("function called")
    next()
  }, bannerController.personalmulter)

module.exports = router