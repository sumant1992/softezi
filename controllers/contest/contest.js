const contestModel = require('../../model/contest/contest')

exports.addcontest = async(req, res) => {

    try {
        
        // const newContest = contestModel(req.body)

        const {shareDate, startDate, endDate, startTime, endTime, day, contestType, price} = req.body // months, startDate, startTime, endTime, contestType, price, shareDate
        console.log(startDate)

        const  newContext = await contestModel.create({

            "shareDate" : shareDate,

            "startDate" : startDate,

            "startTime" : startTime,

            "endDate" : endDate,

            "endTime" : endTime,

            "day" :  day,

            "contestType" : contestType,

            "price" : price

        })

        console.log(newContext)

        const contest = await contestModel(newContext)
        contest.save()

        res.send(contest)
        console.log(contest)

    } catch (error) {

        console.log(error)
        
    }

}

exports.getallcontest = async(req, res) => {

    try {


        const findAllContest = await contestModel.find()
        console.log(findAllContest)

        findAllContest.entries()
        res.send(findAllContest)

    } catch (error) {

        console.log(error)

    }

}

exports.after_time_expired = async(req, res) =>{

        const find_contest_time = await contestModel.findById({_id : req.params.id})

        console.log(find_contest_time)

        res.send(find_contest_time)

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



        const d = new Date()

        // current DayDate
        const currentDate = d.getDate()

        // current Month
        const currentMonth = monthNames[d.getMonth()]

        // current year
        const currentYear = d.getFullYear()

        // current day
        const currentDay = days[d.getDay()]

        console.log(find_contest_time.enddate)
        console.log(find_contest_time.endTime) //find first 

    // Display the countdown timer in an element

    // Set the date we're counting down to
    var countDownDate = new Date(`${find_contest_time.endDate} ${find_contest_time.endTime}`).getTime(); // we need to send date time format from 
                                                                    //frontend like 23 May, 2022 and time should be 15:00:00

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

    // If the count down is finished, write some text
    if (distance <= 0) {
        
    clearInterval(x);

    console.log("EXPIRED");
  

    }

    }, 1000);

}


// endate like 23 may, 2020 
// endtime 15:00:00




            

           
