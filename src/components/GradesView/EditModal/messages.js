import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentHeader: {
    id: 'gradebook.GradesView.EditModal.headers.assignment',
    defaultMessage: 'Bài tập',
    description: 'Edit Modal Assignment header',
  },
  currentGradeHeader: {
    id: 'gradebook.GradesView.EditModal.headers.currentGrade',
    defaultMessage: 'Điểm hiện tại',
    description: 'Edit Modal Current Grade header',
  },
  originalGradeHeader: {
    id: 'gradebook.GradesView.EditModal.headers.originalGrade',
    defaultMessage: 'Điểm gốc',
    description: 'Edit Modal Original Grade header',
  },
  studentHeader: {
    id: 'gradebook.GradesView.EditModal.headers.student',
    defaultMessage: 'Người học',
    description: 'Edit Modal Student header',
  },
  title: {
    id: 'gradebook.GradesView.EditModal.title',
    defaultMessage: 'Chỉnh sửa điểm',
    description: 'Edit Modal title',
  },
  closeText: {
    id: 'gradebook.GradesView.EditModal.closeText',
    defaultMessage: 'Hủy',
    description: 'Edit Modal close button text',
  },
  visibility: {
    id: 'gradebook.GradesView.EditModal.contactSupport',
    defaultMessage: 'Đang hiển thị các hành động gần nhất (tối đa 5). Để xem thêm, vui lòng liên hệ bộ phận hỗ trợ',
    description: 'Edit Modal visibility hint message',
  },
  saveVisibility: {
    id: 'gradebook.GradesView.EditModal.saveVisibility',
    defaultMessage: 'Lưu ý: Sau khi bạn lưu, các thay đổi của bạn sẽ hiển thị cho người học.',
    description: 'Edit Modal saved changes effect hint',
  },
  saveGrade: {
    id: 'gradebook.GradesView.EditModal.saveGrade',
    defaultMessage: 'Lưu điểm',
    description: 'Edit Modal Save button label',
  },
});

export default messages;
