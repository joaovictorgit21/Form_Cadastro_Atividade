//Colocando os pontos automaticamente no input 000.000.000-00 
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

        if (!user || !tel || !date || !cpf || !bairro || !rua || !casa || !cep || !email || !pswrd || !pswrd2) {
                alert("Por Favor preencha todos os campos");
        } 
        if (pswrd != pswrd2) {
                alert("As senhas devem ser iguais");
        }
        if (pswrd == "123456789" && pswrd2 == "123456789") {
                alert("Senha muito óbvia")
        }
}