import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  fullNameHeading: {
    id: 'gradebook.GradesView.table.headings.fullName',
    defaultMessage: 'Họ và tên',
    description: 'Gradebook table full name column header',
  },
  emailHeading: {
    id: 'gradebook.GradesView.table.headings.email',
    defaultMessage: 'Email',
    description: 'Gradebook table email column header',
  },
  totalGradeHeading: {
    id: 'gradebook.GradesView.table.headings.totalGrade',
    defaultMessage: 'Tổng điểm (%)',
    description: 'Gradebook table total grade column header',
  },
  usernameHeading: {
    id: 'gradebook.GradesView.table.headings.username',
    defaultMessage: 'Tên người dùng',
    description: 'Gradebook table username column header',
  },
  studentKeyLabel: {
    id: 'gradebook.GradesView.table.labels.studentKey',
    defaultMessage: 'Mã người học',
    description: 'Gradebook table Student Key label',
  },
  usernameLabel: {
    id: 'gradebook.GradesView.table.labels.username',
    defaultMessage: 'Tên người dùng',
    description: 'Gradebook table username label',
  },
  totalGradePercentage: {
    id: 'gradebook.GradesView.table.totalGradePercentage',
    defaultMessage: 'Giá trị tổng điểm luôn được hiển thị dưới dạng phần trăm',
    description: 'Gradebook table message that total grades are displayed in percent format',
  },
  noResultsFound: {
    id: 'gradebook.GradesView.table.noResultsFound',
    defaultMessage: 'Không tìm thấy kết quả',
    description: 'Gradebook table message when no learner results were found',
  },
});

export default messages;
