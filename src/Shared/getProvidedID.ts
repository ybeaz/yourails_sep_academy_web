import { nanoid } from 'nanoid'

/**
 * @description Function to provide content arr with IDs for courses, questions, options
 * @param content: any[]
 * @returns content: any[]
 */
export const getProvidedID = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map((module: any) => {
      const { questions } = module

      const questionsNext = questions.map((question: any) => {
        const { options } = question

        const optionNext = options.map((option: any) => {
          const nanoID = nanoid()
          return { optionID: nanoID, ...option }
        })

        const nanoID = nanoid()
        return { questionID: nanoID, ...question, options: optionNext }
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
