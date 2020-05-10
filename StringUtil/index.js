
/**
* auhtor: iWuzhi
* date: 2020-05-06 14:41:52
*/


/* -------------------------------------------------------------------------- */
/*                                    Trim                                    */
/* -------------------------------------------------------------------------- */
export const TRIM_PATTERN_NORMAL = /^\s*|\s*$/g;
export function trim(str) {
  return String.prototype.replace.call(str, TRIM_PATTERN_NORMAL, '');
}


/* -------------------------------------------------------------------------- */
/*                            replace some token                            */
/* -------------------------------------------------------------------------- */
export function replaceTokens(str = '', tokens = [], replacer) {
  const reg = new RegExp(tokens.join('|'), 'g');
  return String.prototype.replace.call(str, reg, replacer);
}

export function replaceTokensToUpperCase(str, tokens) {
  return replaceTokens(str, tokens, function replacer(macth) {
    return macth.toUpperCase();
  });
}

export function replaceTokensToLowerCase(str, tokens) {
  return replaceTokens(str, tokens, function replacer(macth) {
    return macth.toLowerCase();
  });
}


