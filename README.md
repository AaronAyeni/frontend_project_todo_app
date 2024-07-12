# HomeChamp To-do App by Taskmasters

The frontend of https://github.com/thomaspeace/backend_project_todo_app

![Screenshot 2024-07-11 at 16 45 59](https://github.com/user-attachments/assets/0e2cd94d-0a4c-4f6c-8950-4377a0b4f3d0)


## Project Aims
Our project aim is to create a client-side interactive application to organise your household task management, allowing you to keep track of tasks within your household. So you can turn your to-do into to-done!



## MVP

### Initial Approach

Planning:
* [x] Create Trello board to track tasks to do, completed tasks, and log errors [Trello Board](https://trello.com/b/pIYj6Las/frontend-project)
* [x] Create wireframe
* [x] Create component diagram

Users:
* [x] Can view user list
* [x] Can enter new user details

Tasks:
* [x] Can view task list
* [x] Can enter new task details (the admin user is the assigner in all cases)
* [x] Can select status for each task
* [x] Can delete tasks from task list

Households:
* [x] Can view all households
* [x] Can add a household

![MVP wireframe](Diagrams/MVPWireframe2.png)


## Extensions

### Initial Approach

Users:
* [x] Can search in the user list to filter by a user

Tasks:
* [x] Can filter the task list by description, category, deadline, user assigned to task, household and status
* [x] Can change the user assigned to a task

Households:
* [x] Can filter the household list by household name

![Extension wireframe](Diagrams/ExtensionsWireframe2.png)



### Further Extensions for the Future

* [ ] Tracking/point system (scores)
* [ ] Summarise household tasks per user
* [ ] Setting recurrent tasks





### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sabah-bot/frontend_project_todo_app
    ```

2. Navigate to the project directory:

    ```bash
    cd HomeChamp
    ```

3. Install the dependencies:

    ```bash
    npm install
    npm i react-router-dom
    ```
4. Create the database:

    ```bash
    createdb todo_list
    ```






## Credits
|    |    Name     |         Github              |
|----|---------|---------------------------------|
| 🌍 | Dan     | https://github.com/Danash-Mahmood|
| 🍓 | Sabah   | https://github.com/Sabah-bot    |
| 🍄 | Aaron   | https://github.com/AaronAyeni   |



## Resources
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
https://reactrouter.com/en/main
https://nodejs.org/en
https://react.dev/
https://vitejs.dev/


## Licenses

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
