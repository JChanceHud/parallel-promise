/**
 * Accepts a function that produces a promise given an index.
 *
 * Return false when done generating promises
 *
 * Second argument is max parallel execution (default 10)
 **/
module.exports = (count, iteratorFn, limit = 10) => {
  const targetPromises = Array.apply(null, Array(limit)).map(() =>
    Promise.resolve()
  )
  const results = new Array(count)
  for (let i = 0; i < count; i += 1) {
    const index = i % targetPromises.length
    targetPromises[index] = targetPromises[index]
      .then(() => iteratorFn(i))
      .catch((err) => {
        console.log('Error executing parallel promise', err)
        return
      })
      .then((r) => (results[i] = r))
  }
  return Promise.all(targetPromises).then(() => results)
}
