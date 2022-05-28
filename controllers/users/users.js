const userModel = require('../../model/users/users')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')
const {otp} = require('../../model/users/otpmodule')


exports.signup = async(req, res) =>{

    const {  mobile } = req.body 

    try {
            const alreadyUser = await userModel.findOne({mobile})
            console.log(alreadyUser)
            
            if(alreadyUser){
                return res.status(401).json({message : "User alredy exists"})
            }

            const newUser = new userModel(req.body)
            await newUser.save()

            res.send(newUser)
        
            } catch (error) {

                    console.log(error)

            }
}


// all Users
exports.allusers = async (req, res) => {

  console.log("all users run success")

  const result = await userModel.find()

  res.send(result)
  console.log(result)
}

// to update the user info
exports.UpdateUser = async(req, res) => {

    const UpdatedUser = req.body

    try {

        userModel.findOneAndUpdate({_id : req.params.id}, UpdatedUser ,{new : true}, (err, data)=>{

            if(err){

                res.status(404).send({"error" :  err})

            }else{

                
                res.status(200).send(data)

                console.log(data)
                console.log("user info updated")

            }

        })

    } catch (error) {

        res.status(404).send({"error" :  err})
        
    }
}


exports.signin = async(req, res) => {

    const user = await userModel.findOne({number : req.body.number})
    console.log(user)
    // if(user)

    const OTP = otpGenerator.generate(6, { digits : true, lowerCaseAlphabets : false, upperCaseAlphabets : false , specialChars : false })

    const number = req.body.number
    console.log(number)
    console.log(OTP)

    const otp = new otp({ number : number, otp : OTP })

    console.log(otp)

    const salt = await bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp, salt)

    const result = await otp.save()
    return res.status(200).send("OTP Send successfully")
}

exports.varifyotp = (req, res) => {

}



// follow to user
exports.followuser = async (req, res) => {

    if (req.body.userId !== req.params.id) {

      try {

        const user = await userModel.findById(req.params.id); 

        const currentUser = await userModel.findById(req.body.userId); // if the current user is not following to the user 

        if (!user.followers.includes(req.body.userId)) { 

          await user.updateOne({ $push: { followers: req.body.userId } }); // followers

          await currentUser.updateOne({ $push: { followings: req.params.id } }); 

          res.status(200).json("user has been followed");

          console.log("User has been followed")
 
        } else {

          res.status(403).json("you allready follow this user");

        }
      } catch (err) {

        res.status(500).json(err);

      }

    } else {

      res.status(403).json("you cant follow yourself");
       
    }

  }


  // unfollow
  exports.unfollow = async (req, res) => {

    if (req.body.userId !== req.params.id) {

      try {

        const user = await userModel.findById(req.params.id);
        const currentUser = await userModel.findById(req.body.userId);

        if (user.followers.includes(req.body.userId)) {

          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });

          res.status(200).json("user has been unfollowed");

        } else {

          res.status(403).json("you dont follow this user");

        }

      } catch (err) {

        res.status(500).json(err);

      }

    } else {

      res.status(403).json("you cant unfollow yourself");

    }
  }

  // freinds controller

  // exports.freinds = async(req, res) => {

  //      try {
  //       const users = await userModel.find()
  //       await users.follower.includes(`${req.body}`)
        
  //      } catch (error) {
         
  //      }
  // }
   

  
