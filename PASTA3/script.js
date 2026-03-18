const loginBtn = document.getElementById("loginBtn");
const menu = document.getElementById("loginMenu");

const telaLogin = document.getElementById("telaLogin");
const telaSenha = document.getElementById("telaSenha");
const telaCadastro = document.getElementById("telaCadastro");

const voltarBtn = document.getElementById("voltarBtn");

const esqueceu = document.getElementById("esqueceu");
const cadastrar = document.getElementById("cadastrar");

const entrarBtn = document.getElementById("entrarBtn");
const cadastrarBtn = document.getElementById("cadastrarBtn");
const alterarBtn = document.getElementById("alterarBtn");


const loginEmail = document.getElementById("loginEmail");
const loginSenha = document.getElementById("loginSenha");

const cadEmail = document.getElementById("cadEmail");
const senhaCadastro = document.getElementById("senhaCadastro");
const novaSenha = document.getElementById("novaSenha");


// erro visual
function mostrarErro(input){
  input.classList.remove("erro");
  void input.offsetWidth; // reiniciar animação
  input.classList.add("erro");

  setTimeout(() => input.classList.remove("erro"), 500);
}

// abrir menu
loginBtn.onclick = (e) => {
  e.stopPropagation();
  menu.style.display = "block";
  loginBtn.classList.add("ativo");

  voltarBtn.style.display = "none";

  telaLogin.style.display = "flex";
  telaSenha.style.display = "none";
  telaCadastro.style.display = "none";

  loginEmail.value = "";
  loginSenha.value = "";
};

// fechar menu
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== loginBtn){
    menu.style.display = "none";
    loginBtn.classList.remove("ativo");
  }
});

// trocar telas
esqueceu.onclick = () => {
  telaLogin.style.display = "none";
  telaSenha.style.display = "flex";
  voltarBtn.style.display = "block";
};

cadastrar.onclick = () => {
  telaLogin.style.display = "none";
  telaCadastro.style.display = "flex";
  voltarBtn.style.display = "block";

  document.getElementById("regrasSenha").style.display = "block";
};

voltarBtn.onclick = () => {
  telaSenha.style.display = "none";
  telaCadastro.style.display = "none";
  telaLogin.style.display = "flex";
  voltarBtn.style.display = "none";

  document.getElementById("regrasSenha").style.display = "none";
};
// botão voltar
voltarBtn.onclick = () => {
  telaSenha.style.display = "none";
  telaCadastro.style.display = "none";
  telaLogin.style.display = "flex";
  voltarBtn.style.display = "none";
};

// validação senha
function senhaValida(s){
  if (s.length < 6) return false;
  if (!/[A-Z]/.test(s)) return false;
  if (!/[a-z]/.test(s)) return false;
  if (!/[0-9]/.test(s)) return false;
  return true;
}

// cadastro
cadastrarBtn.onclick = () => {
  const emailSalvo = localStorage.getItem("email");

  if (!cadEmail.value || !senhaCadastro.value){
    mostrarErro(cadEmail);
    mostrarErro(senhaCadastro);
    return;
  }

  if (cadEmail.value === emailSalvo){
    mostrarErro(cadEmail);
    return;
  }

  if (!senhaValida(senhaCadastro.value)){
    mostrarErro(senhaCadastro);
    return;
  }

  localStorage.setItem("email", cadEmail.value);
  localStorage.setItem("senha", senhaCadastro.value);

  alert("Cadastro realizado!");

  telaCadastro.style.display = "none";
  telaLogin.style.display = "flex";
  voltarBtn.style.display = "none";
};

// login
entrarBtn.onclick = () => {
  const emailSalvo = localStorage.getItem("email");
  const senhaSalva = localStorage.getItem("senha");

  if (loginEmail.value === emailSalvo && loginSenha.value === senhaSalva){
    alert("Login realizado!");

    menu.style.display = "none";
    loginBtn.classList.remove("ativo");

    loginEmail.value = "";
    loginSenha.value = "";

  } else {
    mostrarErro(loginEmail);
    mostrarErro(loginSenha);
  }
};

// alterar senha
alterarBtn.onclick = () => {
  if (!novaSenha.value){
    mostrarErro(novaSenha);
    return;
  }

  if (!senhaValida(novaSenha.value)){
    alert("Senha inválida");
    mostrarErro(novaSenha);
    return;
  }

  localStorage.setItem("senha", novaSenha.value);

  alert("Senha alterada!");

  telaSenha.style.display = "none";
  telaLogin.style.display = "flex";
  voltarBtn.style.display = "none";
};