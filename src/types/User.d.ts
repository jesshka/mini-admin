interface User {
  email: string,
  firstName: string,
  gender: string,
  lastName: string,
}

interface UserReducer {
  data: User[],
  totalUsers: number,
}