interface Location {
  city: string,
  country: string,
  state: string,
  street: string
}

interface LocationReducer {
  data: Location[],
  totalLocations: number,
}