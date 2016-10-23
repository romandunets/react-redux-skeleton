export function fetchUsers() {
  return {
    type: "FETCH_USERS",
    payload: [
      { id: 1, username: "testuser1" },
      { id: 2, username: "testuser2" },
      { id: 3, username: "testuser3" }
    ]
  }
}
