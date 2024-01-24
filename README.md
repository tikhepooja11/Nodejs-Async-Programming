Difference between package.json & package.lock.json files

The symbols ^ and ~ are used to define version ranges for packages.
Example: "express": "^4.17.1"  - allows 4.17.2, 4.18.0, etc., are acceptable, but 5.0.0 or higher is not.
allow the updates that do not include breaking changes. locks the major version & only allows minor + patch versions


"express": "^4.17.1" -  allows 4.17.1, 4.17.2, 4.17.3 but not 4.18.0 & higher
allows the updates that do not include breaking changes. Locks both major  & minor versions only allows patch version.

Purpose - Basically both files are used for version dependency management but package.lock.json file is is to provide a complete, detailed, and timestamped record of the exact versions of every installed package and its dependencies, to ensure that the same versions are installed across different environments.

Installing a Package:

when you installs any package by npm install, it will be get added in both package.json & package.lock.json file
at the same time package.lock.json file locks the specific versions of dependencies & sub-dependencies,

Updating a Package:

When you want to update a package, then on npm install it updates the version range as per updated package version in package.json file
at the same time package.lock.json file will be updated as well to reflect the exact version to which it is updated & also locks the dependencies based on new updates.

------------------------------------------------------------------------------------------------------------------

Difference Between Axios & Fetch 
1. Axios provides higher level API & so provides multiple features out of the box.
    While Fetch provides low level API & it uses promise methods to handle the data

2. Error while data fetching gets caught by Axios library automatically through catch 
   but with fetch, it basically does not throws any error instead it sends ok property of response 
   we have to check by if !response.ok property to check any errors.

3. Axios automatically converts data into JSON but with fetch we need to manually parse the response data using .json() / .text() methods.
   
