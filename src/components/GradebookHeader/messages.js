import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  backToDashboard: {
    id: 'gradebook.GradebookHeader.backButton',
    defaultMessage: 'Quay lại Bảng điều khiển',
    description: 'Button text to take user back to LMS dashboard in Gradebook Header',
  },
  gradebook: {
    id: 'gradebook.GradebookHeader.appLabel',
    defaultMessage: 'Sổ điểm',
    description: 'Top-level app title in Gradebook Header component',
  },
  frozenWarning: {
    id: 'gradebook.GradebookHeader.frozenWarning',
    defaultMessage: 'Điểm của khóa học này hiện đã bị đóng băng. Không còn được phép chỉnh sửa điểm.',
    description: 'Warning message in Gradebook Header for frozen messages',
  },
  unauthorizedWarning: {
    id: 'gradebook.GradebookHeader.unauthorizedWarning',
    defaultMessage: 'Bạn không có quyền xem sổ điểm của khóa học này.',
    description: 'Warning message in Gradebook Header when user is not allowed to view the app',
  },
  toActivityLog: {
    id: 'gradebook.GradebookHeader.toActivityLogButton',
    defaultMessage: 'Xem lịch sử quản lý hàng loạt',
    description: 'Button text for button navigating to Bulk Managment Activity Log',
  },
  toGradesView: {
    id: 'gradebook.GradebookHeader.toGradesView',
    defaultMessage: 'Quay lại Sổ điểm',
    description: 'Button text for button navigating to Grades view.',
  },
});

export default messages;
