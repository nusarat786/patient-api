const Patient = require("../Model/patientModel");


// callback function that adds patient detail to the mongodb
exports.addPaitent =  async (req, res) => {
    try {
      const patient = new Patient(req.body);
      const result = await patient.save();
      res.status(201).json({
        success: true,
        message: "Patient created successfully",
        patient: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to create patient",
        error: error.message,
      });
    }
  }

  // callback function to delete patient detail from the mongodb
  exports.deletePatient = async(req,res) => {
    try{
        console.log(req.params.id);
        const patient = await Patient.findByIdAndRemove({_id: req.params.id});

        //console.log(patient)
        if(!patient){
            return(res.status(404).json({
                success:false,
                message:"patient with id: " + req.params.id + " not found"
            }))
        }

        return (res.status(201).json({
            success:true,
            message:"patient with id: " + req.params.id + " is removed"
        }))

    }catch(err){
        res.status(501).json({
            success:false,
            message:err.message,
            Patient: patient
        })
    }
  }
  

  // callback function to edit patient details
  exports.editPatient = async(req,res) => {
    try{
        
        const patient = await Patient.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,
        runValidators:true}
        )

        console.log(patient)

    if(!patient){
        return(res.status(404).json({
            success:false,
            message:"patient with id: " + req.params.id + " not found"
        }))
    }

    const patientNewRecord = await Patient.findById(req.params.id)
    return (res.status(201).json({
        success:true,
        message:"patient with id: " + req.params.id + " is updated",
        Patient:patientNewRecord
    }))

    
    }catch(err){
        res.status(501).json({
            success:false,
            message:err.message
        })
    }
  }
 

  // callback function to get pirticulaer patient details
  exports.getPatient = async(req,res) => {
    try{
        
        const patient= await Patient.findById(req.params.id)

    if(!patient){
        return(res.status(404).json({
            success:false,
            message:"patient with id: " + req.params.id + " not found"
        }))
    }

    return (res.status(201).json({
        success:true,
        Patient:patient
    }))
    
    }catch(err){
        res.status(501).json({
            success:false,
            message:err.message
        })
    }
  }


  // callback function to get all patients details
  
  exports.getAllPaitent = async(req ,res) =>{
    try{
        const patients = await Patient.find()

        res.status(201).json({
            success : true,
            message: "Patient Data Fatched Successfully",
            Patients:patients,
        })   
    }catch(err){
        res.status(501).json({
            success : false ,
            message : "Patient Data Can Not Be Fatched"
        })

    }
  }




  