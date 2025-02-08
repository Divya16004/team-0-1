async function classifyWaste() {
    const fileInput = document.getElementById('upload').files[0];
    if (!fileInput) return alert('Please upload an image');
    const formData = new FormData();
    formData.append('image', fileInput);
    const response = await fetch('http://localhost:3000/classify', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Classified as: ${data.classification}`;
}

async function findRecyclingCenters() {
    const location = document.getElementById('locationInput').value;
    const response = await fetch(`http://localhost:3000/recycling-centers?location=${location}`);
    const data = await response.json();
    document.getElementById('centersList').innerHTML = data.map(center => 
        `<li>${center.name} - ${center.types.join(', ')} <a href="https://www.google.com/maps/search/?api=1&query=${center.geometry.location.lat},${center.geometry.location.lng}" target="_blank">Get Directions</a></li>`
    ).join('');
}
