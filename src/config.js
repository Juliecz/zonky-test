export default {
  url: `${(process.env.API_SERVER || 'http://localhost:3001') + '/loans/marketplace?fields=amount'}`,
  ratings: [
    { id: 'AAAAA', name: 'A**' },
    { id: 'AAAA', name: 'A*' },
    { id: 'AAA', name: 'A++' },
    { id: 'AA', name: 'A+' },
    { id: 'A', name: 'A' },
    { id: 'B', name: 'B' },
    { id: 'C', name: 'C' },
    { id: 'D', name: 'D' },
  ],
}
