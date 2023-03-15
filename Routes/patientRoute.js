const express = require("express");

// createing express router
const router = express.Router();


// importing methods from patient controller
const  {addPaitent ,getAllPaitent ,deletePatient,editPatient ,getPatient} = require("../Controller/patientController");



// route to get all the patients details
router.get("/",getAllPaitent);


// route to get the specific  patient details
router.get("/:id",getPatient);


// route to add the patient details
router.post("/",addPaitent);

// route to delete the patient details
router.delete("/:id",deletePatient);

// route to edit the patient details
router.put("/:id",editPatient);

module.exports = router;
