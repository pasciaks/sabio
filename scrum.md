# SCRUM

    What did you accomplish
    What are you going to accomplish
    What are your blockers

# October 29, 2020

### ----- ACCOMPLISHED -----

        [ ] Create web api end point for users, tighten up all code to this point

        [ ] Decorate other classes with server side validation

                ____ Friend
                |    ___ Address
                |   |
                [x] [x] Decorated AddUserRequest, required, min lengths and password complexity
                        [Required]
                        [StringLength(64, MinimumLength = 2)]
                        [RegularExpression(@"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$%^&*-]).{8,}",
                        ErrorMessage = "Password complexity not met.")]
                [x] [x] Decorated AddFriendRequest, required, min lengths
                        [Required]
                        [StringLength(64, MinimumLength = 2)]

               [x] [x] Inherited , IModelIdentifier in FriendUpdateRequest - UserUpdateRequest

               [x] [x] Created IFriendService IUserService interface (right click services class, ... extract interface), drag to correct folder

               [x] [x] Added Dependency injection singleton for FriendsService IFriendsService - UsersService IUsersService

               [x] [x] Created FRIENDS and USERS end points ... implemented try/catch and single return response with return code

               [x] [x] GET /api/friends /api/users

               [x] [x] GET /api/friends/{id:int} /api/users/{id:int}

               [x] [X] DELETE /api/friends/{id:int} /api/users/{id:int}

               [x] [X] POST /api/friends /api/users

               [x] [x] PUT /api/friends/{id:int} /api/users/{id:int}

               [x] PUT /api/friends/{id}/{statusId} - UpdateStatus(int id, string statusId)

               [x] Fixed return friend data for Image ( PrimaryImage { } ) now returning List<Image> and JSON Auto use to return appropriately.

               [X] Code Reviewed

               [x] UTILITY FUNCTION FOR PARAM MAPPING (MapUserParams)

               [x] UTILITY FUNCTION FOR PARAM MAPPING (MapAddressParams, MapFriendParams)

