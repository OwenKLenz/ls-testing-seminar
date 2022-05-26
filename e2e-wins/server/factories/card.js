
function generateCard(overrides = {}) {
  return {
    userName: 'Bob',
    jobTitle: 'Software Engineer',
    userImage: 'https://testing.com/test-image',
    description: 'Hi, Mom!',
    ...overrides,
  }
}

module.exports = generateCard
