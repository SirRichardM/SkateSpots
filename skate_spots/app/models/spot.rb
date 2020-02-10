class Spot < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates_presence_of :name, :address, :boro, :trains
end
