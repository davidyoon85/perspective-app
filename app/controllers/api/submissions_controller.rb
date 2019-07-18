class Api::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        if @submission.save
            render json: @submission
        end
    end

    def show
        @submission = Submission.find(params[:id])
        render json: @submission
    end

    private
    def submission_params
        params.require(:submission).permit(
            :ans1, 
            :ans2, 
            :ans3, 
            :ans4, 
            :ans5, 
            :ans6, 
            :ans7, 
            :ans8, 
            :ans9, 
            :ans10, 
            :user_id
        )
    end  
end

