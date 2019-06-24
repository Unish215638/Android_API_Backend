const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/SecondHand-Buy-And-Sell',{
    useNewUrlParser:true,
    useCreateIndex:true
})