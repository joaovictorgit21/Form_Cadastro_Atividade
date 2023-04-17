function Verificar()
{
        let input     = document.getElementsByTagName('input') ;
        let user      = document.getElementById('user').value;
        let tel       = document.getElementById('tel').value;
        let date      = document.getElementById('date').value;
        let cpf       = document.getElementById('cpf').value;
        let bairro    = document.getElementById('bairro').value;
        let rua       = document.getElementById('rua').value;
        let casa      = document.getElementById('casa').value;
        let cep       = document.getElementById('cep').value;
        let email     = document.getElementById('email').value;
        let pswrd     = document.getElementById('pswrd').value;
        let pswrd2    = document.getElementById('pswrd2').value;

        if (!input) {
                alert("Preencha todos os campos");
        } else if (pswrd != pswrd2) {
                alert("As senhas devem ser iguais");
        }
}