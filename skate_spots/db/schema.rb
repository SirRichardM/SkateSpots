# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_13_185812) do

  create_table "comments", force: :cascade do |t|
    t.text "text"
    t.integer "user_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["spot_id"], name: "index_comments_on_spot_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "boro"
    t.string "trains"
    t.string "obstacles"
    t.integer "rating"
    t.text "description"
    t.text "directions"
    t.string "bust_factor"
    t.text "noteworthy"
    t.string "photo_main"
    t.string "photo2"
    t.string "photo3"
    t.string "phto4"
    t.string "photo5"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_spots_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "description"
    t.string "favorite_spot"
    t.string "current_skate"
    t.string "best_vids"
    t.string "photo"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "spots"
  add_foreign_key "comments", "users"
  add_foreign_key "spots", "users"
end
