import { ShowHeroPipe } from './show-hero.pipe';

describe('ShowHeroPipe', () => {
  it('create an instance', () => {
    const pipe = new ShowHeroPipe();
    expect(pipe).toBeTruthy();
  });
});
