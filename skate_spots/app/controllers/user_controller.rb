class UserController < ApplicationController
  skip_before_action :authorize_request, only: :create

  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, params[:password]).call
    response = { message: Message.account_created, auth_token: auth_token, user: user_params }
    json_response(response, :created)
  end

  def login 
    @user = User.find_by_email(params[:email])
    if @user.authenticate(params[:password])
      token = endcode(id: @user.id, name: @user.name)
      response = {auth_token: token, message: "fuck ruby", user: @user}
      json_response(response)
    else 
      response = {message: "Unauthorized!"}
      json_response(response)
    end
  end


  def index
    @users = User.all
    json_response(@users)
  end

  

def show
  @user = User.find(params[:id])
  json_response(@user)
end


  private

  def user_params
    params.permit(
        :name,
        :email,
        :password,
        :description,
        :favorite_spot,
        :current_skate,
        :best_vids,
        :photo

    )
  end

  

end
