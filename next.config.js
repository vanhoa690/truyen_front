// next.config.js
module.exports = {
  images: {
    domains: [
      "restcountries.eu",
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "fakestoreapi.com",
      "www.google.co.uk",
      "i.ibb.co",
      "picsum.photos"
    ]
  },
  env: {
    url_api: process.env.REACT_APP_API
    // stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    // stripe_signing_secret: process.env.STRIPE_SIGNING_SECRET,
  }
}
