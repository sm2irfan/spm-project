const Payment = require("../../model/payment/payment");

const createPayment = async (req, res) => {
  if (req.body) {
    const { firstname, lastname, address, city, phone, email, totalPrice } =
      req.body;

    const payment = new Payment({
      firstname,
      lastname,
      address,
      city,
      phone,
      email,
      totalPrice,
      state: "pending",
    });
    await payment
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getpayment = async (req, res) => {
  if (req.params && req.params.id) {
    await Payment.findById(req.params.id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllpayment = async (req, res) => {
  const payment = await Payment.find({});
  res.json(payment);
};

const updateState = async (req, res) => {
  const { state } = req.body;
  const paymentID = req.params.id;

  const updatePaymentState = await Payment.findById(paymentID);

  updatePaymentState.state = state;

  await updatePaymentState.save();

  res.status(200).json({ payment: updatePaymentState });
};

exports.createPayment = createPayment;
exports.getpayment = getpayment;
exports.updateState = updateState;
exports.getAllpayment = getAllpayment;
