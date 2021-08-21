const Customer = require("../../model/IT19029900/customer")


const signup = async (req, res, next) => {
    const { firstname, lastname, address, city,phone,email,password} = req.body;
  
    const exisitingAdmin = await Customer.findOne({ email: email });
  
    if (exisitingAdmin) {
      console.error("Email used in already");
      res.status(201).json({ massage: "Error" });
    } else {
      const createCustomer = new createCustomer({ firstname, lastname, address,city,phone,password});
      await createCustomer.save();
      res.status(200).json(createCustomer);
    }
  };