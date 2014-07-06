places = require 'places'
{drop, unique, flatten, map} = require 'prelude-ls'

tags = map (.key), places
  |> map (drop 2)
  |> flatten 
  |> unique 
console.log tags