### ----- WILL ACCOMPLISH -----

                [ ] Three remaining videos under .net core

                [ ] Get Paging Working

                [ ] Events or Tech Companies / Jobs



                [ ] Dig deep into Create and Update and use of UserId and Id in route (like UpdateStatus(int id, string statusId))
                        Create (ModelAddRequest model, int currentUserId) for Add
                        Update (ModelUpdateRequest model, int currentUserId, int id) for Update

                [ ] Need to be consistent in naming (i.e. don't like -> GetTop)

                [ ] TODO - ObjectResult result = null; // TODO FIX THIS LIKE BaseResponse response = null;

                [ ] Modify int currentUserId to nvarchar(128) string - Or just continue to .ToString() it...

                [ ] Dig deep into how Skills works in Create and Update for Friends...

### ----- BLOCKERS -----

# October 28, 2020

### ----- ACCOMPLISHED ----

        [x] finished Web api videos

        [x] created end point WEB api for Addresses

                GET                             GetAll
                /api/addresses

                GET                             Get
                /api/addresses/{id:int}

                POST                            Create
                /api/addresses

                PUT                             Update
                /api/addresses/{id:int}

                DELETE                          Delete
                /api/addresses/{id:int}

        [x] Refactored, single return point, try and catches, authorization getCurrentUser

### ----- WILL ACCOMPLISH ----

        [ ] Create web api end point for users, tighten up all code to this point
        [ ] Decorate other classes with server side validation

### ----- BLOCKERS -----

        [ ] Only Patrick and Me have waka time installs in Visual Studio
        [ ] I'm the only one pushing updated branches!

# October 28, 2020

### ----- ACCOMPLISHED ----

        [X] Implemented "Retrieving Multiple Id's for Batch Inserts"

        [x] created SkillsService, Skills domain and Batch Add for Skills

        [ ] Moved on to Web Api Development

### ----- WILL ACCOMPLISH ----

        [ ] Finish all videos for Web API Development

### ----- BLOCKERS -----

# October 27, 2020

### ----- ACCOMPLISHED ----

        [x] Completed UsersService CRUD
        [x] Created Friends_UpdateStatus PROC and C# call
        [x] Created FriendsService
        [x] CREATED [FriendsSkills_Delete] (deletes FriendsSkills where FriendId = @Id)
        [x] Completed Friends Service

        [x] Friends service with batch update skills, SkillAddRequest, SkillUpdateRequest SkillsAddRequest

        [x] Completed Events CRUD

### ----- WILL ACCOMPLISH ----

        [ ] Q review ?

        [ ] Implement "Retrieving Multiple Id's for Batch Inserts" for Friends

        [ ] Move on to Tech Companies Jobs

### ----- BLOCKERS -----

# October 26, 2020

### ----- ACCOMPLISHED ----

        [ ] Completed C# PRIMER
        [ ] AddressesService, Address class and CRUD
                Request Models - [AddressAddRequest, AddressUpdateRequest]
        [ ] CREATE DOMAIN CLASSES FOR User, Friend, Event
                Request Models - [UserAddRequest, UserUpdateRequest]
                Request Models - [FriendAddRequest, FriendUpdateRequest]
                Request Models - [EventAddRequest, EventUpdateRequest]
        [ ] Created domain classes for Skill, Image
        [ ] STARTED UsersService

### ----- WILL ACCOMPLISH ----

        [ ] Complete UsersService
        [ ] Complete FriendsService

### ----- BLOCKERS -----

        [ ] anticipate difficulty with sub-table skills and primary images

# October 25, 2020

# October 24, 2020

### ----- ACCOMPLISHED ----

        [x] formik/yup versions of login, register, friends


                [x] passwords don't match Yup
                [x] min length
                [x] regex

        [x] wired up login, register

        [x] friends form geared with dogform example

                [x] Edit in view
                [x] Add in view

        [x] install vs community 2019

### ----- WILL ACCOMPLISH ----

        [ ] finish friends change to formik/yup

                [ ] populate on route
                [ ] wire up add/edit to backend

        [ ] start the new stuff!

### ----- BLOCKERS -----

# October 23, 2020

### ----- ACCOMPLISHED ----

        [ ] INTEGRATED Yup and Formik for form use on Login and various examples

### ----- WILL ACCOMPLISH ----

        [ ] INSTALL VS STUDIO COMMUNITY

        [ ] Login
        [ ] Register
        [ ] Friends Form
        [ ] Events Form

# October 22, 2020

### ----- ACCOMPLISHED ----

        [ ] Revisited React, tidy up code, reviewed for Assessment

        [ ] Reviewed for Assessment

                [ created Albums, Songs, AlbumsSongs tables ]

                [ created PROCS for each - INSERT, UPDATE, DELETE, SelectAll, SelectById ]

                [ Albums_Insert allows batch insert of songs using UDT ]

                [ Albums SelectAll uses AUTOJSON to show all songs on album line ]

                [ Creates friends like Component called Tests that renders with route /tests ]

                [ onComponentDidMount AXIOS calls friends, gets results,
                updates state with array of friends and Maps REACT-Strap Cards 'TEST' into view ]

                [ functional REACT Strap Test Card accepts clicks
                and can pass info back using function reference passed in as props ]

### ---- WILL ACCOMPLISH

        [ ] Progress on Events

# October 21, 2020

### ----- ACCOMPLISHED ----

        [x] Watched SQL Videos on Joins

        [x] Completed friends selectall and selectbyid using joins for image and skills and AUTO JSON

        [x] got rid of unique constraint on friends slug ( was too much a hassle during testing )

        [X] updated Friends_Update to ensure it can update skills using FriendsSkills_Insert PROC

        [x] created events table, created Events_Insert, Events_Update, Events_SelectAll, Events_SelectById, Events_Delete,

        [x] created Events_SelectPaginated, Events_SearchPaginated

        [x] created Events_SelectByLocation ( Using internal Math )

        [x] watched the View videos, created view in my db

### ----- WILL ACCOMPLISH -----

        -- TODO - GET RID OF ALL SELECT *'S IN ALL PROCS TEST CODE IN DB

        [ ] move back to react and get events fully working

        [ ] implement geo address PlacesAutocomplete - import PlacesAutocomplete, { geocodeByAddress, } from "react-places-autocomplete";

        [ ] implement map with all events as markers

        [ ] plan to EITHER
                MODIFY Backend so front end will work with it, or
                MODIFY Frontend to use what I currently have in back end

### ----- BLOCKERS -----

# October 20, 2020

### ----- ACCOMPLISHED ----

        [X] FriendsSkills_Insert_V3] using UDT
                It adds a friend (enforces unique slug constraint)!
                It takes imageUrl and creates ImageID and inserts appropriate PrimaryImageId!
                It takes collection of skills and adds skills as needed and updates FriendsSkills bridge table!

        [x] Reformatted all PROCs using APEX FORMAT SQL - Is there a format on Save ?

        [x] a lot more than it seems, hard to put a handle on it all but I worked
                a ton of procs - udt table, create table and procs from scratch

