Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :submissions, only: [:show, :create]
  end
  root "static_pages#root"
end
