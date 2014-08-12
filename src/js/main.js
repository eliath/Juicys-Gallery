_main = {

	init: function init() {
		this.render();
	},

	render: function render() {
		$('.contact').text(this.getEmail()).click($.proxy(this.sendEmail, this));
	},

	getEmail: function getEmail() {
		if (this.email_address) return this.email_address;
		//secur by obscur
		var user = ['cys', 'jui'].reverse().join('');
			domain = ['o','f','n','i','.','y','r',
					'e','l','l','a','g','s','y',
					'c','i','u','j'].reverse().join('');
		this.email_address = [user,domain].join('@');
		return this.email_address;
	},

	sendEmail: function sendEmail() {
		this.getEmail();
		window.location.href = 'mailto:' + this.email_address;
	}

};