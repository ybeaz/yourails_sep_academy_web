/**
 * @description Function to add a default answer to each question option
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProdidedAnswerDefaultDepreciated = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map((module: any) => {
      const { questions } = module

      const questionsNext = questions.map((question: any) => {
        const { options } = question

        const optionNext = options.map((option: any) => {
          return { ...option, answer: false }
        })

        return { ...question, options: optionNext }
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
