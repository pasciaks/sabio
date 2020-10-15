        --------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -
        --------------------------------------------------------------------------------------
        --------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -
        --------------------------------------------------------------------------------------

        SUMMARY OF THINGS COVERED

        VS code search, replace, ctrl-shift-f for global finds,
        noting in code // TODO // NOTE // HELP,
        quick class creation for css using .container .row .col,
        *{border:1px solid gray;} global css for borders to help alignments,
        filenames and captured response naming, folder structures,
        setState Callback function,
        and arrayOfFriends.findIndex() optimization over .map.


        ---------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk -----
        ---------------------------------------------------------------------

                   replace (Ctrl-H)
        vs code -
                   global search (Ctrl+Shift+F)

                   multi-line editing  (alt-click)

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

        // api service (generalization)

                friendService
                jobService
                techCompanyService
                blogService

        // on set state call back

        /*

        // when the search text field changes...

        // for an input text field named searchText

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

                                // NOTE - VERY SLICK HERE, requiring the query to happy
                                // after the state form field (searchText) change is made!
                                // the subsequent call to (this.searchFilter) uses the
                                // value this.state.searchText to do the filtering.

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

        // NOTE - CODE TALK -

        // let filtered = prevState.arrayOfFriends.filter((friend) => {
        //   return friend.id === id ? false : true;
        // });

        // NOTE - CODE TALK -

        let indexOfFriend = prevState.arrayOfFriends.findIndex(
                (friend) => friend.id === id
        );

        /*

        // NOTE - CODE TALK -

        https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array
        Array.prototype.findIndex is supported in all browsers other than IE (non-edge). But the polyfill provided is nice.
        var indexOfStevie = myArray.findIndex(i => i.hello === "stevie");
        The solution with map is okay. But you are iterating over the entire array every search.
        That is only the worst case for findIndex which stops iterating once a match is found.
                Another possibility... if an array is built with dictionary addressing...
        https://jsfiddle.net/sheldon_pasciak/b3wuzfs7/
        https://jsbench.me/9hjewv6a98


        // NOTE - CODE TALK (CTRL-SHIFT-F  // NOTE - CODE)

        LIFE ADVICE

        - never go to sleep angry.
        - as best as possible, keep recent branch push ./share-branch in a good working state.
        - hope we should feel free to download others branches, run and learn from the code.

                thanks, please be sure to fill out this form.  I'll post in the channel.

        ------------------------------------------------------------------------------------------
        ## ----- code talk ----- ----- code talk ----- ----- code talk ----- ----- code talk -----
        ------------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------------
