# Web Api Template

This creates a template for Api Development with Node.js

## Project Structure

The project structure follows the **MVC** (Model-View-Controller) pattern. You can think of the **JSON** representation of data returned by the API as the 'view'.
```
├── src/
    ├── bin
        ├── www.js
    ├── config
        ├── index.js
    ├── controllers
        ├── BaseController.js
    ├── data
        ├── repositories
            ├── BaseRepository.js
        ├── schemas.js
            ├── BaseSchema.js
    ├── jobs
        ├── agenda.js
    ├── loaders
        ├── index.js
    ├── routes
        ├── index.js
    ├── services
        ├── TodoService.js
    ├── utils
        ├── logger.ts
├── .env.example
├── package.json
```

## Requirements

* Node.js v10.x or higher
* npm or yarn
* MongoDB instance (local or remote)

## Getting Started

```
$ git clone https://github.com/jherey/web_api_template.git
$ cd web_api_template
$ yarn install
$ yarn dev                     # For development purpose
$ yarn start                   # To run production build
```

You should now be able to access the API via http://localhost:3000/

**NOTE:** Create a `.env` file configuration following the `.env.example`.


## Contributions

You want to help develop or improve my template, I welcome contributions, what are you waiting for? Raise a Pull Request!! 😁

### License

This project is licensed under the MIT license.
