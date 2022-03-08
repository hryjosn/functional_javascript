function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {    
    return submittedUsers.every(submitUser =>
      goodUsers.some(goodUser => submitUser.id === goodUser.id)
    )
  }
}
// const checkUsersValid = goodUsers => submittedUsers =>
//   submittedUsers.every(submitUser =>
//     goodUsers.some(goodUser => submitUser.id === goodUser.id)
//   )

// checkUsersValid(goodUsers)(submittedUsers)
module.exports = checkUsersValid

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
  };
}
