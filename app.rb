require 'bundler'
Bundler.require()

require './models/card'

ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'dashboard_app'
)

get '/' do
  erb :index
end

get '/variables' do
	erb :variables
end

get '/api' do
	erb :api
end

get '/variables/submit' do
	erb :submit
end

# RESTful api
# list all
get '/api/cards' do
	content_type :json
	cards = Card.all
	cards.to_json
end

# list by id
get '/api/cards/:id' do
	content_type :json
	id = params[:id].to_i
	card = Card.find(id)
	card.to_json
end

# create
post '/api/cards' do
	request_body = JSON.parse(request.body.read.to_s)
	# must read the request_body keys as strings; symbols return null
	card_args = { title: request_body["title"], message: request_body["message"] }
	card = Card.create(card_args)
	card.to_json
end

# update
# future implementation
patch '/api/cards/:id' do
	content_type :json
	id = params[:id].to_i
	card = Product.find(id)
	card_args = { name: params[:title], description: params[:message] }
	card.update(card_args)
	card.to_json
end
# legacy implementation
put '/api/cards/:id' do
	content_type :json
	id = params[:id].to_i
	card = Card.find(id)
	card_args = { name: params[:title], description: params[:message] }
	card.update(card_args)
	card.to_json
end

# delete
delete '/api/cards/:id' do
	content_type :json
	id = params[:id].to_i
	Card.delete(id)
	{ message: 'Card removed' }.to_json
end
