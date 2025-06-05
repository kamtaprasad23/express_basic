

const home =(req,res)=>{
    res.write("home page")
    res.end()
}

const about =(req,res)=>{
    res.write("about page")
    res.end()
}
export {home,about}