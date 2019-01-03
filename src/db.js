const faker = require('faker');

const seed = (count)=> {
  const companies = [];
  while(companies.length < count){
    companies.push({ id: faker.random.number(), name: faker.company.companyName(), description: faker.company.catchPhrase()});
  }
  return companies;
}

export { seed };
