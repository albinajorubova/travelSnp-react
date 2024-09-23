const isType = (data, type) => {
  const validTypes = [
    'string',
    'number',
    'boolean',
    'object',
    'function',
    'undefined',
  ];

  return (
    (validTypes.includes(type) &&
      typeof data === 'string' &&
      type === 'string') ||
    (typeof data === 'number' && type === 'number') ||
    (typeof data === 'boolean' && type === 'boolean') ||
    (data === null && type === 'object') || // учитываем null как объект
    (typeof data === 'function' && type === 'function') ||
    (typeof data === 'undefined' && type === 'undefined')
  );
};

export default isType;
