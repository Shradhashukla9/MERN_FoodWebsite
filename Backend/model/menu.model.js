import mongoose from "mongoose";
const menuSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [String],
    description: {
        type: String,
        required: true
    },
    
});

const Menu = mongoose.model('menus', menuSchema);

export default Menu;