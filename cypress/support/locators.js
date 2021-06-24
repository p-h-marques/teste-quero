const locators = {
    main: {
        cardAdd: '[data-test=card-add]',
        cardCourse: '[data-test=card-course]',
        filterAll: '[data-test=main-filter-all]',
        filter2019: '[data-test=main-filter-2019-2]',
        filter2020: '[data-test=main-filter-2020-1]',
        removeCourse: '[data-test=course-remove]',
    },
    modal: {
        modal: '[data-test=modal]',
        modalTitle: '[data-test=modal-title]',
        modalClose: '[data-test=modal-close]',
        resultCheck: '[data-test=result-check]',
        buttonApply: '[data-test=button-apply]',
        buttonCancel: '[data-test=button-cancel]',
    },
    filters: {
        city: '[data-test=select-city]',
        course: '[data-test=select-course]',
        presencial: '[data-test=check-presencial]',
        ead: '[data-test=check-ead]',
        range: '[data-test=range-value]',
    }
}

export default locators