const uniqueId = prefix =>
  `${prefix}-${Math.random()
    .toString(36)
    .substr(1, 8)}`;

export default uniqueId;
