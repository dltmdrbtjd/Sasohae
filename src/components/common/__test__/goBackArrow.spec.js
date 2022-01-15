import GoBackArrow from '../goBackArrow.vue';

describe('goBackArrowComponent', () => {
  function localData(pageNum) {
    return {
      pageNum,
    };
  }
  it('it should return false', () => {
    const localThis = localData(8);
    expect(GoBackArrow.computed.isGiftPage.call(localThis)).toBeFalsy();
  });
});
