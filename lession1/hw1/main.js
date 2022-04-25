document.getElementById('input-form').addEventListener('submit', savePhone);

function savePhone(e) {
    let inputAuthor = document.getElementById('input-author').value;
    let inputPhone = document.getElementById('input-phone').value;

    if (!inputAuthor || !inputPhone) {
        alert('Vui lòng nhập thông tin');
        return false;
    }
    if (inputAuthor.length > 18) {
        alert('Tên quá dài');
        return false;
    }
    if (!inputPhone.match(/^[-+]?[0-9]+$/)) {
        alert('Vui lòng nhập số điện thoại')
        return false;
    }

    let contact = {
        name: inputAuthor,
        mobile: inputPhone
    }

    // // local
    // localStorage.setItem('test', "hello")
    // console.log(localStorage.getItem('test'));

    if (localStorage.getItem('phonebook') === null) {
        let phonebook = [];
        phonebook.push(contact);
        localStorage.setItem('phonebook', JSON.stringify(phonebook))
    } else {
        let phonebook = JSON.parse(localStorage.getItem('phonebook'));
        phonebook.push(contact);
        localStorage.setItem('phonebook', JSON.stringify(phonebook))
    }

    document.getElementById('input-form').reset()

    fetchPhoneBook()
    e.preventDefault();
}

function fetchPhoneBook() {
    let phonebook = JSON.parse(localStorage.getItem('phonebook'));

    let listPhoneBook = document.getElementById('list-phone');
    listPhoneBook.innerHTML = '';
    for (let i = 0; i < phonebook.length; i++) {
        let name = phonebook[i].name;
        let mobile = phonebook[i].mobile;
        listPhoneBook.innerHTML += `
            <div class="list-phone">
                <div class="name">${name}</div>
                <div class="phone">${mobile}</div>
            </div>
        `
    }
}