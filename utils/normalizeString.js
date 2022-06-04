const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u0301]/g, "")
    .toLowerCase();
};

export default normalizeString;
