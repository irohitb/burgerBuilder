React --- Send request ---> server
server --- sends back ---> JSON Data (not html)


About
//Cross domain ajax
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

//axios get
//axios post
//axios delete
//catch
//interceptops
//axios.default  -> axios.default.baseURL = "http://www.url.com" , axios.default.headers.common["Authorization"] = 'AUTH Token'
//For individual file, create a js file like axios.js
//there create an object
//instance.defaults.baseURL = "https://jsonplaceholder.typicode.com";
//Import this file, to the place where we want our baseURL


//Firebase
//In our Firebase or any backend server we should always update the price so user can't manipulate
//Firbase uses monogDb and mangoDB is just json like nested structure
//For example if we don't have order and we send a post request to https://burger-project-8613b.firebaseio.com/order.json it will create order
//For firebase we need to add json i.e order.json
