import * as types from './types'
import {getSelectedCourses, getCourseId} from '../utils/functions'

/**
 * Action para gerenciar visibilidade do modal de pesquisa
 *
 * @param {boolean} visible - Modal será exibido?
 * @returns
 */
export function toogleModal(visible){
    return {
        type: types.TOOGLE_MODAL,
        payload: visible,
    }
}

/**
 * Action para gerenciar semestre filtrado na página principal
 *
 * @param {string} semester Semestre selecionado
 * @returns
 */
export function toogleSemester(semester){
    return {
        type: types.TOOGLE_SEMESTER,
        payload: semester,
    }
}

/**
 * Action para atualizar filtro de range de valores
 *
 * @param {string} max Range de valor selecionado no input
 * @returns
 */
export function updateRange(max){
    return {
        type: types.UPDATE_RANGE,
        payload: parseInt(max, 10),
    }
}

/**
 * Action para filtrar os cursos por modalidade
 *
 * @param {string} type Modalidade a ser filtrada
 * @param {boolean} status Status de seleção da modalidade
 * @returns
 */
export function updateKind(type, status) {
    return {
        type: types.UPDATE_KIND,
        payload: { type, status },
    }
}

/**
 * Action para salvar os cursos obtidos
 * via API no estado global da aplicação
 *
 * @param {object} data Cursos obtidos via API
 * @returns
 */
export function fetchData(data){
    return {
        type: types.FETCH_DATA,
        payload: data
    }
}

/**
 * Action para definir o valor dos filtros de seleção
 *
 * @param {string} type Filtro de seleção a ser atualizado
 * @param {string} data Valor do filtro a ser definido
 * @returns
 */
export function updateSelect(type, data){
    return {
        type: types.UPDATE_SELECT,
        payload: {type, data}
    }
}

/**
 * Action para gerenciar os cursos
 * selecionados no modal de filtros
 *
 * @param {string} type Adicionar ou remover curso da seleção
 * @param {string} data ID do curso a ser manipulado
 * @param {array} prev Cursos selecionados previamente
 * @returns
 */
export function updateFilterSelectedCourses(type, data, prev){
    switch (type) {
        case 'add':
            prev.push(data)
            break

        case 'remove':
            if (prev.indexOf(data) > -1)
                prev.splice(prev.indexOf(data), 1)
            break

        default:
            break
    }

    return {
        type: types.UPDATE_FILTER_SELECTED_COURSES,
        payload: prev
    }
}

/**
 * Action pra zerar os filtros do modal e fechá-lo
 *
 * @returns
 */
export function cancelFilters(){
    return {type: types.CANCEL_FILTERS}
}

/**
 * Action para aplicar seleção do
 * modal de filtros na página principal
 *
 * @param {array} selected Cursos selecionados no modal
 * @param {array} actual Cursos atualmente exibidos na página principal
 * @param {array} all Todos os cursos disponíveis via API
 * @returns
 */
export function applyFilters(selected, actual, all){
    actual.forEach(prevCourse => {
        if(!selected.includes(getCourseId(prevCourse))) selected.push(getCourseId(prevCourse))
    })

    return {
        type: types.APPLY_FILTERS,
        payload: getSelectedCourses(selected, all)
    }
}

/**
 * Action para remover curso da página principal
 * @param {object} course Curso a ser removido
 * @param {array} all Cursos sendo exibidos na página principal
 * @returns
 */
export function removeCourse(course, all){
    all.forEach((prevCourse, index) => {
        if(JSON.stringify(prevCourse) === JSON.stringify(course)){
            all.splice(index, 1)
        }
    })

    return {
        type: types.REMOVE_COURSE,
        payload: all
    }
}

/**
 * Action para atualizar lista de cursos selecionados
 * no modal de filtros após atualização nos parâmetros filtrados
 *
 * @param {array} list Lista de cursos selecionados pós verificação
 * @returns
 */
export function updateSelectedCourses(list){
    return {
        type: types.UPDATE_SELECTED_COURSES,
        payload: list
    }
}