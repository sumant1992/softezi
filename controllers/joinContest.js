// Amol

const contestModel = require("../model/joinContest");

exports.joinContest = async (req, res) => {

  try {

    const newUser = new contestModel(req.body);
    console.log(newUser);

    res.status(201).json(await newUser.save());

  } catch (err) {

    res.status(500).json({ error: err });

  }
};
//join contest
exports.joinContestById = async (req, res) => {

  try {

    const newContest = new contestModel({ _id: req._id });
    console.log(newContest._id);

    res.status(201).json(await newContest.save());

  } catch (err) {

    res.status(500).json({ error: err });

  }
};
//find all contest info
exports.getAllContestInfo = async (req, res) => {

  try {

    const contest = await contestModel.find(data.body);
    res.status(200).json(contest);
    console.log(contest);

  } catch (err) {

    res.status(500).json({ error: err });
    
  }
};

exports.addUser;