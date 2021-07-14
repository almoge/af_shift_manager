const express = require('express')
const router = new express.Router()


/*
Assumed that put req received the following field: username, start & end of shift (by datetime object).
*/
router.get('/update-hours' , async (req,res) => {
    // const data = req.body
    try {
    const dateOne = "20 May, 2021 15:00";
    const dateTwo = "20 May, 2021 23:10";
    const dateOneObj = new Date(dateOne);
    const dateTwoObj = new Date(dateTwo);
    // const milisec = Math.abs(data.end - data.start)
    //convert time from milisec to hours
    const totalHours = Math.abs(dateTwoObj.getTime() - dateOneObj.getTime()) / 3600000
    
    const perHour = 45
    let sum = 0
    
    const addittionlaHours = totalHours - 8
    console.log(addittionlaHours)

    let j = 1, i = dateOneObj.getHours()
    for (; i < totalHours + dateOneObj.getHours() - addittionlaHours ; i++, j++) {
        console.log(sum)
        if ( dateOneObj.getDay() === 6 ) {
            if ( i > 7 && i <= 15) {
                sum += (perHour * 1.25)
            }
            else if  ( i > 15 && i <= 23) {
                sum += (perHour * 1.5)
            }
        }
        else {
            if ( i >= 15 && i < 23) {
                sum += perHour
            }
            else if  ( i >= 23 ) {
                sum += (perHour * 1.5)
            }
        }
    }

    //Calculate addittional hours
    if (j > 8 && j <=10) {
        sum += (perHour * 1.25 * addittionlaHours)
    }
    else if (j > 10 && j <= 12) {
        sum += perHour * 1.25 * 2 + perHour * 1.5 * (addittionlaHours - 2)
    }

    res.send({hours: totalHours, salary: sum})
    
    } catch(e) {
        res.send(e)
    }

})

module.exports = router;