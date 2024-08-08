export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  // Collect all employees from every department into a single array
  for (const department in allEmployees) {
    if (Object.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  // Return an iterator over the array of employees
  return employeeList[Symbol.iterator]();
}
