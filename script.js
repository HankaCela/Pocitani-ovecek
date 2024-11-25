const ovciJmena = [
    'Bětuška', 'Cína', 'Dolly', 'Heidy', 'Líza', 
    'Belinda', 'Celia', 'Elvíra', 'Karla', 'Otýlie', 
    'Škraboška', 'Kopretinka', 'Berta', 'Růženka', 
    'Bobinka', 'Žofka', 'Dášenka', 'Vlnka', 'Květuše', 
    'Pampeliška'
  ];
  
  // Najdeme kontejner, do kterého budeme text přidávat
  const oveckyContainer = document.getElementById('ovecky');
  
  // Pro každý prvek z prvních 10 oveček vytvoříme větu a přidáme ji na stránku
  ovciJmena.slice(0, 10).forEach((jmeno, index) => {
    const veta = `Ovečka ${jmeno} jako ${index + 1}. přeskočila přes plot.`;
    
    // Vytvoříme nový HTML prvek <p> pro každou větu
    const odstavec = document.createElement('p');
    odstavec.textContent = veta;
    
    // Přidáme odstavec do kontejneru na stránce
    oveckyContainer.appendChild(odstavec);
  });