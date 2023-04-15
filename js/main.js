function validationForm()
{
        let input     = document.getElementsByTagName('input');
        let user      = document.getElementById('user');
        let tel       = document.getElementById('tel');
        let date      = document.getElementById('date');
        let cpf       = document.getElementById('cpf');
        let bairro    = document.getElementById('bairro');
        let rua       = document.getElementById('rua');
        let casa      = document.getElementById('casa');
        let cep       = document.getElementById('cep');
        let email     = document.getElementById('email');
        let pswrd     = document.getElementById('pswrd');
        let pswrd2    = document.getElementById('pswrd2');
        let btn       = document.getElementById('btn');

        if (pswrd != pswrd2) {
                alert("As senhas tem que ser iguais!")
        } else {
                if (pswrd.lenght < 8) {
                        alert("Necessário ter no minimo 8 digitos na senha!")
                } else {
                        if (cpf.lenght < 14) {
                                alert("CPF inválido!")
                        } else {
                                if (input == "") {
                                        alert("Preencha todos os campos!")
                                }
                        }
                }
        }
}