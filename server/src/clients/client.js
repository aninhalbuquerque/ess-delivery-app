class Client {
    constructor(client) {
        this.id = client.id;
        this.name = client.name;
        this.cpf = client.cpf;
        this.phone = client.phone;
        this.email = client.email;
        this.password = client.password;
        this.pay_method = "";
        this.addresses = [];
    }
}
exports.Client = Client;