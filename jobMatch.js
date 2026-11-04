function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error("Both minSalary and maxSalary are required.");
  }

  const tenPercent = candidate.minSalary * 0.1;
  const adjustedMin = candidate.minSalary - tenPercent;

  if (adjustedMin <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}
