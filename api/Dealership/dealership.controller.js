const { creates, gets, getsById,deletesByIdproduct,deletesByIdcategory,deletesByIdsubcategory,getLogDetails,updateSalesrep,deletesByIdwarrantyprotection, getSoldDataCount,updates, blockDealership, getsByEmail, createWarranty, getPendingWarranty, updateWarranty, getClosedWarranty, deletesByIdWarranty, gettableDataCount,getProductData,getPendingWarrantyGraph, getClosedWonGraph } = require("./dealership.services");
var nodemailer = require('nodemailer');
const SMTPConnection = require("nodemailer/lib/smtp-connection");

module.exports = {
    create: (req, res) => {
        const body = req.body;
        creates(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                // return res.status(200).json({
                //     sucsess: 1,
                //     data: results
                // });

               
                mail(results.mail,res);
                
            }
        });
    },
    createWarranty: (req, res) => {
        const body = req.body;
        createWarranty(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    updateWarranty: (req, res) => {
        const body = req.body;
        updateWarranty(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getPendingWarranty: (req, res) => {
        const data = req.body;
        getPendingWarranty(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getClosedWarranty: (req, res) => {
        const data = req.body;
        getClosedWarranty(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    gettableDataCount: (req, res) => {
        const data = req.body;
        gettableDataCount(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getProductData: (req, res) => {
        const data = req.body;
        getProductData(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },

    getLogDetails: (req, res) => {
        const data = req.body;
        getLogDetails(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getPendingWarrantyGraph: (req, res) => {
        const data = req.body;
        getPendingWarrantyGraph(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getClosedWonGraph: (req, res) => {
        const data = req.body;
        getClosedWonGraph(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },    
    getSoldDataCount: (req, res) => {
        const data = req.body;
        getSoldDataCount(data,(err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getById: (req, res) => {
        const id = req.params.id;
        getsById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    getByEmail: (req, res) => {
        const data = req.body;
        getsByEmail(data, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    get: (req, res) => {
        gets((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    data: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        updates(body, id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    message: results
                });
            }
        });
    },
    updateSalesrep: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        updateSalesrep(body, id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    message: results
                });
            }
        });
    },
    blockDealership: (req, res) => {
        const body = req.body;
        blockDealership(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    error: err,
                    status: 500
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    deletesByIdWarranty: (req, res) => {
        const id = req.params.id;
        const data = req.body;
        deletesByIdWarranty(id, data, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    error: err,
                    status: 500
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    deletesByIdcategory: (req, res) => {
        const id = req.params.id;
        deletesByIdcategory(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    error: err,
                    status: 500
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    deletesByIdsubcategory: (req, res) => {
        const id = req.params.id;
        deletesByIdsubcategory(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    error: err,
                    status: 500
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    deletesByIdwarrantyprotection: (req, res) => {
        const id = req.params.id;
        deletesByIdwarrantyprotection(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    error: err,
                    status: 500
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },
    deletesByIdproduct: (req, res) => {
        const id = req.params.id;
        deletesByIdproduct(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    error: err,
                    status: 500
                });
            } else {
                return res.status(200).json({
                    sucsess: 1,
                    data: results
                });
            }
        });
    },


    
};

const mail = (mailReq,res) => {

    var transporter = nodemailer.createTransport({
            service: 'gmail',       
            PORT:465,
            auth: {
                user: process.env.EMAILID,
                pass: process.env.PASSWORD
            },
            logger:true,
            debug:true
    });

    var infos = "information";
    var err = "error";

    transporter.sendMail(mailReq, function(error, info){
        if (error) {
            console.log(error);
            //mailReq.err = error;            
        } else {

        console.log('Email sent: ' + info.response);        
            return res.json({
                success:1,
                subject:mailReq.subject,
                data:"message sent"
            });             

        }
    }); 
    
};

