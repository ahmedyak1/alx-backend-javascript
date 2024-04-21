export default function createReportObject(employeesList) {
  // Return an object with the allEmployees 
  // number of department
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      // Return no of keys in the allEmployees object       
      return Object.keys(employeesList).length;
    },
  };
}
