require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2')
require_relative('../card')

class TestCardGame < MiniTest::Test

  def setup

    @card1 = Card.new("spades", 1)
    @card2 = Card.new("hearts", 10)

    @cardgame1 = CardGame.new()
  end

  def test_check_for_ace()
    assert_equal(true, @cardgame1.check_for_ace(@card1))
  end

  def test_highest_card()
    assert_equal("hearts", @cardgame1.highest_card(@card1, @card2))
  end

  def test_self_cards_total()
    cards = [@card1, @card2]
    assert_equal("You have a total of 11", CardGame.cards_total(cards))
  end

end
