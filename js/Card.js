// tworzymy funkcje konstruujaca klase Card

	function Card(id, name) {
		var self = this;

		this.id = id;
		this.name = name || 'Empty Card';
		this.$element = createCard();

		// tworzymy karte

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.name);
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
			var self = this;
    		$.ajax({
      			url: baseUrl + '/card/' + self.id,
      			method: 'DELETE',
      			success: function(){
        			self.$element.remove();
      			}
    		});
		}
	};