### ----- WILL ACCOMPLISH -----

        [ ] Watch SQL Videos on Joins

        [ ] Continue to work PROCS and DATABASE, SQL Joins

### ----- BLOCKERS -----

        [ ] Should our tables implement StatusId for deletes and thereby needing a lot of rework

# October 20, 2020

### ----- ACCOMPLISHED ----

        creates jobs, techcompanies, jobsskills

        MODIFIED FRIENDS INSERT TO CREATE IMAGES RECORD AND RUN FRIENDSSKILLS_INSERT

        CREATED FRIENDSSKILLS INSERT BUT IT FAILING FOR UPDATES - NEED TO USE SPECIAL VERSION FROM GREGORIO

### ----- WILL ACCOMPLISH -----

### ----- BLOCKERS -----

# October 19, 2020

### ----- ACCOMPLISHED ----

        [x] SQL PROC CRUD FOR USERS, PEOPLE (video version), Skills Locations

        [x] CREATED TABLES users, people, skills, locations, friends, techcompanies

        [x] CREATE 1ST VERSION OF PROCS insert update delete selectbyid selectedpaginated searchpaginated

        [x] SET Unique constraint on slug field in friends

        [x] Bridge Table FriendsSkills FK relationships (USING DESIGN DATABASE DIAGRAM)

        [x] CREATED TABLES Images, ImageTypes and FK relationship

        [x] Watched all the UDT Videos -

### ----- WILL ACCOMPLISH -----

        [ ] FriendsSkills_Insert, Update, Delete, SelectAll

        [ ] Modified version of Friends Select All that brings in Primary Image from FK
                as well as Skills from bridge table

        [ ] Create bridge table for Images and Friends

        [ ] Update the friends table to use PrimaryImage as int relationship to images
        with entityId typeId to retrieve TypeId 3 for Primary Image

### ----- BLOCKERS -----

        (question).. when we move on, will we be using our own DB and stored procedures
                to integrate with middle tier c#?

        (reason).. implmentation will yield changes needed to our current PROCs
                after insight gained resulting in more time

# October 16, 2020

### ----- ACCOMPLISHED ----

        [X] Complete Q for early stage of Events...

        [X] install wiki for SQL and ssms

        [X] completed edit in modal

        [X] completed selected event shows MAP VIEW

        [X] url for selected event /events/31523

        [X] default selected event to latest event if no event url /events/12343

        [X] Date/Time picker for Event search between dates (JACKED MY STUFF UP)
                (x) I need to revise this on my own time.
                (x) converted to text fields for date.
                ( ) need date formatting

        [ ] add search by date to events cards and ensure paging works with it
                (x) All I need to do is put in the date fields and execute

        [ ] Address to gps, and store in api data
                ( ) Need to do this google address to geo info api

        [X] MOVED ON TO SQL

        [X] INSTALLED APEX FORMATTER

        [ ] WATCHED VIDEOS .....

        [ ] SQL PROC CRUD FOR USERS, PEOPLE AND POSSIBLY FRIENDS

### ----- WILL ACCOMPLISH -----

        [ ] SQL PROC CRUD FOR USERS, PEOPLE AND POSSIBLY FRIENDS

### ----- BLOCKERS -----

# October 15, 2020

### ---- ACCOMPLISHED -----

        [x] Worked the events page

        [X] Completed Layout events top page (selected event, search, and event cards)

        [x] Completed add event in modal

        [x] Date/Time picker for Event form start/end date

        [x] Worked events view (renders cards) using react-strap cards

        [x] wired up view more and edit event to call parent functions which
            update state (selectedEvent) and (currentEvent) and open modal

        [x] incorporated code talk items in current code base
                (d-flex justify-content-????)
                (on click instead of NavLink)

        [x] paginate working

### ----- WILL ACCOMPLISH -----

        [ ] get in Q

        [ ] install wiki for SQL and ssms

        [ ] edit in modal

        [ ] url for selected event /events/31523

        [ ] default selected event to latest event if no event url /events/12343

        [ ] Date/Time picker for Event search between dates

        [ ] add search by date to events cards and ensure paging works with it

        [ ] Address to gps, and store in api data

