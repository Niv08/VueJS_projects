new Vue ({
	el: '#app',
	data: {
		players: [
			{
				name: 'YOU',
				health: 100
			},
			{
				name: 'MONSTER',
				health: 100
			}
		],
		inGame: false,
		actionLog: []
	},
	methods: {
		startGame() {
			this.inGame = true;
			this.players[0].health = 100;
			this.players[1].health = 100;
			this.actionLog = [];
		},
		attack() {
			let pAtt = Math.floor(Math.random() * 15);
			let mAtt = Math.floor(Math.random() * 15);
			this.actionLog.push({
				player: pAtt,
				monster: mAtt
			});
			this.players[0].health -= mAtt;
			if (this.players[0].health <= 0){
				this.players[0].health = 0;
				this.endGame('m');
			}

			this.players[1].health -= pAtt;
			if (this.players[1].health <= 0){
				this.players[1].health = 0;
				this.endGame('p');
			}
		},
		specialAtt() {
			let pAtt = Math.floor(Math.random() * 25);
			let mAtt = Math.floor(Math.random() * 25);
			this.actionLog.push({
				player: pAtt,
				monster: mAtt
			});
			this.players[0].health -= mAtt;
			if (this.players[0].health <= 0){
				this.players[0].health = 0;
				this.endGame('m');
			}
		
			this.players[1].health -= pAtt;
			if (this.players[1].health <= 0){
				this.players[1].health = 0;
				this.endGame('p');
			}

		},
		heal() {
			if (this.players[0].health === 100) return;

			let hp = Math.floor(Math.random() * 30);
			this.players[0].health += hp;

			if (this.players[0].health >= 100) {
				this.players[0].health = 100;
			}
		},
		giveUp() {
			this.players[0].health = 0;	
			this.endGame('m');
		},
		endGame(result) {
			this.inGame = false;
			if (result === 'p') {
				alert ("Winner!");
			}
			else {
				alert("You lost...");
			}
		}
	}
});