## creating middleware example

* first check if the cookie contains admin field 
    * if yes:
        * give him the admin authorization (get access to admin pages).
    * else:
        * allowed access only to user pages

### and that middleware will set in the middle from the server and user


* `router.get('/getUsers', middlewareFunc, routerGetUserFunc)` example of router
