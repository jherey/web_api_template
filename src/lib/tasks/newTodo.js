/* eslint-disable require-jsdoc */
export default async function newTodo(job, done) {
  try {
    const { email } = job.data;
    // do stuff
    const result = console.log(email);
    done(new Error('Error message'));
    done(null, result);
  } catch (error) {
    done(error);
  }
}
