export async function getData() {
    const request = await fetch('db.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })

    const response = await request.json()

    return response
}

export function filterCoursesList(data) {
    let courses = []

    data.forEach(course => {
        if (!courses.includes(course.course.name)) {
            courses.push(course.course.name)
        }
    })

    return courses.sort()
}

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

export function getCourseId(course){
    return course.course.name +
        ' | ' +
        course.university.name +
        ' | ' +
        course.course.kind
}

export function getSelectedCourses(data, all){
    console.log(data, all)
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