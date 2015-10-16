Rails.application.routes.draw do
  get 'case-studies', to: 'pages#case_studies'
  get 'contact', to: 'pages#contact'
  get 'environmental-policy', to: 'pages#environmental_policy'
  get 'services', to: 'pages#services'
  get 'testimonials', to: 'pages#testimonials'

  root to: 'pages#index'
end
