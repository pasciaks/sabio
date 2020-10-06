const executeTests = () => {

    swal({
        title: "Do you want to run tests?",
        text: "It's up to you.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((confirmed) => {

            if (confirmed) {

                swal("Poof! Your wish is my command!", {
                    icon: "success",
                });

                runTests();

            } else {

                swal("Your welcome anyway!");

            }
        });

}

const runTests = () => {

    // Display a warning toast, with no title
    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

    // Remove current toasts using animation
    toastr.clear()

    // Display a success toast, with a title
    toastr.success('Have fun storming the castle!', 'Miracle Max Says')

    // Display an error toast, with a title
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

    setTimeout(function () {
        // Immediately remove current toasts without using animation
        toastr.remove();
        // Override global options
        toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', { timeOut: 1000 });
        toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', { timeOut: 2000 });
    }, 1500);

}