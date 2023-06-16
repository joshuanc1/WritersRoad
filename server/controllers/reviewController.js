const User = require('../model/userModel');
const Review = require('../model/reviewModel');
const mongoose = require('mongoose');

exports.addReview = async(req,res,next) => {

        const form = req.body;
        const userID = new mongoose.Types.ObjectId(form.userId);
        const bookID = new mongoose.Types.ObjectId(form.bookId);
    

        await Review.create(form);

        const user = await User.findByIdAndUpdate({_id: userID});

        if(user.userReviews.includes(bookID)){
            return res.status(200).json({
                success: true,
                message: "you already wrote a review"
            })
        } else {
            user.userReviews.push(form);

            await user.save();

            return res.status(200).json({
                success: true,
                message: "Review made!"
            })
        }


}