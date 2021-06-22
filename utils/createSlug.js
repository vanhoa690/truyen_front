export const createSlug = title => {
  return title
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[!)?$]+/gi, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+$/g, "")
}
