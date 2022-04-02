import * as parsers from './parsers';
import * as processors from './processors';
import * as transfomers from './transformers';

export default {
  ...parsers,
  ...processors,
  ...transfomers,
};
