// dart2native sum.dart -o sum
// dart2js -o sum.js sum.dart
// dart2js -m -o sum.min.js sum.dart

// time dart sum.dart
// time ./sum
// time node sum.js


main(List<String> args) {
  var sum = 0;
  for (var i = 0; i < 1000000000; i++) {
    sum += i;
  }
  print(sum);
}