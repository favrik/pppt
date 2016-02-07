import pathToRegexp from 'path-to-regexp'

export const API_SERVER = 'http://localhost:5000'

function pathCompile(path, replacements) {
  const toPath = pathToRegexp.compile(path)
  return API_SERVER + toPath(replacements)
}

export function getObjectives(userId) {
  return pathCompile('/objectives/:uid', { uid: userId })
}

export function addObjective() {
  return pathCompile('/objective')
}
