/**
 * author iWuzhi
 * date 2020-08-19 18:32:51
 */

const REG_FIND_KEYS = /^x+([^x]+)(.*)([^x\1])x+$/;
const REG_SPLIT_MAIN = /[^x]/;

/**
 * 
 * @param {string} exp
 * @returns {object} Describe the exp base parser
 */
function baseParseExp(exp) {
  const [, separator, main, decimal] = REG_FIND_KEYS.exec(exp);
  const [mainLeft, mainRight] = main.split(REG_SPLIT_MAIN);
  return {
    separator: separator,  // 分隔符
    decimal: decimal,  // 小数点符号
    separatorStart: mainRight.length,  // 分割起始位置
    groupMembers: mainLeft.length  // 被分割的每组成员数量
  }
}

/**
 * 
 * @param {string} exp 
 * @returns {object} Describe the exp parser
 */
function parseExp(exp) {
  let [pos, neg] = exp.split('-').map(expItem => baseParseExp(expItem));
  if (!neg) neg = pos;
  return {
    positive: pos,  // 正数分隔符
    negative: neg,  // 负数分隔符
  }
}

module.exports = parseExp;