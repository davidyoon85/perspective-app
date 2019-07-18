class User < ApplicationRecord
    validates :email, presence: true

    has_many :submissions,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Submission
end