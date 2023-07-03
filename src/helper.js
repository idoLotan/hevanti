export const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.click();
    }
  };