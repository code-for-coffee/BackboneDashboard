class Card < ActiveRecord::Base

	def to_s
		return "Card: #{self.title}"
	end

end