const BannerModel = require('../../model/admin/Banner')


exports.findAllBanners = async(req, res) => {

    try {

        const banners = await BannerModel.find()
        res.send(banners)

    } catch (error) {

        res.send({meassage : "Something went wrong on server"})

    }

}
exports.saveBanner = async (req, res) => {

    try{ 

        const newBanner = BannerModel({

            bannerImage: req.file.path,
            bannerRank: req.body.bannerRank

        })
        
        res.json(await newBanner.save())
        res.send({message : "upload Success"})
        

    }catch(err){

        res.status(500).send(err)

    }
}

// update banner 
exports.updateBanner = (req, res)=>{
   try {
    const updatedBanner = {
        bannerImage: req.file.path,
        bannerRank: req.body.bannerRank
    }
    BannerModel.findByIdAndUpdate({_id : req.params.id}, updatedBanner, {new : true}, (err, data)=>{
        if(err){
            res.status(500).send({"message" : err})
        }else{
            res.send(data)
        }
    })
   } catch (error) {
    res.status(500).send({"message" : error})
   }
}
// Delete banner

exports.deletebanner = (req, res)=>{

    try {
        BannerModel.findOneAndDelete({_id : req.params.id}, (err, data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.json(data)
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }

}


exports.personalmulter = (req, res)=>{
 
    try {

        res.send("image upload success")

    } catch (error) {

        res.send(err)
        
    }

}
        
 



