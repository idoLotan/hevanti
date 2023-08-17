export const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
};

export const openWhatsApp = () => {
  // Replace the phone number and message with your desired values
  var phoneNumber = "+972522113937"; // Enter the phone number with the country code
  var message = ".שלום, יש לי שאלה";

  var url =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url);
};
