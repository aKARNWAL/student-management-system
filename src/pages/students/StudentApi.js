import  results  from "./StudentData";

export function getStudentData() {
  return new Promise((resolve) => {
    resolve(results);
  });
}
