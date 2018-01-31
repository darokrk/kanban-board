// tworzymy obiekt tablicy i przypinamy nasluchiwanie zdarzen

	var board = {
		name: 'Kanban Board',
		createColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};

	// podpiecie do przycisku tablicy wrzucanie nowej kolumny do tablicy

/*
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
*/

	$('.create-column').click(function() {
			var name = prompt('Enter a column name');
				if (name)	{
					createAjaxColumn(name);
				}
				else if (name.length === 0) {
					createAjaxColumn("Empty Column");
				}
		});

	function createAjaxColumn(columnName) {
		$.ajax({
			url: baseUrl + '/column',
			method: 'POST',
			data: {
				name: columnName
			},
			success: function(response) {
				var column = new Column(response.id, columnName);
				board.createColumn(column);
			}
		});
	}

	// implementacja funkcji initSortable(drag and drop)

	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}