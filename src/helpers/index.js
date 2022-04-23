import * as parsers from './parsers';
import * as processors from './processors';
import * as transformers from './transformers';

export default {
  ...parsers,
  ...processors,
  ...transformers,
};
