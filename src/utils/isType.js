const isType = (data, type) => {
  const validTypes = [
    'string',
    'number',
    'boolean',
    'object',
    'function',
    'undefined',
  ];

  return validTypes.includes(type) && typeof data === type;
};

export default isType;
