class Submission < ApplicationRecord
    validates :ans1, :ans2, :ans3, :ans4, :ans5, :ans6, :ans7, :ans8, :ans9, :ans10, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end