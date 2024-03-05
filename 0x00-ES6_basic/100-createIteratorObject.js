export default function* createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  for (const department of departments) {
    yield* department;
  }
}
