export const API_Key = "AIzaSyDNlGCzWW4Y3sKaz3fWNV5p-k7Ov6aJxF4";

// AIzaSyD_iBgNvUVlq7xD6sQK5_KfAf6iaOESkrM
export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
