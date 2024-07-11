import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
 
  email:{
    type:String,
    required:true,
    unique: true
 },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
 
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
