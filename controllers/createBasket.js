// AMOL


const BasketDetailModel = require("./../model/CreateBasket");

//(add)/create a new basket
exports.createBasket = async (req, res) => {

  try {

    const newBasket = new BasketDetailModel(req.body);
    console.log(newBasket);

    res.status(201).json(await newBasket.save());

  } catch (err) {

    res.status(500).json({ error: err });

  }
};

//find all basket info
exports.getAllBasketInfo = async (req, res) => {

  try {

    const basket = await BasketDetailModel.find();
    res.status(201).json(basket);

  } catch (err) {

    res.status(500).json({ error: err });

  }
};

//find a specified user info
exports.getBasketInfo = async (req, res) => {

  try {

    const user = await BasketDetailModel.find({ _id: req.params.basketId });
    res.status(200).json(user);

  } catch (err) {

    res.status(500).json({ error: err });

  }
};

//update
exports.updateBasketInfo = (req, res) => {

  BasketDetailModel.findOneAndUpdate( { _id: req.params.basketId }, req.body, { new: true }, (err, data) => {

      if (err) {

        res.status(500).json({ error: err });
        
      } else {

        res.status(200).json(data);

      }

      console.log("Id : " + req.params.basketId);
      
    }
  );
};

exports.addUser;