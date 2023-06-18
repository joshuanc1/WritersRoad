const User = require('../model/userModel');
const Review = require('../model/reviewModel');
const mongoose = require('mongoose');

exports.addReview = async(req,res,next) => {

        const reviewData = req.body;

        const review= await Review.create(reviewData);
        
        const user = await User.findById(req.user._id);

        if(user.userReviews.includes(review)){
            return res.status(200).json({
                success: true,
                message: "you already wrote a review"
            })
        } else {
            user.userReviews.push(review);

            await user.save();

            return res.status(200).json({
                success: true,
                message: "Review made!"
            })
        }
}

exports.getBookReviewList = async(req, res, next) => {
    const bookISBN= req.params.isbn;
   

    const reviewList = await Review.find({bookISBN: bookISBN});

    res.status(200).json({
        success: true,
        reviewList: reviewList
    })
    
}


exports.deleteReview = async(req, res, next) => {
    const reviewID = req.params.id;
    const reviewObjectId = new mongoose.Types.ObjectId(reviewID);



    const user = await User.findById(req.user._id);


    if(user.userReviews.includes(reviewObjectId)){
        user.userReviews = user.userReviews.filter(review => !review.equals(reviewObjectId));
    
        await user.save();

        await Review.findOneAndDelete(reviewObjectId);

        res.status(202).json({
            success: true,
        })
    }

    
}