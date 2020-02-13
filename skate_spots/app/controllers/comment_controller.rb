class CommentController < ApplicationController
  before_action :set_spot
  before_action :set_spot_comment, only: [:show, :update, :destroy]

  # GET /spot/:todo_id/items
  def index
    json_response(@spot.comments)
  end

  # GET /todos/:todo_id/items/:id
  def show
    json_response(@comment)
  end

  # POST /spot/:spot_id/comment
  def create
    puts comment_params
    @spot = current_user.comments.create!(comment_params)
    json_response(@spot, :created)
  end

  # PUT /todos/:todo_id/items/:id
  def update
    @comment.update(comment_params)
    json_response(status: 'SUCCESS', message: 'Did you regret what you said? Or make a bad typo')
  end

  # DELETE /todos/:todo_id/items/:id
  def destroy
    @comment.destroy
    json_response(status: 'SUCCESS', message: 'Should have stood your ground')
  end

  private

  def comment_params
    params.permit(:text, :spot_id, :name)
  end

  def set_spot
    @spot = Spot.find(params[:spot_id])
    puts @spot.name
  end

  def set_spot_comment
    @comment = @spot.comments.find_by!(id: params[:id]) if @spot
  end

end
