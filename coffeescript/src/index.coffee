# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)

object1 = one: 1, two: 2
object2 =
  one: 1
  two: 2
  class: "numbers"

arr = [
  1
  2
]

obj = {a: 'foo', b: "bar"}
{a, b} = obj
arr = [1, 2]
[a, b] = arr

numbers = [0..9]
numbers[3..5] = [-3, -4, -5]
my = "my string"[0..1]

arr = ["foo", "bar"]
"foo" in arr

for name, i in ["Roger", "Roderick"]
  alert "#{i} - Release #{name}"


for name in ["Roger", "Roderick"]
  alert "Release #{name}"

prisoners = ["Roger", "Roderick", "Brian"]
release prisoner for prisoner in prisoners when prisoner[0] is "R"

result = (item for item in array when item.name is "test")

names = sam: seaborn, donna: moss
alert("#{first} #{last}") for first, last of names

result = if not true then "false"
result = unless true then "false"

if "1" == 1
  alert("equal")
else
  alert("not equal")

# hash or= {}
# hash ?= {}
knight.hasSword()?.poke()
knight.hasSword().poke?()
alert
alert 1

$(".toggle").toggle ->
  "on"
, ->
  "off"

@clickHandler = -> alert "clicked"
element.addEventListener "click", (e) => @clickHandler(e)

@clickHandler = -> alert "clicked"
element.addEventListener "click", (e) -> @clickHandler(e)
