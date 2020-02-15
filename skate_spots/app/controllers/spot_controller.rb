class SpotController < ApplicationController
  before_action :set_spot, only: [:show, :update, :destroy]

  def index 
    #@spots = current_user.spots
    @spots = Spot.all
    json_response(@spots)
  end
  
  def create
    @spot = current_user.spots.create!(spot_params)
    json_response(@spot, :created)
  end

  def manhattan
    @spotM = Spot.where( boro: "manhattan")
    json_response(@spotM)
  end

  def queens
    @spotQ = Spot.where( boro: "queens")
    json_response(@spotQ)
  end

  def brooklyn
    @spotB = Spot.where( boro: "brooklyn")
    json_response(@spotB)
  end

  def bronx
    @spotBx = Spot.where( boro: "bronx")
    json_response(@spotBx)
  end

  def staten
    @spotStat = Spot.where( boro: "staten island")
    json_response(@spotStat)
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
    params.permit(:name, :address, :boro, :trains, :obstacles, :rating, :bust_factor, :description, :noteworthy, :photo_main, :photo2, :photo3, :phto4, :photo5)
  end
  
  def set_spot
    @spot = Spot.find(params[:id])
  
  end
end
