import PgPromise from 'pg-promise'
import promiseLib from 'bluebird'

const pgp = new PgPromise({ promiseLib })
const db = pgp('postgres://postgres:postgres@localhost:5432/pppt');

function ppptQuery(query) {
  return query
          .catch(error => { console.log(error) })
          .finally(() => { pgp.end() })
}



export function getBootstrapData() {
  return db.task(function (t) {
    let q1 = getObjectives(1)
    let q2 = getLifeAreas()
    return this.batch([q1, q2])
  })
}

export function getObjectives(userId) {
  return ppptQuery(db.query('SELECT * FROM objectives WHERE user_id = $1 ORDER BY priority ASC', userId))
}

export function getLifeAreas() {
  return ppptQuery(db.query('SELECT * FROM life_areas ORDER BY name ASC'))
}

export function addObjective(req, res) {
  db.query('SELECT * FROM objectives ORDER BY priority ASC')
    .then(function (data) { res.json(data); })
    .catch(function (error) { console.log(error) })
    .finally(function () { pgp.end(); });
}

