# Task Manager API (John Smilga Node Course)

- learn how to persist data through database (MongoDB)
- learn all CRUD operations
- focused on the backend, front end app is from instructor

# RESTful API

### What is a rest API

**RE** - representational
**S** - state
**T** - transfer

**REST** combines http verbs, route paths, and data. Determines how the API would look like. It is a pattern, not a strictly enforced structure.

### In this tutorial, _REST_ pattern is followed

| **Method**   | **Route**     | **Description** |
| ------------ | ------------- | --------------- |
| GET          | api/tasks     | get all tasks   |
| ------------ | -----------   | --------------- |
| POST         | api/tasks     | create task     |
| ------------ | -----------   | --------------- |
| GET          | api/tasks/:id | get task        |
| ------------ | -----------   | --------------- |
| PUT/PATCH    | api/tasks/:id | update task     |
| ------------ | -----------   | --------------- |
| DELETE       | api/tasks/:id | delete task     |

**Note**: endpoints are consistent, thus making the API more user friendly, and friendly for the creator too!
