export function calcTileType(index, boardSize) {
  if (index > 0 && index < (boardSize - 1)) {
    return 'top';
  }
  if (index > (boardSize * boardSize - boardSize) && index < (boardSize * boardSize - 1)) {
    return 'bottom';
  }
  if (index === (boardSize * boardSize - boardSize)) {
    return 'bottom-left';
  }
  if (index === (boardSize * boardSize - 1)) {
    return 'bottom-right';
  }
  if (index === 0) {
    return 'top-left';
  }
  if (index === boardSize - 1) {
    return 'top-right';
  }
  if (index % boardSize === 0) {
    return 'left';
  }
  if ((index + 1) % boardSize === 0) {
    return 'right';
  }

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function arrOfIndexes(boardSize) {
  const area = [];
  let rowArr = [];
  for (let i = 0; i < boardSize ** 2; i++) {
    rowArr.push(i);
    if (rowArr.length === boardSize) {
      area.push(rowArr);
      rowArr = [];
    }
  }
  return area;
}


export function getMoveArea(currentPosition, distance, boardSize) {
  const columnIndex = currentPosition % boardSize;
  const rowIndex = Math.floor(currentPosition / boardSize);
  const availableIndexArr = [];
  const area = arrOfIndexes(boardSize);

  for (let i = 1; i <= distance; i += 1) {
    // one column to the right
    let availableColumnIndex = columnIndex + i;
    if (availableColumnIndex < boardSize) {
      availableIndexArr.push(area[rowIndex][availableColumnIndex]);
    }

    // one line down
    let availableRowIndex = rowIndex + i;
    if (availableRowIndex < boardSize) {
      availableIndexArr.push(area[availableRowIndex][columnIndex]);
    }

    // diagonal down/right
    if ((availableRowIndex < boardSize) && (availableColumnIndex < boardSize)) {
      availableIndexArr.push(area[availableRowIndex][availableColumnIndex]);
    }

    // one column to the left
    availableColumnIndex = columnIndex - i;
    if (availableColumnIndex >= 0) {
      availableIndexArr.push(area[rowIndex][availableColumnIndex]);
    }

    // diagonal down/left
    if ((availableColumnIndex >= 0) && (availableRowIndex < boardSize)) {
      availableIndexArr.push(area[availableRowIndex][availableColumnIndex]);
    }

    // one line up
    availableRowIndex = rowIndex - i;
    if (availableRowIndex >= 0) {
      availableIndexArr.push(area[availableRowIndex][columnIndex]);
    }

    // diagonal up/left
    if ((availableRowIndex >= 0) && (availableColumnIndex >= 0)) {
      availableIndexArr.push(area[availableRowIndex][availableColumnIndex]);
    }

    // diagonal up/right
    availableColumnIndex = columnIndex + i;
    if ((availableColumnIndex < boardSize) && (availableRowIndex >= 0)) {
      availableIndexArr.push(area[availableRowIndex][availableColumnIndex]);
    }
  }
  return availableIndexArr;
}

export function getAttackArea(currentPosition, distance, boardSize) {
  const columnIndex = currentPosition % boardSize;
  const rowIndex = Math.floor(currentPosition / boardSize);
  const area = arrOfIndexes(boardSize)

  let availableIndexArr = [];
  let upwardAttack = rowIndex - distance;
  let downAttack = rowIndex + distance;
  let leftAttack = columnIndex - distance;
  let rightAttack = columnIndex + distance;

  if (upwardAttack < 0) {
    upwardAttack = 0;
  } else if (downAttack > boardSize - 1) {
    downAttack = boardSize - 1;
  } else if (leftAttack < 0) {
    leftAttack = 0;
  } else if (rightAttack > boardSize - 1) {
    rightAttack = boardSize - 1;
  }

  for (let i = upwardAttack; i <= downAttack; i++) {
    for (let j = leftAttack; j <= rightAttack; j++) {
      availableIndexArr.push(area[i][j]);
    }
  }

  availableIndexArr = availableIndexArr.filter((element) => element !== currentPosition);
  availableIndexArr = availableIndexArr.filter((element) => element >= 0 && element <= 63);

  return availableIndexArr;
}
