import DefaultQuestion from '../DefaultQuestion.vue';

describe('DefaultQuestion Component Testing', () => {
  it('it should return M', () => {
    expect(DefaultQuestion.methods.titleChangeToNumber('남자')).toStrictEqual(
      'M',
    );
  });

  it('it should return W', () => {
    expect(DefaultQuestion.methods.titleChangeToNumber('여자')).toStrictEqual(
      'W',
    );
  });
});
