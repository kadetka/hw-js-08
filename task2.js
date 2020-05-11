/*
Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners
*/

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo(obj) {
  const {
    name = "Unknown",
    info: {
      partners: [company1, company2],
    },
  } = organisation;
  console.log(`Name: ${name}`);
  console.log(`Partners: ${company1}, ${company2}`);
}

getInfo(organisation);
