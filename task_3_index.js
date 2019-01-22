// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandName = 'ADD';
    var commandName = 'REMOVE_PHONE';
    var commandName = 'SHOW';
    var phoneBook = [];
    var command = 'ADD Ivan 555-10-01,555-10-03';
        var commandArray = command.split(' ');
        commandName = commandArray[0];
    
    // Формируем функцию для добавления контакта
    if (commandName === 'ADD') {
    return addContact(command);
}
    //Обработка команды ADD, в том числе и для добавления в Phonebook последующих контактов, отличных от первого
        function addContact() {
        var newContactName = commandArray[1];
        var newContactPhone = commandArray[2].split(', ');//Пытаюсь сделать массив в массиве для добавления в него пула номеров
        phoneBook.push(newContactName, newContactPhone);

    /* Определяем приходит ли в качестве ADD уже имеющееся имя,
    но с новым телефоном*/ 
        if (phoneBook.hasOwnProperty(newContactName)) {
            phoneBook.push(newContactPhone);// Номер ,по идее, должен записаться в массив уже имеющихся номеров в качестве последнего
        }
    // Если придёт новый контакт, то он должен записаться после имеющегося в Phonebook имени и телефона
    }
};
