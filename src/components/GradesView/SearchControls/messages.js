import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  label: {
    id: 'gradebook.GradesView.search.label',
    defaultMessage: 'Tìm kiếm người học',
    description: 'Text prompting a user to use this functionality to search for a learner',
  },
  hint: {
    id: 'gradebook.GradesView.search.hint',
    defaultMessage: 'Tìm kiếm theo tên người dùng, email hoặc mã người học',
    description: 'A hint explaining the ways a user can search',
  },
});

export default messages;
