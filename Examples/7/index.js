//Promise
let promise = new Promise((res, rej) => {
	let sum = 3;
	if (sum === 3) {
		res("Success");
	}
	else {
		rej("Failed");
	}
});
promise.then((res) => {
	console.log("Result: " + res)
}).catch((res) => {
	console.log("Result: " + res)
});

//async/await
async function func() {
	let sum = 3;
	if (sum === 3) {
		return "Success";
	}
	else {
		throw new Error('Failed');
	}
}(
	async () => {
		try {
			let res = await func();
			console.log("Result: " + res);
		}
		catch (e) {
			console.error("Result: " + e)
		}
	}
)();
