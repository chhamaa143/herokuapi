const Item = require('../models/itemModel');
const port = process.env.PORT || 3000;

exports.addItem = (request,response)=>{
    Item.create({
        itemName:request.body.itemName,
        itemQty:request.body.itemQty,
        itemprice:request.body.itemPrice,
        itemDescription:request.body.itemDescription,
        itemImage:"http://localhost:3001/images/"+request.file.filename,
        itemDay: request.body.day,
        itemCategoryId:request.body.itemcatId
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);
    });
};

exports.itemList=(request,response)=>{
    Item.find().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(400).json(err);
    });
};

exports.updateItem = (request,response)=>{
    Item.updateOne({_id:request.body.itemID},
        {$set : {
            itemName:request.body.itemName,
            itemQty:request.body.itemQty,
            itemPrice:request.body.itemPrice,
            itemDescription:request.body.itemDescription,
            itemDay:request.body.itemDay,
            itemImage:"http://localhost:3001/images/"+request.file.filename,
            itemCategoryId:request.body.itemcatId
        }}).then(result=>{
            if(result.modifiedCount)
             return response.status(204).json({message: 'success'});
            else
             return response.status(404).json({message: 'record not found'})
       }).catch(err=>{
         return response.status(500).json({message: 'Something went wrong..'});
       });
};

exports.deleteItem = (request,response)=>{
    Item.deleteOne({_id:request.body.itemID})
    .then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(200).json(err);
    });
}

