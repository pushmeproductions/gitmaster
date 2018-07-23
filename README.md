# [GITMASTER](http://gitmaster.herokuapp.com)
 
"It is the year 3000. Organic lifeforms battle for freedom against their robot overlords. The Version Control wars have been
raging since before you were born. You are the last in the line of Gitmasters, and have been captured after your defeat
in the most recent Merge Conflict. 
You awaken in a cell…"
 
Gitmaster is an interactive point and click adventure game that demonstrates the havoc that can be caused by pushing straight
to master. The player must navigate through a series of different locations, collecting items and using them to solve small
puzzles to win. The aim of the game is to blow up the React Core and exit the base in the Escape Pod.
 
 
## Roles: 

- Git Master: Elena
- Joint Scrum Master: Kelly
- Joint Scrum Master & Fun Master: Simon
- Heroku Master & Head Playtester: Hannah
 
## MVP
 
- [x] Home screen
- [x] Interactive Items
- [x] An inventory to store and use items from 
- [x] Log to read item and story messages
- [x] Five different locations: Cell, Corridor, Staffroom, React Core, Escape Pod
- [x] Back arrow moves player back to previous area
- [x] End screen
 
 
## Stretch Goals
 
- [ ] Exit to Home screen at any point in the game
- [ ] Winners table
- [ ] Sound effects
- [x] Easter egg collectibles
 
## User stories
 
- [x] As a user, I want to be able to click items to pick them up
- [x] As a user, I want to be able to move between different rooms
- [x] As a user, I want to be able to choose items from my inventory and use them to interact    with other items
- [x] As a user, I want to be able to move back to the previous room easily
- [x] As a user, I want to be able to read story and item messages in the log
- [ ] As a user, I want to be able to exit to the home screen
- [ ] As a user, I want to be able to compare my game time with other players
 
## Team Learning Objectives
 
### Redux States and Reducers
* Kelly
* Hannah
* Elena
 
### React Class Components 
* Kelly
* Hannah
* Simon
* Elena (also React constructors)
 
### Agile Project Management 
* Simon
* Hannah
 
### Testing in React/Redux
* Kelly
* Simon
* Hannah
* Elena
 
### Inkscape
* Kelly

### Beautiful original art created by Kelly!


## Base Components
 
- App
- UI
   * Inventory
   * Function
   * UI
   * Back Button
   * Log
   
- Rooms
   * Cell
   * Corridor
   * Staffroom
   * Reactcore
   * Escapepod
- Items
- Doors
- Console Interactions
- Code Givers
- Home Screen 
- End Screen
 

 
## Wireframes

[Storyboarding, wireframes and states](https://github.com/pushmeproductions/gitmaster/wiki/Wireframes)

 
### Developer Information

- Npm install
- Run dev
- Local host 3000
- File structure is separated into base component files, a list of which can be found above
- Please check the reducer index to get a good idea of our states.

	
	
## Item List

| Item                   | Location    | OnClick                                                     | Log Message                                                                                                                                                              | Joins Inventory | Used For                                     |
|------------------------|-------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------------------------------------------|
| Skull                  | Cell        | =>Inventory                                                 | "You feel like you're being watched"                                                                                                                                     | Yes             | Try to jam Escapepod door closing. It fails. |
| Bucket                 | Cell        | =>Inventory                                                 | "The contents of this bucket glow strangely, you wonder if they might be corrosive..."                                                                                   | Yes             | Corroding Cell Door                          |
| Cell door              | Cell        | if open=>to corridor & msg if locked=>locked msg            | if open =>"Spark! Flash! The door opens and you find yourself in a corridor" if locked=>"The door is locked..."                                                          | No              | Getting to corridor                          |
| Second Cell            | Corridor    | =>Cookie msg                                                | "You search the empty cell and find...a cookie?'                                                                                                                         | No              | Finding Cookie                               |
| Cookie                 | Second Cell | N/A                                                         |                                                                                                                                                                          | Yes             | Giving to robot                              |
| Staffroom Sign         | Corridor    | =>To Staffroom                                              |                                                                                                                                                                          | No              | Find code/items                              |
| AuthBot                | Corridor    | no cookie=>msg cookie=>msg no cookie x2 => restart game msg | no cookie=>"I MOUSTACHE you to authorise yourself" cookie=>"Authbot smiles benignly, moves aside and gives you...some code?" no cookie x2=>"Back to your cell human"                                               | No              | Lets pass to staffroom/reactcore             |
| AuthBot Moustache      | Corridor    | =>msg                                                       | "So curly"                                                                                                                                                               | Yes             | Closing function                             |
| Staff Logs             | Staffroom   | =>readable gives password                                   | "ENTRY 3876: Lucky, I didn't double checked this morning, I was about to push to master!! That would have been a disaster" "ENTRY 3100: System password update: 1000001" | No              | Finding Password                             |
| Password               | Staff Logs  | N/A                                                         |                                                                                                                                                                          | Yes             | Entering in Control Panel Computer           |
| Locker 1               | Staffroom   | =>gives crowbar msg                                         | "You rummage around and find a crowbar"                                                                                                                                  | No              | Giving Crowbar                               |
| Locker 2               | Staffroom   | =>gives picture msg                                         | "Something catches your eye, a family portrait?Robots just like me" or something blah                                                                                    | No              | Giving Picture                               |
| Locker 3               | Staffroom   | =>gives key msg                                             | "You find an old rusty key"                                                                                                                                              | No              | Giving Key                                   |
| Crowbar                | Locker 1    | N/A                                                         |                                                                                                                                                                          | Yes             | Jamming Escapepod door                       |
| RobotFamilyPicture     | Locker 2    | N/A                                                         |                                                                                                                                                                          | Yes             | None                                         |
| Random Key             | Locker 3    | N/A                                                         |                                                                                                                                                                          | Yes             | None                                         |
| Control Panel Computer | Reactcore   | =>pop up for password/branch change                         | "Password Required" SWITCH TO MASTER BRANCH                                                                                                                              | No              | Entering password                            |
| Don't Push Button      | Reactcore   | =>no password=>nothing happens =>password=>msg              | "Meltdown sequence initiated. 10...9...8..."                                                                                                                             | No              | Initating meltdown sequence                  |
| Escapepod Sign         | Reactcore   | =>To Escapepod                                              |                                                                                                                                                                          |                 | Getting to Escapepod                         |
| Escape Pod Panel       | Escapepod   | =>pop up for function if complete functio=>To Endscreen     | "Unexpected Token" "Escape Function Incomplete"                                                                                                                          |                 | Escaping to Endscreen== Win!                 |
 

## Code List

| Code                         | Location                |
|------------------------------|-------------------------|
| function escape ()           | Cell/ written on skull? |
| (core.status == ‘meltdown’)  | Corridor/from Authbot   |
| {                            | Corridor/Authbots stach |
| var core.status = ‘meltdown’ | Staffroom/Logs          |
| { return ‘escapeKey’}        | Staffroom/Locker?       |
