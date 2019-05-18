import TodoCreatedEmail from './TodoCreatedEmail';

module.exports = function sendEmail(agenda) {
  agenda.define('todo-saved-email',
    { priority: 'high', concurrency: 10 },
    new TodoCreatedEmail().handler);
};
