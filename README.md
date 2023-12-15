# Micro-Instagram
 
Note: I set up a Guard for the /photos paths to stop the user from being able to navigate to out of bound indexes, I tried to implement it just using services but due to the nature of having to fetch the pictures through http requests this leads to the Guard accidentally blocking all attempts to access the /photos components through just the browser Url even when using valid indexes, if the application were to use a repository this issue could be avoided.
