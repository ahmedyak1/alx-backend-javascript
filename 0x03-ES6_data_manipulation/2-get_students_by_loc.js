/**
 * Filters a list of students by location and returns the students from the specified city
 * {Array} students - The list of students to filter
 * {string} city - The city to filter students by
 * {Array} The list of students from the specified city
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    // Filter the students by city and return the result
    return students.filter((student) => student.location === city);
  }
  // If students is not an array, return an empty array
  return [];
}
