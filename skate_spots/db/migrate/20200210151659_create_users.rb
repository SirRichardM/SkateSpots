class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :favorite_spot
      t.string :current_skate
      t.string :best_vids
      t.string :photo
      t.string :password_digest
      t.string :email
      t.timestamps
    end
  end
end
