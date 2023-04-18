function mascara(i){
   
        var v = i.value;
        
        if(isNaN(v[v.length-1])) {
           i.value = v.substring(0, v.length-1);
           return;
        }
        
        i.setAttribute("maxlength", "14");
        if (v.length == 3 || v.length == 7) i.value += ".";
        if (v.length == 11) i.value += "-";
     
}

function Verificar()
{
        let user      = document.getElementById('user')
        let tel       = document.getElementById('tel')
        let date      = document.getElementById('date')
        let cpf       = document.getElementById('cpf')
        let bairro    = document.getElementById('bairro')
        let rua       = document.getElementById('rua')
        let casa      = document.getElementById('casa')
        let cep       = document.getElementById('cep')
        let email     = document.getElementById('email')
        let pswrd     = document.getElementById('pswrd')
        let pswrd2    = document.getElementById('pswrd2')

        if (!user || !tel || !date || !cpf || !bairro || !rua || !casa || !cep || !email || !pswrd || !pswrd2) {
                alert("Preencha todos os campos");
        } 
        else if (pswrd != pswrd2) {
                alert("As senhas devem ser iguais");
        }
        else if (pswrd == "123456789") {
                alert("Senha muito óbvia")
        }
}

