export const separateCamelCaseWithSpaces = str => {
  return str.replace(/\B([A-Z])\B/g, ' $1');
};
