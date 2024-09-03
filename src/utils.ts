export const classToType = (classAbr: string) => {
  switch (classAbr.toLowerCase()) {
    case 'tank':
    case 'pld':
    case 'war':
    case 'drk':
    case 'gnb':
      return 'tank';
    case 'healer':
    case 'whm':
    case 'sch':
    case 'ast':
    case 'sge':
      return 'healer';
    case 'melee':
    case 'mnk':
    case 'drg':
    case 'nin':
    case 'sam':
    case 'rpr':
    case 'vpr':
      return 'melee';
    case 'ranged':
    case 'brd':
    case 'mch':
    case 'dnc':
      return 'ranged';
    case 'magic':
    case 'blm':
    case 'smn':
    case 'rdm':
    case 'pct':
      return 'magic';
    default:
      return '';
  }
};
