export default function createNewItem() {
    let database = JSON.parse(localStorage.getItem('database'));

    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const id = Math.floor(Math.random() * 9999);
    const updatedAt = '';
    const createdAt = new Date().toDateString();

    const itemData = {
        name,
        quantity,
        price,
        category,
        description,
        updatedAt,
        createdAt,
        id
    }

    let valueVerifier = name !== '' && quantity !== '' && price !== '' && category !== '' && description !== '';

    if (database && valueVerifier) {
        database.push(itemData);
        localStorage.setItem('database', JSON.stringify(database));
    } else if (!database && valueVerifier) {
        database = [];
        database.push(itemData);
        localStorage.setItem('database', JSON.stringify(database));
    } else if (database && !valueVerifier) {
        window.alert('Todos os campos devem ser preenchidos');
    }
}