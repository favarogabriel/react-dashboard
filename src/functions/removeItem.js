export default function removeItem(identificator) {
    let database = JSON.parse(localStorage.getItem('database'));
    let newDatabase = database.filter((el) => el.id !== identificator);
    let confirmation = confirm('Você tem certeza que quer excluir esse item?');

    if (confirmation) {
        localStorage.setItem('database', JSON.stringify(newDatabase));
    }
}