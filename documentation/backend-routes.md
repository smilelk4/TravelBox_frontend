# Backend Routes

| method     | path           | subpath             |  description                                      |
| ---------- | -------------- | ------------------- | ------------------------------------------------- |
| GET        | /users         | /:id                | Get information of a single user.                 |
| GET        | /users         | /:id/collections    | Get all collections of a particular user.         |
| GET        | /users         | /:id/wishes         | Get all wish items of a single user.              |
| POST       | /users         |                     | Create a new user.                                |
| POST       | /users         | /token              | Verify user login and returns token.              |
| GET        | /collections   | /:id                | Get all wish items within a single collection.    |
| DELETE     | /collections   | /:id                | Delete a specific collection.                     |
| POST       | /collections   |                     | Create a new collection.                          |
| GET        | /wishes        | /:id                | Get information of a single wish item.            |
| POST       | /wishes        |                     | Create a new wish item.                           |
| PUT        | /wishes        | /:id                | Edit single wish item information.                |
| DELETE     | /wishes        | /:id                | Delete a specific wish item.                      |