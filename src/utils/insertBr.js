const insertBr = text => {
  const maxLength = 299;
  const breakLength = 168;

  if (text.length > maxLength) {
    return (
      text.slice(0, breakLength) + '<br /><br />' + text.slice(breakLength)
    );
  }
  return text;
};

export default insertBr;
