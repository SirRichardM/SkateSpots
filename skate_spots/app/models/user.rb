class User < ApplicationRecord
  has_secure_password

  has_many :spots, foreign_key: :user_id
  has_many :comments
  validates :name, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password_digest, presence: true
end
