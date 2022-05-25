const nomination = document.querySelectorAll('.nomination');

if(nomination) {
    nomination.forEach((nomination) => {

        const nominationDropdown = nomination.querySelector('.nomination__dropdown');

        const btnShowNominees = nomination.querySelector('.btn-border');

        const close = nomination.querySelector('.nomination__dropdown_close');

        close.addEventListener('click', (e) => {
            nominationDropdown.classList.remove('nomination__dropdown_active')
        })

        btnShowNominees.addEventListener('click', (e) => {
            document.querySelectorAll('.nomination__dropdown').forEach((el) => {
                if(el.classList.contains('nomination__dropdown_active')) {
                    el.classList.remove('nomination__dropdown_active')
                }
            })
            
            nominationDropdown.classList.add('nomination__dropdown_active');
        })

    }) 
}