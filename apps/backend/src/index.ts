import express from "express"

const app = express();

import { VALUE } from "@repo/common/config";
console.log(VALUE)

app.get('/', (req,res)=>{
    res.json({
        msg:"Server is running..."
    })
})

app.listen(3000);