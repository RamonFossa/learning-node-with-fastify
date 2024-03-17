interface User {
  birthYear: number
}

function calculateUserAge(user: User) {
  return new Date().getFullYear() - user.birthYear
}

calculateUserAge({ birthYear: 2001 })

// Runtime Type Checking -> JS

// Static Type Checking -> TS
