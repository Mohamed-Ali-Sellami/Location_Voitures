const mongoose = require('mongoose');
const schema= mongoose.Schema

const  reservationsSchema = new schema({

  startDate: {
    type: String,
    //required: true
  },
  endDate: {
    type: String,
    //required: true
  },
  status: {
    type: String,                     //'pending', 'confirmed', 'cancelled'
    default: 'pending'
  },
  totalPrice: {
    type: Number,
    //required: true
  }
  
})
const carSchema = new schema({

// constructor: { 
//   type: String,
//     //required: true
//      },    
                       //toyota .fiat ........
  model: { type: String,
     //required: true 
    },  
                               //toyota prius .....fiat sienna
  matriculation: { type: String,
     //required: true 
    },     
                           //5555 tunis 123
  year: { type: Number,
    // required: true 
    },                                    // 2016
  price_per_day: { type: Number,
     //required: true
     },                          //100 par day
  availability_status: { type: Boolean, 
    //required: true },                   //true
  },
    image: { type: String },    //image car

    reservation: [reservationsSchema],
});




module.exports=car=mongoose.model('collection_Cars', carSchema);