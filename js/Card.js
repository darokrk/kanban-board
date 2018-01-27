// tworzymy funkcje konstruujaca klase Card

	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		// tworzymy karte

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');

			// kasowanie karty po kliknieciu w przycisk(wewnatrz metody createCard())

			$cardDelete.click(function() {
				self.removeCard();
			});

		// konstruujemy karte(wewnatrz metody createCard())
		
			$card.append($cardDelete)
					.append($cardDescription);

			return $card;

		}
	}

	// dodanie prototypu

	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	};

	// tworzymy obiekt tablicy i przypinamy nasluchiwanie zdarzen

	var board = {
		name: 'Kanban Board',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};