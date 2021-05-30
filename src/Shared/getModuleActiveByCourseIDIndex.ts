interface IGetModuleActiveByCourseIDIndexInput {
  courses: any
  courseID: string
  index: number
}

/**
 * @description Function to make a course isActiveTemp based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByCourseIDIndex: Function = ({
  courses,
  courseID: courseIDIn,
  index: indexIn,
}: IGetModuleActiveByCourseIDIndexInput): any[] => {
  return courses.map(course => {
    let isActiveTemp = false
    const { courseID, modules } = course
    const modulesNext = modules.map(module => {
      const { index } = module
      if (courseID === courseIDIn && index === indexIn) {
        isActiveTemp = true
        return { ...module, isActiveTemp }
      }
      return module
    })
    return { ...course, modules: modulesNext, isActiveTemp }
  })
}