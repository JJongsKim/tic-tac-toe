const getColorByMarkColor = (markColor: string) => {
  switch (markColor) {
    case '파랑':
      return '#0A31FB';
    case '빨강':
      return '#DD2626';
    case '노랑':
      return '#F3D953';
    case '초록':
      return '#0BA825';
    default:
      return '#ccc';
  }
};

export default getColorByMarkColor;
