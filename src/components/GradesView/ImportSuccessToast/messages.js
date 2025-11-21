import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  description: {
    id: 'gradebook.GradesView.ImportSuccessToast.description',
    defaultMessage: 'Nhập thành công! Điểm sẽ được cập nhật trong giây lát.',
    description: 'A message congratulating a successful Import of grades',
  },
  showHistoryViewBtn: {
    id: 'gradebook.GradesView.ImportSuccessToast.showHistoryViewBtn',
    defaultMessage: 'Xem nhật ký hoạt động',
    description: 'The text on a button that loads a view of the Bulk Management Activity Log',
  },
});

export default messages;
