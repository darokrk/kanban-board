$(function() {
	
	// generujemy unikalne ID aby nie bylo duplikatow

	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		for (var i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

// tworzenie elementow w kanbanie

// kolumny

var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// dodanie kolumn do tablicy

board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// tworzenie kart

var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');

// dodanie kart do kolumn

todoColumn.addCard(card1);
doingColumn.addCard(card2);