/**
 *
 * @param {String} method - like 'createsessionJson'
 * @returns {String} - method like 'createsession'
 */
export const parseMethod = (method) => {
  const parsedMethod = method.replaceAll('Json', '');
  return parsedMethod;
};
