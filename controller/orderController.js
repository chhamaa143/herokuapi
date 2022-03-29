const Order = require('../models/orderModel');
exports.placeOrder = (request,response) =>{
    // console.log(request.body)
    Order.create({
        userId:request.body.userId,
        address:request.body.address,
        mobile:request.body.mobile,
        packages:request.body.packages,
        items:request.body.items,
    })
    
    .then(result=>{
        return response.status(201).json(result);
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({err : "OOPS SOMETHING WENT WRONG"});
    });
}

exports.viewOrder = (request,response) =>{
    Order.findOne({userId : request.params.uid})
    .then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);
    })
}


exports.orderHistory = (request,response) =>{
    Order.find()
    .then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);
    })
}