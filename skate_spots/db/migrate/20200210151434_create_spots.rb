class CreateSpots < ActiveRecord::Migration[6.0]
  def change
    create_table :spots do |t|
      t.string :name
      t.string :address
      t.string :boro
      t.string :trains
      t.string :obstacles
      t.integer :rating
      t.text :description
      t.text :directions
      t.string :bust_factor
      t.text :noteworthy
      t.string :photo_main
      t.string :photo2
      t.string :photo3
      t.string :phto4
      t.string :photo5
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
