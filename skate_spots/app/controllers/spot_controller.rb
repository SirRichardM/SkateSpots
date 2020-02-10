class SpotController < ApplicationController
  before_action :set_spot, only: [:show, :update, :destroy]

  def index 
    @spots = current_user.spots
    json_response(@spots)
  end
  
  def create
    @spot = current_user.spots.create!(spot_params)
    json_response(@spot, :created)
  end
  
  def show
  json_response(@spot)
  end
  
  def update 
    @spot.update(spot_params)
    json_response(status: 'Updated!', message: 'Updated!')
  end
  
  def destroy
    @spot.destroy
    json_response(status: 'Deleted!', message: 'Deaded!')
  end
  
  private
  
  def spot_params
    params.permit(:name, :address)
  end
  
  def set_spot
    @spot = Spot.find(params[:id])
  
  end
end
