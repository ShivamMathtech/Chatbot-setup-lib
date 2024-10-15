// Define the question-answer pairs
const data = {
  "What is this website about?":
    "This website provides information and services related to [your business/industry], helping you find solutions for [specific problem or service offered].",
  "How does this service work?":
    "Our service works by [brief explanation of the process, e.g., signing up, selecting a product, or booking a service]. If you need further assistance, feel free to ask!",
  "What services do you offer?":
    "We offer a variety of services, including [list of services]. You can learn more about each service on our 'Services' page.",
  "How can I contact customer support?":
    "You can contact our customer support via email at [email address] or call us at [phone number]. We are also available through the live chat feature on the site.",
  "Where are you located?":
    "We are located at [address]. You can also find us on Google Maps [link to the location].",
  "What products do you have?":
    "We offer a wide range of products, including [product categories, e.g., electronics, clothing, accessories]. Visit our shop page to browse all available products.",
  "Do you offer discounts or promotions?":
    "Yes, we offer seasonal discounts and promotions! Check our 'Offers' page or subscribe to our newsletter to stay updated.",
  "How can I purchase this product?":
    "You can purchase a product by adding it to your cart and proceeding to checkout. We accept multiple payment methods for your convenience.",
  "Is this product in stock?":
    "To check if a product is in stock, you can visit the product page. If it's available, you’ll see an 'Add to Cart' button.",
  "Do you offer free shipping?":
    "Yes, we offer free shipping on orders above [amount]. For more details, please visit our 'Shipping & Returns' page.",
  "What payment methods do you accept?":
    "We accept [list payment methods, e.g., credit/debit cards, PayPal, and bank transfers].",
  "How do I create an account?":
    "Click on the 'Sign Up' button at the top-right corner of the page and fill out the registration form. You’ll receive a confirmation email once your account is set up.",
  "I forgot my password. How can I reset it?":
    "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to reset your password.",
  "How do I cancel my subscription?":
    "You can cancel your subscription by going to your account settings and selecting 'Cancel Subscription.'",
};

// Function to answer questions based on predefined data
function getAnswer(question) {
  const standardizedQuestion = question.trim().toLowerCase();

  for (const [key, value] of Object.entries(data)) {
    if (key.toLowerCase() === standardizedQuestion) {
      return value;
    }
  }

  return "I'm sorry, I don't have an answer for that question.";
}

// Export the getAnswer function for use by other files
module.exports = { getAnswer };
