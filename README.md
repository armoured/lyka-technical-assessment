## lyka-technical-assessment

Hi! This is my submission for the Lyka Technical Assessment. 

I have decided on an Object Oriented Approach where I have modelled the Warehouse and Robot as separate services.

I have also applied TDD, which helped me with understanding the inputs and outputs I would be working with for these services.

Due to time constraints, I prioritised the main functionality and testing. This meant I de-prioritised other areas such as

* A better error object -> I had decided it would be faster to use a simple string to throw errors.
* A better user interface (i.e allowing the user to quit with the command Q or look for instructions with the command H) -> The reason I didn't implement this was because the instructions are in this README and the user can quit with CTRL + C. However, given more time, this is something that would provide a huge quality of life to the user.

### Installation Instructions

install nvm for managing node versions

`nvm install 21`

`nvm use 21`

check your node and npm versions

`node -v` (should say v21.7.3)

`npm -v` (should say 10.5.0)

next run 

`npm i`

### Run the application

simply run

`npm run start`

A 2D Grid will popup on your terminal and you will be asked to enter commands to move a robot.

To move the robot enter commands "N E S W" without the quotemarks. 

The input must be single-space separated. You cannot write "NESW". It must also be capital letters.

You cannot have multiple spaces between instructions. I.e. "N    E" does not work. It must be "N E"

N means "North", which moves the robot up

E means "East", which moves the robot right

S means "South", which moves the robot down

W means "West", which moves the robot left


To exit the program, simply run CTRL + C (or CMD + C depending on your operating system)

### Tests

To run the test suite, run

`npm run test`