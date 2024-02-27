//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const promiseAllExample = (urls) => {
  const mutiplePromises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Http error : " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
  return Promise.all(mutiplePromises);
};
const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
];

promiseAllExample(urls)
  .then((data) => {
    console.log("Downloaded contents:", data);
  })
  .catch((error) => {
    console.log(error);
  });





async function getNumDraws(year) {
    try {
        let totalDrawMatches = 0;
        let promises = []
        for (let page = 1; page <= 196; page++) {
            const promise =  axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${page}`);
            promises.push(promise)
        }
        
        const responses = await Promise.all(promises)
            for (const response of responses) {
            const apiData = response.data;
            const drawMatches = apiData.data.filter(match => match.team1goals === match.team2goals);
            totalDrawMatches += drawMatches.length;
        }

        return totalDrawMatches;
    } catch (error) {
        console.error(error);
        // Handle or throw the error as needed
        throw error;
    }
}


 const result = responses.reduce((totalDrawMatches, response)=>{
            const apiData = response.data;
    
    // Use reduce to directly count draw matches without creating an array
    totalDrawMatches += apiData.data.reduce((count, match) => {
        if (match.team1goals === match.team2goals) {
            return count + 1;
        }
        return count;
    }, 0);

    return totalDrawMatches;
        },0)
