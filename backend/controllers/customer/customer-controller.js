const Customer = require("../../model/customer/customer");

const signupcustomer = async (req, res) => {
  const { firstname, lastname, address, city, phone, email, password } =
    req.body;

  const exisitingAdmin = await Customer.findOne({ email: email });

  if (exisitingAdmin) {
    console.error("Email used in already");
    res.status(201).json({ massage: "Error" });
  } else {
    const createCustomer = new Customer({
      firstname,
      lastname,
      address,
      city,
      phone,
      email,
      password,
    });
    await createCustomer.save();
    res.status(200).json(createCustomer);
  }
};

const logincustomer = async (req, res) => {
  const { email, password } = req.body;

  let existingUser = await Customer.findOne({ email: email });

  if (!existingUser || existingUser.password !== password) {
    console.log("Error");
    res.status(201).json({ massage: "Error" });
  } else {
    res.status(200).json(existingUser);
  }
};

const updatecustomer = async (req, res) => {
  const { firstname, lastname, address, city, phone, email, password } =
    req.body;
  const customerId = req.params.id;

  const updateCustomer = await Customer.findById(customerId);

  updateCustomer.firstname = firstname;
  updateCustomer.lastname = lastname;
  updateCustomer.address = address;
  updateCustomer.city = city;
  updateCustomer.phone = phone;
  updateCustomer.email = email;
  updateCustomer.password = password;

  await updateCustomer.save();

  res.status(200).json({ customer: updateCustomer });
};

const deletecustomer = async (req, res) => {
  const customerId = req.params.id;
  const deleteCustomer = await Customer.findById(customerId);

  await deleteCustomer.remove();

  res.status(200).json({ Customer });
};

const getcustomerById = async (req, res, next) => {
  const customerID = req.params.id;
  const customer = await Customer.findById(customerID);
  res.json(customer);
};

exports.signupcustomer = signupcustomer;
exports.logincustomer = logincustomer;
exports.updatecustomer = updatecustomer;
exports.deletecustomer = deletecustomer;
exports.getcustomerById = getcustomerById;
