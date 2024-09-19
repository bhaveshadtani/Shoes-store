const paymentMethodsData = [
  {
    name: "Credit Card",
    description:
      "Pay using major credit cards like Visa, MasterCard, and American Express.",
    is_active: false,
  },
  {
    name: "Debit Card",
    description: "Direct payment from your bank account using a debit card.",
    is_active: true,
  },
  {
    name: "PayPal",
    description:
      "Secure online payment system allowing you to pay with your PayPal balance or linked accounts.",
    is_active: false,
  },
  {
    name: "Bank Transfer",
    description:
      "Transfer funds directly from your bank account to the merchant's account.",
    is_active: false,
  },
  {
    name: "Cash on Delivery",
    description: "Pay in cash when your order is delivered to your doorstep.",
    is_active: true,
  },
  {
    name: "Apple Pay",
    description:
      "Mobile payment and digital wallet service by Apple for easy payments using your device.",
    is_active: false,
  },
  {
    name: "Google Pay",
    description:
      "Contactless payment service by Google for quick payments using your smartphone.",
    is_active: true,
  },
];

module.exports = paymentMethodsData;
