const app=require('express')();
const appid=process.env.APPID;

app.get('/',(req,res)=>{
    res.send(`${appid} home page!!`);
})

app.listen(appid,()=>{console.log(`${appid} listening on port: ${appid}`)});