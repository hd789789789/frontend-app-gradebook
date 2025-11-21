import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'gradebook.GradesView.InterventionsReport.title',
    defaultMessage: 'Báo cáo can thiệp',
    description: 'The title for the Intervention report subsection',
  },
  description: {
    id: 'gradebook.GradesView.InterventionsReport.description',
    defaultMessage: 'Cần tìm những người học có thể đang tụt hậu? Tải xuống báo cáo can thiệp để có được các số liệu tương tác như số lần thử phần học và số lượt truy cập.',
    description: 'The description for the Intervention report subsection',
  },
  downloadBtn: {
    id: 'gradebook.GradesView.InterventionsReport.downloadBtn',
    defaultMessage: 'Tải xuống báo cáo can thiệp',
    description: 'The labeled button to download the Intervention report from the Grades View',
  },
});

export default messages;