### ----- BLOCKERS -----

# October 14, 2020

### ----- ACCOMPLISHED -----

        [x] Started jobs
                [x] created 5 tech companies
                [x] created Jobs.jsx, Job.jsx, JobForm.jsx (blank starts using Friends example)
                [x] created TechCompanies.jsx, TechCompany.jsx, TechCompanyForm.jsx (blank starts using Friends example)

        [x] Create jobService with axios calls for { get, getPage, search, add, update, updateStatus, deleteItem, getBySlug };

        [x] Create techCompanyService with axios calls for { get, getPage, search, add, update, updateStatus, deleteItem, getBySlug };

        [x] created jobs add form, dynamic population of drop down options for choosing tech company id

        [ ] moved on to events...
                [x] completed events service
                [ ] started event form

        [x] Code talk!

                SUMMARY OF THINGS COVERED

                VS code search, replace, ctrl-shift-f for global finds,
                noting in code // TODO // NOTE // HELP,
                quick class creation for css using .container .row .col,
                *{border:1px solid gray;} global css for borders to help alignments,
                filenames and captured response naming, folder structures,
                setState Callback function,
                and arrayOfFriends.findIndex() optimization over .map.

        [x] Built in modal example code - thanks to Patrick for fiding the wiki!

### ----- WILL ACCOMPLISH -----

        [ ] Work the event form - api call for address/gps latitude and longitude ?

        [ ] Layout events top page
        [ ] Implement event functionalities
                [ ] search
                [ ] add / edit in modal

### ----- BLOCKERS -----

# October 13, 2020

### ----- ACCOMPLISHED -----

        [x] Code review to this point (login,register,home,friends, edit, add, getall, search)
            [x] refactored friends routes to app ( I had a friends component implementing /friends/edit route)
            [x] optimized /friends/edit ( uses get friend by id, unless entire friend object passed back into it)
            [x] got rid on unused code ( formFieldChanged ternary for 'checkbox', and un-used parameters in calls)

        [x] took out virtually ALL my console.log's
        [x] re-read and refactored majority of code

        [x] post the add/update (already have service, just needed to post (add) and put (update))
        [x] post the delete, filtered out deleted id (findIndex and slice) -- still searching for optimal way Big O(n) you know!
        [x] paginate (fixed my bug)

### ----- WILL ACCOMPLISH -----

        FRIENDS

        [ ] Start of jobs...

### ----- BLOCKERS -----

        Still no mouse, only laptop touchpad, but it seems to help me make better progress believe it or not!

# October 12, 2020

### ----- ACCOMPLISHED -----

        [x] Implemented react-icons
        [x] fixed programmatic navigation bug ( due to two BrowserRouters (index and app))
        [x] add - used edit component for wire up form fields for add
        [x] edit - edit component wired up form fields for edit
        [x] cancel - button wired to goBack
        [X] Refactored field names for login/register to match payload model (Brijesh code review)
        [x] Implemented search, show all
        [x] Started skills control (mapped,etc) - will be needed for complete friends process
        [x] Created blank/template versions of TechCompanies Events Jobs Blogs Skills

### ----- WILL ACCOMPLISH -----

        [ ] Code review to this point (quick question)
        [ ] Finalize my global updates on login, etc in app state on changes! ( perhaps handler callback function ...)
        [ ] post the add/edit (already have service, just need to post and update)
        [ ] post the delete (already have service, just need to delete)
        [ ] paginate (included, just needs configured appropriately)

### ----- BLOCKERS -----

# October 10, 2020

### ----- ACCOMPLISHED -----

        [X] Created friends and friend component
        [x] Completed revised friends backend (+ stubbed out Skills, Tech companies and Jobs api backend for the 1st time)
        [X] Got friends to view and edit/delete buttons wired up
        [x] Stubbed out friends add/edit form
        [X] re-read instructions and more refactored login/home/register
        [X] Cleaned up code, got rid of old comments, code examples, et
        (( shave at lunch, and get a haircut at 2:30 pst ))

### ----- WILL ACCOMPLISH -----

        create skills controls
        wire up the friends add/edit with backend
        implement search and paging
        Q for code review by this afternoon/evening or tomorrow am at the latest

### ----- BLOCKERS -----

        mouse dongle missing (I moved to new temporary place)

# October 9, 2020

