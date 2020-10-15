        ----------------------------------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -----
        ----------------------------------------------------------------------------------------------------------------
        ----------------------------------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -----
        ----------------------------------------------------------------------------------------------------------------

        VS code search, replace, ctrl-shift-f for global finds, noting in code // todo // node //help,  quick class creation for css using .container .row .col, *{border:1px solid gray;} global css for borders to help alignments, filenames and captured response naming, folder structures, setState Callback function, and arrayOfFriends.findIndex() optimization over .map.


        ----------------------------------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -----
        ----------------------------------------------------------------------------------------------------------------

                   replace (Ctrl-H)                     [ ]  I don't like Cake!!!
        vs code -
                   global search (Ctrl+Shift+F)         [ ]  -- Another Message --

                   multi-line editing  (alt-click)      [ ]

                   // TODO

                   // NOTE

                   // HELP

        css - quick and dirty - Patrick could lead a future talk here

                .container
                .row
                .col-sm-2

                * {
                        /* border: 1px dotted gray; */
                }


        namings

                userService.currentUser
                        .then(this.onGetCurrentUserSuccess)
                        .catch(this.onGetCurrentUserError)

                onGetCurrentUserSuccess(response) {

                }

                onGetCurrentUserError(errResponse) {

                }

                in services  (friendService.js   jobService.js)

        break-out naming/structure

                components

                        auth
                                Login
                                LoginButton
                                Logout
                                Register

                        friends
                                Friends
                                FriendForm
                                Friend

                        techcompanies
                                TechCompanies
                                TechCompanyForm
                                TechCompany

                services
                        userService
                        jobService
                        techCompanyService
                        friendService

                mark up / git hub

                ./share-branch - https://github.com/sabiocode/Starter.react-componentize/branches


        // api service (generalization)

                friendService
                jobService
                techCompanyService
                blogService

                * eventService

        // on set state call back

        /*

        // when the search text field changes...

                onFormFieldChanged = (e) => {
                let currentTarget = e.currentTarget;
                let inputName = currentTarget.name;
                let newValue = currentTarget.value;

                this.setState(
                (prevState) => {
                        let formData = { ...prevState.formData };
                        formData[inputName] = newValue;

                        return { formData };
                },
                () => {
                        // Search text updated in state

                        this.setState((prevState) => {
                        // NOTE - VERY SLICK HERE, requiring the query to happy after the state field change is made!

                        let mappedCards = prevState.arrayOfFriends
                        .filter(this.searchFilter)
                        .map(this.mapFriend);

                        return { mappedCards };
                        });
                }
                );
                };

        */


        // NOTE - CODE TALK (CTRL-SHIFT-F  // NOTE - CODE)

        // NOTE - CODE TALK (CTRL-SHIFT-F  // NOTE - CODE)


                LIFE ADVICE
                        - never go to sleep angry.
                        - as best as possible, keep recent branch push ./share-branch in a good working state.
                        - hope we should feel free to download others branches, run and learn from the code.


                thanks, please be sure to fill out this form.  I'll post in the channel.

                https://docs.google.com/forms/d/e/1FAIpQLSevigoxTfV92dByarLHKtTA5U8LhZMHOG14850ZHYmv__teWA/viewform

        ----------------------------------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -----
        ----------------------------------------------------------------------------------------------------------------
        ----------------------------------------------------------------------------------------------------------------
        ----------------------------------------------------------------------------------------------------------------

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
