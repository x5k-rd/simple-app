
// created a fucntion for test which sends a  jsonresponse and exported it to use in authroutes
const test = (req, res) =>{
    res.json('this test is working')
}


module.exports = {
    test
}