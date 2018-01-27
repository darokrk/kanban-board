// tworzymy funkcje konstruujaca klase Column

	function Column(name) {
		var self = this;

		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		// tworzymy kolumne

		function createColumn() {
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete-column fa fa-trash-o').text('');
			var $columnAddCard = $('<button>').addClass('add-card fa fa-plus-square').text('');
		

			// kasowanie kolumny po kliknieciu w przycisk

			$columnDelete.click(function() {
					self.removeColumn();
			});

			// dodaj notatke po kliknieciu w przycisk

			$columnAddCard.click(function() {
				var card = prompt("Enter the name of the card");
				if (card) {
					self.addCard(new Card(card));
				}
				else if (card.length === 0){
					self.addCard(new Card(card));
				}
			});	

			// konstruowanie kolumny

			$column.append($columnTitle)
					.append($columnDelete)
					.append($columnAddCard)
					.append($columnCardList);

			return $column;
		}
	}

	// dodanie prototypu

	Column.prototype = {
		addCard: function(card) {
			this.$element.children('ul').append(card.$element);
		},
		removeColumn: function() {
			this.$element.remove();
		}
	};