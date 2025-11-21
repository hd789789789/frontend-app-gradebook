import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'gradebook.BulkManagementHistoryView.heading',
    defaultMessage: 'Lịch sử quản lý hàng loạt',
    description: 'Heading text for BulkManagement History Tab',
  },
  helpText: {
    id: 'gradebook.BulkManagementHistoryView',
    defaultMessage: 'Bên dưới là nhật ký các lần nhập điểm trước đó. Để tải xuống file CSV của sổ điểm và nhập điểm để ghi đè, hãy quay lại Sổ điểm. Lưu ý, sau khi nhập điểm, có thể mất vài giây để xử lý việc ghi đè.',
    description: 'Bulk Management History View help text',
  },
  successDialog: {
    id: 'gradebook.BulkManagementHistoryView.successDialog',
    defaultMessage: 'Đang xử lý CSV. Việc tải file lên có thể mất vài phút để hoàn thành.',
    description: 'Success Dialog message in BulkManagement Tab File Upload Form',
  },
});

export default messages;