### ----- ACCOMPLISHED -----

        [X] Completed Q code review of home/login/register

        [X] Jacked up a lot of my login/home/app because of refactoring based on code review comments

        [X] Created friends service

        [X] Watched - Rendering Array's via Map Calls

        [X] Finished React Basics Course Videos

        [X] Created friends and friend component

        [X] Got friends to view and edit/delete buttons wired up

### ----- WILL ACCOMPLISH -----

        [ ] Implement friend add/edit form

        [ ] Implement Search

        [ ] Implement Paging

        (( shave at lunch, and get a haircut at 2:30 pst ))

### ----- BLOCKERS -----

        Ouch!

# October 8, 2020

### ----- ACCOMPLISHED -----

        [X] Finished C93 Starter Cards for React (A) Login, Register, Home

        [X] Watched the Check Boxes and Radios videos for forms, coded along.

        [X] Started Friends ( created friends service)

        In the Q for code review on Starter Card A

### ----- WILL ACCOMPLISH -----

        [X] Watch - Rendering Array's via Map Calls

        [X] Finish React Basics Course Videos

        [ ] Finish Friends

        [ ] Implement Skills Control, include in Friends

        [ ] Implement image upload api

### ----- BLOCKERS -----

        none

# October 7, 2020

### ----- ACCOMPLISHED -----

        Finished React Basics videos up to 54% (Read Me)

        (SF.React Start Here - code along) - install, components, services, state, routing

        Finished (Starter.react-componentize - Components, Routing, Axios)

        Started C93 for React (Help Documentation, stubbed out Components for Login, Register, Home, Axios Auth Service)

        Watched videos and code along videos
        (Binding State to Text Inputs, Separating Form Data in State, Select Drop Downs)

### ----- WILL ACCOMPLISH -----

        [ ] Will finish C93 Starter Cards for React (A) Login, Register, Home

        [] Possibly watch Check Boxes, Radios videos for forms.

        [] Start Friends

### ----- BLOCKERS -----

        None

# October 6, 2020

### ----- ACCOMPLISHED -----

        Fixed bugs in friends for Status and Bio, Finished Friends.

        Watched videos about response/request lifecycle (too early)

        Completed code review for friends....

                // code review notes -

                ON TRACK TO MOVE AHEAD TO JOBS

                PHASE out the use of var., Use let, const and arrow functions.
                Only include services that are being used.
                Use named functions in .then --- avoid anonymous functions always!!!

        Finished small portion of jobs, then we moved on to React!

        Watched and coded along with 35% of React Videos

### ----- WILL ACCOMPLISH -----

        Work on the REACT Basics Course, coding along, etc.
        Get to next assignment video after setState and Routing

### ----- BLOCKERS -----

        None Really, but note that having only one screen means a lot of switching between watching video and coding along.

# October 5, 2020

### ----- ACCOMPLISHED -----

        Going in to today, I was finished with login, register and home.
        Refactored login/register/home
        Finished Starter 93 (A) Friends.
        Started JOBS (reading through it)
        While revisiting/testing friends,I found bug in Friends for Status, skills,
        and multi-line view of the textarea field for Bio.

### ----- WILL ACCOMPLISH -----

        Get in Q for Friends Code Review (consider implementing Skills)

        Finish 1/4 to 1/2 of Jobs.

### ----- BLOCKERS -----

        Time - It just takes time

# October 3rd, 2020

### ----- ACCOMPLISHED -----

        FINISHED clean version of A

        Started C93 (B) Friends

        Created and Tested services for .add .delete .get .search .getPageOfFriends

### ----- WILL ACCOMPLISH -----

        Monday October 5, 2020

        // Do full test of my use of return a promise outside Axios calls -- not happy

        Finish C93 Starter (B) Friends and Begin C93 Starter (B) Jobs

        Get Code Review for A, B

### ----- BLOCKERS -----

        I'm on track, no blockers anticipated.  I'm learning how to keep focused, not get bogged down in a loop of unproductivity.

# October 2nd, 2020

### ----- ACCOMPLISHED -----

        FELL SHORT of completing Starter cards (A) to my satisfaction.

        CREATED Login, Register, Home and Nav system for Starter Cards (A).
        Incorporated Sweet Alerts and Toastr, stubbed in examples for their use.
        Separated and stubbed out services for coming end points and future pages.

        FIXED SELF INDUCED BUGS
        (stumbled on some crazy self-induced bugs by starting entire project from scratch and not using sabio starter template)

        HACKED AWAY AT BOOTSTRAP and CSS for NAV and Forms.
        (spent too much time trying to make it look as bad as it currently does)

        COMPLETELY REFACTORED my custom Teams entities assignment, realized it wasn't necessary for this one,
        then refactored again, but lessons learned help build my growing services structure and drive home the
        idea of bubbling up catch cases within services.

