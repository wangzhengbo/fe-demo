// https://dart.dev/guides/language/extension-methods
// import 'string_apis.dart';

extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
}

extension MyFancyList<T> on List<T> {
  int get doubleLength => this.length * 2;
  List<T> operator-() => this.reversed.toList();
  List<List<T>> split(int at) => 
      <List<T>>[this.sublist(0, at), this.sublist(at)];
}

main(List<String> args) {
  print('1'.parseInt() + 2);
  
  // dynamic d = '2';
  // print(d.parseInt()); // Runtime exception: NoSuchMethodError

  List<int> list = [1, 2, 3];
  // List<int> list2 = [2, 3, 4];
  print(list.doubleLength);
  print(list.split(1));
  print(-list);
  // print(list2 - list);

  // print('12')

  // https://stackoverflow.com/questions/57598838/non-nullable-by-default-how-to-enable-the-experiment
  // Error: This requires the 'non-nullable' experiment to be enabled.
  // Try enabling this experiment by adding it to the command line when compiling and running.
  // /usr/local/Cellar/dart/2.7.0/bin/dart --enable-experiment=non-nullable extensionMethods.dart
  String? s;
  print(s?.length);
  int? i = s?.parseInt();
  print(i);

  print('123'.characters.take(2));
}