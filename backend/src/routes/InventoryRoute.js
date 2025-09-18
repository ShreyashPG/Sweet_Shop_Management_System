const express =require("express")
const router=express.Router();
const {purchaseSweet,restockSweet}=require("../controllers/Inventory")

const verify=require("../auth/Authentication")


router.post("/:id/purchase", verify, purchaseSweet);
router.post("/:id/restock", verify, restockSweet );

module.exports=router