### ----- WILL ACCOMPLISH -----

        Finalize (A)  (MINIMAL TASKS REMAIN - mostly just validating what I already have.)

        Move on to (B) and get the Friends (peopleView) working.

### ----- BLOCKERS -----

        Failing to focus on the task at hand and working towards future tasks/optimization can be a show-stopper for me.

# October 1st, 2020

### ----- ACCOMPLISHED -----

    Completed code review

        mapping/filtering (sports, presidents, cakes)
        people view (getPageOfPeople(pageIndex,pageSize))
        custom entities (teamsService)

    Begin work on C93 starter tasks board

    Watched the Intro Topics Video.
    Watched the Daily Stand Up video.
    Reviewed/Watched the mapping/filtering videos.

    Created new 'starter' project building from previous entities assignment.

    Started mandatory steps on my custom copy of the C93 Starter Board.
    (read wiki help api postman documentation, saved postman collection, etc)
    (made it up to Register, Login, Home Page in Section A)

    Separated/created services files for each proposed entities ahead.

### ----- WILL ACCOMPLISH -----

I will finish the START (A) mandatory board and start work on (B)

### ----- BLOCKERS -----

Meticulous and Slow paced learning of new concepts - focusing on quality code.

#

#

# Month, DD, YYYY

### ----- ACCOMPLISHED -----

### ----- WILL ACCOMPLISH -----

### ----- BLOCKERS -----

#

# Markdown examples follow for future reference

#

# This is an <h1> tag

## This is an <h2> tag

###### This is an <h6> tag

_This text will be italic_
_This will also be italic_

**This text will be bold**
**This will also be bold**

_You **can** combine them_

- Item 1
- Item 2
  - Item 2a
  - Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

![GitHub Logo](http://lostwords.org/images/penguin.png)
Format: ![This is the alt text for the image](http://lostwords.org/images/ww.png)

http://github.com - automatic!
[GitHub](http://github.com)

As Kanye West said:

> We're living the future so
> the present is our past.

I think you should use an
`<addr>` element here instead.

```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: "#foo" });
  }
}
```

    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

# Task Lists

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

### ---------------------------------------------------------------------------------

https://github.com/wojtekmaj/react-datetime-picker/blob/master/README.md

[![npm](https://img.shields.io/npm/v/react-datetime-picker.svg)](https://www.npmjs.com/package/react-datetime-picker) ![downloads](https://img.shields.io/npm/dt/react-datetime-picker.svg) [![build](https://travis-ci.com/wojtekmaj/react-datetime-picker.svg?branch=master)](https://travis-ci.com/wojtekmaj/react-datetime-picker) ![dependencies](https://img.shields.io/david/wojtekmaj/react-datetime-picker.svg) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/react-datetime-picker.svg) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

https://editor.method.ac/

<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <defs>
  <filter height="200%" width="200%" y="-50%" x="-50%" id="svg_2_blur">
   <feGaussianBlur stdDeviation="5.3" in="SourceGraphic"/>
  </filter>
 </defs>
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="602" width="802" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <path transform="rotate(-40 399.9999999999999,322.8158569335938) " id="svg_1" d="m132.49999,322.81586l0,0c0,-107.69552 119.76384,-195.00001 267.5,-195.00001l0,0c70.94538,0 138.98508,20.54457 189.15103,57.11417c50.166,36.56961 78.34897,86.1686 78.34897,137.88584l0,0c0,107.69551 -119.76384,195.00001 -267.5,195.00001l0,0c-147.73614,0 -267.5,-87.3045 -267.5,-195.00001zm133.75,0l0,0c0,53.84775 59.88196,97.5 133.75,97.5c73.8681,0 133.75,-43.65226 133.75,-97.5c0,-53.84775 -59.88194,-97.5 -133.75,-97.5l0,0c-73.86804,0 -133.75,43.65227 -133.75,97.5z" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <text filter="url(#svg_2_blur)" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="128" id="svg_2" y="331.45313" x="186.5" stroke-width="0" stroke="#000" fill="#000000">Events!</text>
 </g>
</svg>
