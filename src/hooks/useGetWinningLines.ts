const useGetWinningLines = (boardSize: number) => {
  const lines: number[][] = [];

  // 가로
  for (let i = 0; i < boardSize; i++) {
    const horizontalLine: number[] = [];

    for (let j = 0; j < boardSize; j++) {
      horizontalLine.push(i * boardSize + j);
    }
    lines.push(horizontalLine);
  }

  // 세로
  for (let i = 0; i < boardSize; i++) {
    const verticalLine: number[] = [];

    for (let j = 0; j < boardSize; j++) {
      verticalLine.push(j * boardSize + i);
    }
    lines.push(verticalLine);
  }

  // 대각선 (왼 > 오 방향)
  const diagonalLine1: number[] = [];

  for (let i = 0; i < boardSize; i++) {
    diagonalLine1.push(i * (boardSize + 1));
  }
  lines.push(diagonalLine1);

  // 대각선 (오 > 왼 방향)
  const diagonalLine2: number[] = [];

  for (let i = 1; i <= boardSize; i++) {
    diagonalLine2.push(i * (boardSize - 1));
  }
  lines.push(diagonalLine2);

  return lines;
};

export default useGetWinningLines;
