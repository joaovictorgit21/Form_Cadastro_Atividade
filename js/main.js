function Verificar()
{
        let user                = document.getElementById('user').value;
        let tel                 = document.getElementById('tel').value;
        let date                = document.getElementById('date').value;
        let cpf                 = document.getElementById('Cpf').value;
        let bairro              = document.getElementById('bairro').value;
        let rua                 = document.getElementById('rua').value;
        let casa                = document.getElementById('casa').value;
        let cep                 = document.getElementById('cep').value;
        let city                = document.getElementById('city').value;
        let state               = document.getElementById('state').value;
        let email               = document.getElementById('email').value;
        let pswrd               = document.getElementById('pswrd').value;
        let psword_repeat       = document.getElementById('psword_repeat').value;

        if (!user || !tel || !date || !cpf || !bairro || !rua || !casa || !cep || !city|| !state || !add || !email || !pswrd || !psword_repeat) {
                alert("PorFavor preencher todos os campos!");
        } else  if (pswrd === psword_repeat) {
                alert("Cadastro concluido!");
        } else {
                alert("Senhas devem ser iguais!");
        }
}

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