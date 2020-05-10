

import { trim, replaceTokens, replaceTokensToUpperCase, replaceTokensToLowerCase } from './'

describe('StringUtil tets', () => {
  it('StringUtil.trim', () => {
    let s1 = ' 1321   ';
    expect(trim(s1)).toBe('1321');
  });

  it('StringUtil.replaceTokens', () => {
    let s1 = 'eqdewmengyaohui32mengyaohui1', tokens = ['mengyaohui'];
    expect(replaceTokens(s1, tokens, '孟耀辉')).toBe('eqdew孟耀辉32孟耀辉1');
  });

  it('StringUtil.replaceTokensToUpperCase', () => {
    let s1 = 'eqdewmengyaohui32mengyaohui1', tokens = ['meng', 'yao', 'hui'];
    expect(replaceTokensToUpperCase(s1, tokens)).toBe('eqdewMENGYAOHUI32MENGYAOHUI1');
  });

  
  it('StringUtil.replaceTokensToLowerCase', () => {
    let s1 = 'eqdewMengYaohuI32mEngyAohui1', tokens = ['M', 'Y', 'O', 'I', 'E', "A"];
    expect(replaceTokensToLowerCase(s1, tokens)).toBe('eqdewmengyaohui32mengyaohui1');
  });

})