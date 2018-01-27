// tworzymy obiekt tablicy i przypinamy nasluchiwanie zdarzen

	var board = {
		name: 'Kanban Board',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};

	
	// implementacja funkcji initSortable(drag and drop)

	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}

	// podpiecie do przycisku tablicy wrzucanie nowej kolumny do tablicy

	$('.create-column').click(function() {
		var name = prompt('Enter a column name');

		if (name) {
			var column = new Column(name);
			board.addColumn(column);
		}
		else if (name.length === 0) {
			board.addColumn(new Column('Empty column'));
		}

	});