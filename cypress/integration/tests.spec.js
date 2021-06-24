/// <reference types="cypress" />

const domain = 'http://localhost:3000'
// const domain = 'https://querobolsa-fc7b9.web.app'

const storageData = '[{"full_price":932.58,"price_with_discount":606.18,"discount_percentage":35,"start_date":"01/08/2019","enrollment_semester":"2019.2","enabled":true,"course":{"name":"Educação Física","kind":"Presencial","level":"Bacharelado","shift":"Noite"},"university":{"name":"ETEP","score":3.2,"logo_url":"https://www.tryimg.com/u/2019/04/16/etep.png"},"campus":{"name":"Jardim Esplanada","city":"São José dos Campos"}},{"full_price":1227.05,"price_with_discount":515.36,"discount_percentage":58,"start_date":"01/08/2019","enrollment_semester":"2019.2","enabled":true,"course":{"name":"Jornalismo","kind":"Presencial","level":"Bacharelado","shift":"Noite"},"university":{"name":"UNIP","score":4.5,"logo_url":"https://www.tryimg.com/u/2019/04/16/unip.png"},"campus":{"name":"Água Branca","city":"São Paulo"}}]'

import l from '../support/locators'
import {STORAGE} from '../../src/state/Provider'

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

    it('exibindo e ocultando componente de resultado vazio na filtragem', ()=>{
        cy.get(l.main.cardAdd).click()
        cy.get(l.filters.range).invoke('val', 0).trigger('change').click()

        cy.get(l.modal.resultEmpty).should('be.visible')
            .should('contain', 'A pesquisa atual não retorna nenhum resultado :(')

        cy.get(l.filters.range).invoke('val', 2000).trigger('change').click()

        cy.get(l.modal.resultEmpty).should('not.exist')
        cy.get(l.modal.modalClose).click()
        cy.get(l.main.removeCourse).click()
    })

    it('certificando que cursos indisponíveis serão evidenciados como tal', ()=>{
        cy.get(l.main.cardAdd).click()
        cy.get(l.filters.course).select('Gastronomia')
        cy.get(l.modal.resultCheck).click()
        cy.get(l.modal.buttonApply).click()

        cy.get(l.main.cardCourse).get('div.infos div.course')
            .should('contain', 'Gastronomia')

        cy.get(l.main.cardCourse).get('div.actions button')
            .should('have.class', 'disabled')
            .should('be.disabled')

        cy.get(l.main.cardCourse).get('div.actions button')
            .eq(1).should('contain.html', 'Indisponível')
    })

    it('certificando leitura de storage', ()=>{
        cy.window().its('localStorage').invoke('setItem', STORAGE, storageData)
        cy.visit(domain)
        cy.get(l.main.cardCourse).its('length').should('eq', 2)
    })
})