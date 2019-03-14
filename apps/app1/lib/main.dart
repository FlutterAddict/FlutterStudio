import 'package:flutter/material.dart';



void main() => runApp(TheApp());



class TheApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'The App',
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(),
      body: Center(
        child: Text('Hello World')
      ),
      floatingActionButton: AddFAB(),
    );
  }
}



class MyAppBar extends StatelessWidget implements PreferredSizeWidget {

  Size get preferredSize => new Size.fromHeight(kToolbarHeight);

  Widget build(BuildContext context) {
    return AppBar(
      leading: IconButton(
        icon: Icon(Icons.menu),
        tooltip: 'Open Navigation Menu',
        onPressed: null,
      ),
      title: Text('The App'),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.search),
          tooltip: 'Search',
          onPressed: null,
        )
      ],
    );
  }
}



class AddFAB extends StatelessWidget {
  Widget build(BuildContext context) {
    return FloatingActionButton(
      tooltip: 'Example FAB',
      child: Icon(Icons.add),
      onPressed: null,
    );
  }
}