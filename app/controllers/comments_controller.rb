class CommentsController < ApplicationController
	def create	
		@message = Message.find(params[:message_id])
		@comment = @message.comments.create(comment_params)
		redirect_to message_path(@message)
	end

	def destroy
		@message = Message.find(params[:message_id])
		@comment = @message.comments.find(params[:id])
		@comment.destroy
		redirect_to message_path(@message)
	end

	private
	def comment_params
		params.require(:comment).permit(:commenter, :body)
	end

end
