import { bool } from 'prop-types'

const noCourseDescription = ({
  courseValidation,
  courseIndex,
  courseCapture,
  courseDescription,
}) => {
  if (!courseDescription) {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-description', courseIndex, courseCapture },
    ]
  }
  return courseValidation
}

const noCourseCapture = ({ courseValidation, courseIndex, courseCapture }) => {
  if (!courseCapture) {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-capture', courseIndex },
    ]
  }
  return courseValidation
}

const errorModules = ({
  courseValidation,
  courseIndex,
  courseCapture,
  modules,
}) => {
  let errors = []
  let isFound: any

  if (!modules.length) errors = [...errors, 'module-no-modules']

  isFound = modules.find(
    (module: any) =>
      !module.moduleID ||
      module.moduleID === '' ||
      typeof module.moduleID !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-moduleID-or-type-error']

  isFound = modules.find(
    (module: any) =>
      !module.ytID ||
      module.ytID === '' ||
      module.ytID.length !== 11 ||
      typeof module.ytID !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-ytID-or-type-error']

  isFound = modules.find(
    (module: any) =>
      !module.capture ||
      module.capture === '' ||
      typeof module.capture !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-capture-or-type-error']

  isFound = modules.find(
    (module: any) =>
      !module.duration ||
      module.duration === 0 ||
      typeof module.duration !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-duration-or-type-error']

  if (errors.length) {
    return [
      ...courseValidation,
      {
        errors,
        courseIndex,
        courseCapture,
      },
    ]
  } else return courseValidation
}

const errorQuestions = ({
  courseValidation,
  courseIndex,
  courseCapture,
  moduleIndex,
  questions,
}) => {
  let errors = []
  let isFound: any

  if (!questions.length) errors = [...errors, 'questions-no-questions']

  isFound = questions.find(
    question =>
      !question.capture ||
      question.capture === '' ||
      typeof question.capture !== 'string'
  )
  if (isFound) errors = [...errors, 'question-no-capture-or-type-error']

  if (errors.length) {
    return [
      ...courseValidation,
      {
        errors,
        courseIndex,
        courseCapture,
        moduleIndex,
      },
    ]
  } else return courseValidation
}

const errorOptions = ({
  courseValidation,
  courseIndex,
  courseCapture,
  moduleIndex,
  questionIndex,
  questionCapture,
  options,
}) => {
  let errors = []
  let isFound: any

  isFound = options.find(
    option =>
      !option.label || option.label === '' || typeof option.label !== 'string'
  )
  if (isFound) errors = [...errors, 'option-no-label-or-type-error']

  isFound = options.find(option => {
    const output =
      !option.hasOwnProperty('status') ||
      !(option.status === true || option.status === false)
    return output
  })
  if (isFound) errors = [...errors, 'option-no-status-or-type-error']

  isFound = options.find(option => option.status === true)
  if (!isFound) errors = [...errors, 'option-no-right-option']

  if (errors.length) {
    return [
      ...courseValidation,
      {
        errors,
        courseIndex,
        courseCapture,
        moduleIndex,
        questionIndex,
        questionCapture,
      },
    ]
  } else return courseValidation
}

/**
 * @description Function to validate a course by known criteria
 * @param courses: any[]
 * @returns content: any[]
 */
export const getValidatedCourses: Function = (courses: any[]): any[] => {
  let courseValidation: any[] = []

  courses.forEach((course, courseIndex) => {
    const {
      capture: courseCapture,
      description: courseDescription,
      modules,
    } = course
    courseValidation = noCourseCapture({
      courseValidation,
      courseIndex,
      courseCapture,
    })

    courseValidation = noCourseDescription({
      courseValidation,
      courseIndex,
      courseCapture,
      courseDescription,
    })

    courseValidation = errorModules({
      courseValidation,
      courseIndex,
      courseCapture,
      modules,
    })

    modules.forEach((module: any, moduleIndex: number) => {
      const { questions } = module

      courseValidation = errorQuestions({
        courseValidation,
        courseIndex,
        courseCapture,
        moduleIndex,
        questions,
      })

      questions.forEach((question, questionIndex) => {
        const { capture: questionCapture, options } = question

        courseValidation = errorOptions({
          courseValidation,
          courseIndex,
          courseCapture,
          moduleIndex,
          questionIndex,
          questionCapture,
          options,
        })

        options.forEach(option => {})
      })
    })
  })

  if (courseValidation.length) {
    console.error('getCourseValidated 225]', courseValidation)
  }
  return courses
}