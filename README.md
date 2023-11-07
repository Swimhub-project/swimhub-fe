# swimhub-fe
 
 ## Developer notes: 

 ### API

 - Dummy data is from [dummyJSON](https://dummyjson.com/) and stands in for the swimhub API data
 - The search bar filters by title and offers suggestions as you type
 - The filter panel filters by tags and user id
 - Need to add safeguards against refetching data

 ### Conditional Rendering

 - Home page should be accessed directly when a user is logged in
 - Logged out users and guests shoulg be directed to the Landing page
 - Sign up and login buttons in header should not render when user is logged in
 - Confirm email page 
 - 'Add an exercise' button will be added to home. It will be disabled for guests
 - Profile page, add exercise page, and any support pages will be disabled for guests
 
