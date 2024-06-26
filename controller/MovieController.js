const BookingModel = require("../Schema")
// console.log(BookingModel);
const PostBooking = async (req, res) => {
    try {
        const { movie, slot, seats } = req.body;

        const myData = new BookingModel({ movie, slot, seats });
        const data = await myData.save();

        return res.status(200).json({
            message:"Booking successful",
            status:200,
            data:data
        })
    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}

const getBooking = async (req, res) => {
    try {
        // find last booking of user 
        const [data] = await BookingModel.find().sort({_id:-1}).limit(1)
        
        if (!data) {
            // if no booking found this will be printed
            return res.status(200).json({
                message:"No previous Booking found!",
                status:200,
                data:null
            })    
        }
        
        // have any booking then print this message
        return res.status(200).json({
            message:"last booking!",
            status:200,
            data:data
        })
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:error.message,
            status:503,
            data:{}
        })
    }
}

module.exports = { PostBooking, getBooking }