import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  editSuccessAlert: {
    id: 'gradebook.GradesView.editSuccessAlert',
    defaultMessage: 'Điểm đã được chỉnh sửa thành công. Bạn có thể thấy độ trễ nhỏ trước khi các cập nhật xuất hiện trong Sổ điểm.',
    description: 'An alert text for successfully editing  a grade',
  },
  maxGradeInvalid: {
    id: 'gradebook.GradesView.maxCourseGradeInvalid',
    defaultMessage: 'Điểm tối đa của khóa học phải nằm trong khoảng từ 0 đến 100',
    description: 'An alert text for selecting a maximum course grade greater than 100',
  },
  minGradeInvalid: {
    id: 'gradebook.GradesView.minCourseGradeInvalid',
    defaultMessage: 'Điểm tối thiểu của khóa học phải nằm trong khoảng từ 0 đến 100',
    description: 'An alert text for selecting a minimum course grade less than 0',
  },
});

export default messages;
