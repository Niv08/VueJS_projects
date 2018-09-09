if (!localStorage.getItem("tasks")) {
	localStorage.setItem("tasks", JSON.stringify([]));
	localStorage.setItem("nextId", JSON.stringify(0));
}

var arr = JSON.parse(localStorage.getItem("tasks"));
var nextId = JSON.parse(localStorage.getItem("nextId"));

new Vue ({
	el: "#TDL",
	data: {
		userInput: '',
		tasks: arr
	},
	methods: {
		toggleComplete(i) {
			this.tasks[i].completed = !this.tasks[i].completed;
			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		},
		addTask() {
			if (/\S/.test(this.userInput)) {
				let t = {
					id: nextId,
					name: this.userInput,
					completed: false
				};
				this.tasks.push(t);
				this.userInput = '';
				nextId++;
				localStorage.setItem("tasks", JSON.stringify(this.tasks));
				localStorage.setItem("nextId", JSON.stringify(nextId));
			}
			return;
		},
		deleteTask(i) {
			this.tasks.splice(i, 1);
			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		},
		clear() {
			for (let i = 0; i < this.tasks.length; i++) {
				if (this.tasks[i].completed) this.deleteTask(i);
			}
			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		}
	}
});