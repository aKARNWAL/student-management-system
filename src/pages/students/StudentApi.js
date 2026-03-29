import  results  from "./StudentData";

export function getStudentsData({ payload, setRows}) {
  console.log(payload)
  fetch(`http://localhost:4000/students?pageSize=${payload?.pageSize}&pageNum=${payload?.page}&sortField=${payload?.sortfiled}&sortOrder=${payload?.sortOrder}`)
  .then(data => data.json())
  .then( res => {  setRows(res?.studentsData)
  })
  .catch( err => { 
    console.log(err)
    setRows([])
  })
}
