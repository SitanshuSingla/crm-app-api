
const customers= [
    {
        "name":"Infosys",
        "website":"www.infosys.com",
        "ceo":"Uknown",
        "employees":"200000",
        "year":"1995",
        "turnover":"100000000"
    },
    {
        "name":"TCS",
        "website":"www.tcs.com",
        "ceo":"Uknown",
        "employees":"300000",
        "year":"1995",
        "turnover":"200000000"
    }
];


module.exports.get = (req, res)=>{
    res.status(200).send(customers);
}