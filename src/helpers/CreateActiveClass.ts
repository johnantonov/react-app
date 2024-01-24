function createActiveClass(point: string, answer: string, css: any) {
  return answer === point ? ' ' + css.active : ' '
}

export default createActiveClass