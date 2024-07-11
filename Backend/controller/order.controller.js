import Order from "../model/order.model.js";
 
export const order= async (req,res)=>{
    try {
        const { userId,email, items} = req.body;
        console.log('Order Data:', req.body);
        
    
        const newOrder = new Order({
          userId,          
          email,
          items,
         
        });
    
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
     } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

};
