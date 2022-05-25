const nomination = document.querySelectorAll('.nomination');

if(nomination) {
    nomination.forEach((nomination) => {

        const nominationDropdown = nomination.querySelector('.nomination__dropdown');

        const btnShowNominees = nomination.querySelector('.btn-border');

        const close = nomination.querySelector('.nomination__dropdown_close');
        if(close) {
            close.addEventListener('click', (e) => {
                nominationDropdown.classList.remove('nomination__dropdown_active')
            })
        }
   

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

const voteModal = document.querySelector('.voteModal');
const voteOverlay = document.querySelector('.voteOverlay');
const voteNowButton = document.querySelectorAll('.nominant__btn_vote');


if(voteModal) {
    const countryCurrent = voteModal.querySelector('.current');
    const closeModal = voteModal.querySelector('.close');
    const countryDropdown = voteModal.querySelector('.country__dropdown');
    const countriesInDropdown = countryDropdown.querySelectorAll('.country'); 
    
    voteNowButton.forEach((el) => {
        el.addEventListener('click', (e) => {
            voteOverlay.classList.add('voteOverlay__opened')
            voteModal.classList.add('voteModal__opened')
        }) 
    })

    closeModal.addEventListener('click', (e) => {
        voteOverlay.classList.remove('voteOverlay__opened')
        voteModal.classList.remove('voteModal__opened');
        
    })

    countryCurrent.addEventListener('click', (e) => {
        countryDropdown.classList.toggle('country__dropdown_active');
    })

    countriesInDropdown.forEach((country) => {
        country.addEventListener('click', (e) => {

            countryDropdown.classList.remove('country__dropdown_active');
            countryCurrent.innerText = e.target.innerText

        })        
    })

}