

const favorite_food = process.env.FAVORITE_FOOD;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Microservices rock! And my favorite food is ${favorite_food}`);
    await sleep(5000);
  }
}

main();
