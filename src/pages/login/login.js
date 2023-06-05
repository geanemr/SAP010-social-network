

export default () => {
  const container = document.createElement('div');

  const templateLogin = /*html*/ `
  <section class="login-wrap">
  <img src="img/logo.png" id="logo" alt="Logo da ExploraAí">
  <h2>Entrar</h2>


<section class="register-box">
  <form>
  <div class="info-inputs">
  <input type="text" placeholder="E-mail" id ="email" />
  <input type="password" placeholder="Senha" id ="senha" />
</div>

  <nav>
  <button type="button" id="login-button" href="#">Entrar</button>
</nav>

  <div>
  Esqueceu a senha? <br>
  Não possui uma conta? <a id="register-button" href="#register">Cadastre-se</a>
  </div>

  <div>
  Ou <br>
  Entrar com:
  </div>

  <figure>
  <img src="img/assets/google.png" id="google" alt="Logo do Google" width = 100px> 
</figure>

  </form>
 </section>` /*inserir o login do google em forma de botao posteriormente */

  container.innerHTML = templateLogin;

  return container;

}
