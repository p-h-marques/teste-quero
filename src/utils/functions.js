/**
 * Requisição para obter cursos
 *
 * @returns {array} Cursos do arquivo .json
 */
export async function getData() {
    const request = await fetch('db.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })

    const response = await request.json()

    response.sort(function(a, b) {
        return a.university.name > b.university.name ? 1 : -1
    })

    return response
}

/**
 * Obtém lista dos nomes dos cursos
 * para preencher o select do filtro
 *
 * @param {array} data Cursos disponíveis na tela
 * @returns {array} Nomes dos cursos
 */
export function filterCoursesList(data) {
    let courses = []

    data.forEach(course => {
        if (!courses.includes(course.course.name)) {
            courses.push(course.course.name)
        }
    })

    return courses.sort()
}

/**
 * Obtém maior e menor valor dos cursos disponíveis,
 * para definir limites do range de valores do filtro
 *
 * @param {array} data Cursos disponíveis em tela
 * @returns {object} Valor máximo e mínimo
 */
export function filterRangeValues(data){
    let values = []

    data.forEach(course => {
        values.push(course.price_with_discount)
    })

    return {
        min: Math.floor(Math.min( ...values )),
        max: Math.ceil(Math.max( ...values )),
    }
}

/**
 * Filtra cursos de acordo com os filtros definidos
 *
 * @param {array} data Cursos disponíveis em tela
 * @param {object} filters Objeto com filtros
 * @returns {array} Cursos pós filtragem
 */
export function filterCourses(data, filters) {
    let finalData = data

    if (filters.city !== '') {
        finalData = finalData.filter(
            course => course.campus.city === filters.city,
        )
    }

    if (filters.course !== '') {
        finalData = finalData.filter(
            course => course.course.name === filters.course,
        )
    }

    let kindFilters = []

    for(const filter in filters.kind){
        if(filters.kind[filter]) kindFilters.push(filter)
    }

    finalData = finalData.filter(course => kindFilters.includes(course.course.kind))

    finalData = finalData.filter(course => course.price_with_discount <= filters.max)

    return finalData
}

/**
 * Fabrica ID do curso, concatenando nome do curso,
 * nome da universidade e modalidade
 *
 * @param {object} course Informações do curso
 * @returns {string} ID fabricado
 */
export function getCourseId(course){
    return course.course.name +
        ' | ' +
        course.university.name +
        ' | ' +
        course.course.kind
}

/**
 * Procura IDs dos cursos selecionados
 * na lista de cursos disponíveis
 *
 * @param {array} data Array com IDs de cursos selecionados
 * @param {array} all Cursos disponíveis em tela
 * @returns {array} Cursos a serem inseridos na página principal
 */
export function getSelectedCourses(data, all){
    let payload = []

    data.forEach(mycourse => {
        const courseFilters = mycourse.split(' | ')
        let allCourses = all

        allCourses = allCourses.filter(allcourse => allcourse.course.name === courseFilters[0])
        allCourses = allCourses.filter(allcourse => allcourse.university.name === courseFilters[1])
        allCourses = allCourses.filter(allcourse => allcourse.course.kind === courseFilters[2])

        payload.push(allCourses[0])
    })

    return payload
}

/**
 * Converte valor numérico para string monetária
 *
 * @param {float} enter Valor monetário
 * @returns {string} Valor no formato 9.999,99
 */
export function formatingMoney(enter) {
    let value = parseFloat(enter)

    if (isNaN(value)) {
        value = 0
    }

    let newvalue = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return newvalue
}

/**
 * Verifica, após atualização dos parâmetros de filtragem,
 * se os cursos selecionados previamente ainda
 * estão contemplados pelos novos filtros
 *
 * @param {object} param0 Parâmetros de pesquisa do estado global
 * @param {*} data Cursos disponíveis em tela
 * @returns Cursos selecionados pós verificação
 */
export function verifySelectedFiltered({selected, filters}, data){
    const coursesSelected = getSelectedCourses(selected, data)
    const filteredCoursesSelected = filterCourses(coursesSelected, filters)

    let newSelected = []

    filteredCoursesSelected.forEach(courseFiltered => {
        newSelected.push(getCourseId(courseFiltered))
    })

    return newSelected
}