Difference Between Axios & Fetch 
1. Axios provides higher level API & so provides multiple features out of the box.
    While Fetch provides low level API & it uses promise methods to handle the data

2. Error while data fetching gets caught by Axios library automatically through catch 
   but with fetch, it basically does not throws any error instead it sends ok property of response 
   we have to check by if !response.ok property to check any errors.

3. Axios automatically converts data into JSON but with fetch we need to manually parse the response data using .json() / .text() methods.
   
