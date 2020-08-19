/**
 * author iWuzhi
 * date 2020-08-19 18:25:47
 */

const parseExp = require('./index');

describe('[x xxx xxx,xxx]', () => {
  const parser = parseExp('x xxx xxx,xxx');
  test('parser', () => {
    expect(parser).toStrictEqual({
      positive: {
        separator: ' ',
        decimal: ',',
        separatorStart: 3,
        groupMembers: 3
      },
      negative: {
        separator: ' ',
        decimal: ',',
        separatorStart: 3,
        groupMembers: 3
      }
    });
  });
});

describe('[x.xxx.xxx,xxx] should be [".", ","]', () => {
  const parser = parseExp('x.xxx.xxx,xxx');
  test('parser', () => {
    expect(parser).toStrictEqual({
      positive: {
        separator: '.',
        decimal: ',',
        separatorStart: 3,
        groupMembers: 3
      },
      negative: {
        separator: '.',
        decimal: ',',
        separatorStart: 3,
        groupMembers: 3
      }
    });
  });
});

describe('[x,xxx,xxx.xxx] should be [",", "."]', () => {
  const parser = parseExp('x,xxx,xxx.xxx');
  test('parser', () => {
    expect(parser).toStrictEqual({
      positive: {
        separator: ',',
        decimal: '.',
        separatorStart: 3,
        groupMembers: 3
      },
      negative: {
        separator: ',',
        decimal: '.',
        separatorStart: 3,
        groupMembers: 3
      }
    });
  });
});

describe('[x,xxx,xxx.xxx-x.xxx.xxx,xxx] should be [" ", ","]', () => {
  const parser = parseExp('x,xxx,xxx.xxx-x.xxx.xxx,xxx');
  test('parser', () => {
    expect(parser).toStrictEqual({
      positive: {
        separator: ',',
        decimal: '.',
        separatorStart: 3,
        groupMembers: 3
      },
      negative: {
        separator: '.',
        decimal: ',',
        separatorStart: 3,
        groupMembers: 3
      },
    });
  });
});

describe('[xx,xx,xxx.xxx] should be [",", "."]', () => {
  const parser = parseExp('xx,xx,xxx.xxx');
  test('parser', () => {
    expect(parser).toStrictEqual({
      positive: {
        separator: ',',
        decimal: '.',
        separatorStart: 3,
        groupMembers: 2
      },
      negative: {
        separator: ',',
        decimal: '.',
        separatorStart: 3,
        groupMembers: 2
      },
    });
  });
});