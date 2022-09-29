const axios = require("axios");

const PAYPAL_API_CLIENT =
  "AUPbEH2BccpKMqnxTDDyfTLncnaf5Z_aGVA32qvl5TLi5kKtS-2phJKl19_6E2Sr6QdAIRcG7zVZFYH7";
const PAYPAL_API_SECRET =
  "EOHV4sB4NMpNPqT2aPi8lUbeXRiXgx0-R2m-IMwG9VZI5LaMmnh7KIfHwuc0XkKNgtxW2OrgqB-EgzSh";
const PAYPAL_API = "https://api-m.sandbox.paypal.com";

const createOrder = async (req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "1000",
          },
          description: "Lo pongo por las dudas",
        },
      ],
      application_context: {
        brand_name: "TiendaHenry.com",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: "http://localhost:3000/buy/capture-order",
        cancel_url: "http://localhost:3000/buy/cancel-order",
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    return res.status(500).send("Algo salió mal :(");
  }
};

const captureOrder = async (req, res) => {
  const { token, PayerID } = req.query;

  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );
  console.log(response.data)
};

const cancelOrder = async (req, res) => {
  res.redirect('/')
}

module.exports = { createOrder, captureOrder, cancelOrder };
