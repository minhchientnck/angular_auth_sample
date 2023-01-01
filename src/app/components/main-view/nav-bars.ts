import {
  faUserTie,
  faUsers,
  faChalkboardTeacher,
  faAddressCard,
  faHistory,
  faFileUpload,
  faImages
} from '@fortawesome/free-solid-svg-icons';

const NavBars = [
  { href: 'personal', label: 'Personal', icon: faUserTie },
  { href: 'general_profile', label: 'General Profile', icon: faUsers },
  { href: 'leave_management', label: 'Leave Management', icon: faChalkboardTeacher },
  { href: 'contact', label: 'Contact', icon: faAddressCard },
  { href: 'job_history', label: 'Job History', icon: faHistory },
  { href: 'upload_document', label: 'Upload Document', icon: faFileUpload },
  { href: 'change_picture', label: 'Change Picture', icon: faImages },
];

export {
  NavBars,
};
