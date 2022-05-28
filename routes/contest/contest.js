const express = require('express')
const contest_controller = require('../../controllers/contest/contest')

const router = express.Router()

router.post('api/admin/addcontest', contest_controller.addcontest)
router.get('api/admin/allcontest', contest_controller.getallcontest)
router.get('api/admin/findcontestbyid/:id', contest_controller.after_time_expired)


module.exports = router