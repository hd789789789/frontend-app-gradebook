import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  csvUploadLabel: {
    id: 'gradebook.BulkManagementHistoryView.csvUploadLabel',
    defaultMessage: 'Tải lên CSV điểm',
    description: 'A labeled button to upload a CSV containing course grades.',
  },
  importGradesBtnText: {
    id: 'gradebook.GradesView.importGradesBtnText',
    defaultMessage: 'Nhập điểm',
    description: 'A labeled button to import grades in the BulkManagement Tab File Upload Form',
  },
});

export default messages;
