import  results  from "./StudentData";

export function getStudentsData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(results), 4000);
  });
}
