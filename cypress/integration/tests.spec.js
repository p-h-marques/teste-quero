/// <reference types="cypress" />

const domain = 'http://localhost:3000'
import l from '../support/locators'

describe('testes funcionais', () => {
    before(() => {
        cy.visit(domain)
    })

    it('verificando funcionamento dos filtros', ()=>{
        cy.get(l.main.filter2019).click().should('have.class', 'selected')
        cy.get(l.main.filter2020).click().should('have.class', 'selected')
        cy.get(l.main.filterAll).click().should('have.class', 'selected')
    })

    it('verificando funcionamento do modal', ()=>{
        cy.get(l.modal.modal).should('not.be.visible')
        cy.get(l.main.cardAdd).click()
        cy.get(l.modal.modalTitle).should('contain', 'Adicionar bolsa')
        cy.get(l.modal.modal).should('be.visible')
        cy.get(l.modal.buttonApply).should('be.disabled')
        cy.get(l.modal.modalClose).click()
        cy.get(l.modal.modal).should('not.be.visible')
        cy.get(l.main.cardAdd).click()
        cy.get(l.modal.modal).should('be.visible')
        cy.get(l.modal.buttonCancel).click()
        cy.get(l.modal.modal).should('not.be.visible')
    })

    it('adicionando cursos', ()=>{
        let courseSearchCount = 0
        let courseSelectedCount = 0

        cy.get(l.modal.modal).should('not.be.visible')
        cy.get(l.main.cardAdd).click()

        cy.get(l.modal.resultCheck + '#arquiteturaeurbanismo').each(($el)=>{
            courseSearchCount++
            cy.wrap($el).click()
        })

        cy.get(l.modal.buttonApply).should('not.be.disabled').click()

        cy.get(l.main.cardCourse).each(() => { courseSelectedCount++ })
            .and(()=>{ expect(courseSearchCount).to.be.equal(courseSelectedCount) })

    })

    it('filtrando semestres', ()=>{
        cy.get(l.main.filter2019).click()
        cy.get(l.main.cardCourse).its('length').should('eq', 1)
        cy.get(l.main.filter2020).click()
        cy.get(l.main.cardCourse).its('length').should('eq', 1)
        cy.get(l.main.filterAll).click()
        cy.get(l.main.cardCourse).its('length').should('eq', 2)
    })

    it('removendo cursos', ()=>{
        cy.get(l.main.removeCourse).each(($el)=>{
            cy.wrap($el).click()
        })

        cy.get(l.main.cardCourse).should('not.exist')
    })

    it('filtrando cursos', ()=>{
        cy.get(l.main.cardAdd).click()
        cy.get(l.filters.city).select('São José dos Campos')
        cy.get(l.modal.resultCheck).its('length').should('equal', 9)
        cy.get(l.filters.course).select('Gestão de Recursos Humanos')
        cy.get(l.modal.resultCheck).its('length').should('equal', 3)
        cy.get(l.filters.presencial).click()
        cy.get(l.modal.resultCheck).its('length').should('equal', 2)
        cy.get(l.filters.range).invoke('val', 200).trigger('change').click()
        cy.get(l.modal.resultCheck).its('length').should('equal', 1)
    })

    it('tentando a inserção sem nenhuma seleção', ()=>{
        cy.get(l.modal.buttonApply).should('be.disabled')
        cy.get(l.modal.modal).should('be.visible')
    })

    it('tentando inserir cursos duplicados', ()=>{
        cy.get(l.modal.buttonCancel).click()

        for (let index = 0; index < 2; index++) {
            cy.get(l.main.cardAdd).click()
            cy.get(l.filters.course).select('Ciência da Computação')
            cy.get(l.modal.resultCheck).each($el => cy.wrap($el).click())
            cy.get(l.modal.buttonApply).click()
        }

        cy.get(l.main.cardCourse).its('length').should('eq', 1)
    })
})