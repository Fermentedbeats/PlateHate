class Message < ActiveRecord::Base
	has_many :comments
	validates :state, presence: true,
	length: {is: 2 }
	validates :plate_no, presence: true,
	length: {maximum: 8}
	validates :message, presence: true
end
