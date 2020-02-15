Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'user#create'
  get 'manhattan', to: 'spot#manhattan'
  get 'brooklyn', to: 'spot#brooklyn'
  get 'queens', to: 'spot#queens'
  get 'bronx', to: 'spot#bronx'

  resources :user

  resources :spot do
    resources :comment
  end
end
