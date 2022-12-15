async function loadtest() {
  for (let i = 0; i < 1000; i++) {
    await fetch('http://localhost:4242/api/heroes');
    console.log('request %d', i);
  }
}

loadtest();
