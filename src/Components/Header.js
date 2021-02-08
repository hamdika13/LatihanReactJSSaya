import React, {Component} from 'react';


class Header extends Component {
    render() {
        return(
            <div>           
<div class="collapse" id="navbarToggleExternalContent">
  <div class="navbar navbar-light">
    <h5 class="text-white h4">Muhammad Mufti Hamdika</h5>
    <br></br>
    <span class="text-muted">@muhammad_mufti_99</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
            </div>
        )
    }
}

export default Header;