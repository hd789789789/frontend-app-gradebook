import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  filterStepHeading: {
    id: 'gradebook.GradesView.filterHeading',
    defaultMessage: 'Bước 1: Lọc báo cáo điểm',
    description: 'Filter controls container heading string',
  },
  gradebookStepHeading: {
    id: 'gradebook.GradesView.gradebookStepHeading',
    defaultMessage: 'Bước 2: Xem hoặc chỉnh sửa điểm cá nhân',
    description: 'Alert text for invalid minimum course grade',
  },
  mastersHint: {
    id: 'gradebook.GradesView.mastersHint',
    defaultMessage: "chỉ khả dụng cho người học trong lộ trình Thạc sĩ",
    description: 'Masters feature availability hint on Grades Tab',
  },
});

export default messages;
