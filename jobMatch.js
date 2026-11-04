function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error("Both minSalary and maxSalary are required.");
  }
}
