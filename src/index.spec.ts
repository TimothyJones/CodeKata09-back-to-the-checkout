/*    
  def price(goods)
    co = CheckOut.new(RULES)
    goods.split(//).each { |item| co.scan(item) }
    co.total
  end

  def test_totals




    assert_equal(160, price("AAAB"))
    assert_equal(175, price("AAABB"))
    assert_equal(190, price("AAABBD"))
    assert_equal(190, price("DABABA"))
  end
    
    co = CheckOut.new(RULES)
    assert_equal(  0, co.total)
    co.scan("A");  assert_equal( 50, co.total)
    co.scan("B");  assert_equal( 80, co.total)
    co.scan("A");  assert_equal(130, co.total)
    co.scan("A");  assert_equal(160, co.total)
    co.scan("B");  assert_equal(175, co.total)
*/

import { price } from '.';

const expectPriceFor = (priceString: string, expectedPrice: number) => {
  describe(`the price for "${priceString}"`, () => {
    it(`prices as '${expectedPrice}'`, () => {
      expect(price(priceString)).toEqual(expectedPrice);
    });
  });
};

describe('Checkout system', () => {
  expectPriceFor('', 0);
  expectPriceFor('A', 50);
  expectPriceFor('AB', 80);
  expectPriceFor('AA', 100);
  expectPriceFor('CDBA', 115);
  expectPriceFor('AAA', 130);
  expectPriceFor('AAAA', 180);
  expectPriceFor('AAAAA', 230);
  expectPriceFor('AAAAAA', 260);
});
