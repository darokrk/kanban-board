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

	$('.create-column')
    .click(function() {
        var columnName = prompt('Enter a column name');
        $.ajax({
    		url: baseUrl + '/column',
    		method: 'POST',
    		data: {
            	name: columnName
    		},
    		success: function(response){
    			if (columnName) {
    			var column = new Column(response.id, columnName);
    			board.addColumn(column);
    			}
    			else if (columnName.length === 0) {
    				board.addColumn(new Column("Empty Column"));
    			}
          	}
        });
	});