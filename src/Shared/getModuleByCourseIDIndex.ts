import { CourseType, ModuleType } from '../@types/GraphqlTypes'

interface GetModuleByCourseIDIndexInterface {
  (args: { courses: any; courseID: string; index: number }): any
}

/**
 * @description Function to return module by provided contentID
 * @import import { getModuleByCourseIDIndex } from '../Shared/getModuleByCourseIDIndex'
 */
export const getModuleByCourseIDIndex: GetModuleByCourseIDIndexInterface = ({
  courses,
  courseID: courseIDIn,
  index = 0,
}) => {
  let output = {}

  const course = courses.find(
    (course: CourseType) => course.courseID === courseIDIn
  )
  const {
    courseID,
    capture: courseCapture,
    description: courseDescription,
    language,
    modules,
  } = course
  const modulesTotal = modules.length
  const module = modules.find((module: ModuleType) => module.index === index)

  let moduleCapture = module.capture
  let moduleDescription = module.description

  if (modulesTotal === 1) {
    moduleCapture = moduleCapture
    moduleDescription = courseDescription
  }

  if (module) {
    const { questions } = module
    const questionsTotal = questions.length
    output = {
      ...module,
      courseID,
      courseCapture,
      language,
      moduleCapture,
      moduleDescription,
      modulesTotal,
      questionsTotal,
    }
  }

  return output
}
