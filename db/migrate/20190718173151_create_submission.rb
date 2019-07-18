class CreateSubmission < ActiveRecord::Migration[5.2]
  def change
    create_table :submissions do |t|
      t.integer :ans1, null: false
      t.integer :ans2, null: false
      t.integer :ans3, null: false
      t.integer :ans4, null: false
      t.integer :ans5, null: false
      t.integer :ans6, null: false
      t.integer :ans7, null: false
      t.integer :ans8, null: false
      t.integer :ans9, null: false
      t.integer :ans10, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
