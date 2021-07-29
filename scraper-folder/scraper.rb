    # url = "https://en.wikipedia.org/wiki/Douglas_Adams"
    # uri = uri.parse(url)
    # response = Net::HTTP.get_response(uri)
    # puts response.body


require "HTTParty"
require "nokogiri"
html = HTTParty.get("https://en.wikipedia.org/wiki/Sun_Ra#The_Arkestra")
response = Nokogiri::HTML(html)
doc = response
description = doc.css("p")[1]


puts description


