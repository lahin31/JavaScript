// Asynchronous call with generators(get request)
 
// This is a Generator function
function* get_gen() {
	 yield axios.get("https://jsonplaceholder.typicode.com/users");
	 yield axios.get("https://jsonplaceholder.typicode.com/posts");
};

let myGen = get_gen();
console.log(myGen.next().value.then(resp => console.log(resp))); // myGen.value() iterator will trigger the first item from the get_gen() generator
console.log(myGen.next().value.then(resp => console.log(resp))); // myGen.value() iterator will trigger the second item from the get_gen() generator
