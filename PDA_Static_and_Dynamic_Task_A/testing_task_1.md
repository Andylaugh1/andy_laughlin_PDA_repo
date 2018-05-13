### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) #name should be in snakecase
    if card.value = 1 #should be ==, not =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #Error here, should be 'def' and a comma between card1 and card1
  if card1.value > card2.value # The indentation is wrong here
    return card.name #this should be card1.suit as card is not set as a variable or parameter. Should also be .suit as .name is not a property/method
  else
    card2 #this should be card2.suit
  end
end
end # This 'end' is not necessary

def self.cards_total(cards)
  total # total should have a starting value if it is a counter. Usually 0.
  for card in cards
    total += card.value
    return "You have a total of" + total
  end #end statement is in the wrong place
end

#class end missing


```
