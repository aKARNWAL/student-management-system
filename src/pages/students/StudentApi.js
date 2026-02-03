import  results  from "./StudentData";

export function getStudentData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(results), 4000);
  });
}
