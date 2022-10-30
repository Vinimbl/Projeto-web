import React from 'react';

function  Usuario(){
    return(
        <div class="panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">CADASTRO DE CLIENTE</h3>
        </div>
        
        <div class="panel-body">
            
            <form action="#" class="form-horizontal">
                <fieldset>
                    <legend>Dados Pessoais</legend>
                <hr></hr>
                    <div class="form-group">
                        <label for="nome" class="col-sm-2 control-label">Nome</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="nome" required placeholder="Nome e sobrenome"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <legend>Sexo</legend>
                        <hr></hr>
                        <div class="col-sm-4">
                            <label class="radio-inline">
                                <input type="radio" checked name="sexo" id="feminino" value="FEMININO"/> Feminino
                            </label>

                            <label class="radio-inline">
                                <input type="radio" name="sexo" id="masculino" value="MASCULINO"/> Masculino
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="data-nascimento" class="col-sm-2 control-label">Data de Nascimento</label>
                        <div class="col-sm-4">
                            <input type="date" class="form-control" id="data-nascimento"/>
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>Contato</legend>
                    <hr></hr>
                    <div class="form-group">
                        <label for="email" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-4">
                            <input type="email" class="form-control" id="email" required placeholder="seuemail@domínio.com"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="telefone" class="col-sm-2 control-label">Telefone</label>
                        <div class="col-sm-4">
                            <input type="tel" class="form-control" id="telefone" required placeholder="(XX) XXXXX-XXXX" />
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>Endereço</legend>
                    <hr></hr>
                    <div class="form-group">
                        <label for="logradouro" class="col-sm-2 control-label">Logradouro</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="logradouro" required placeholder="Cidade onde Mora"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="uf" class="col-sm-2 control-label">UF</label>
                        <div class="col-sm-4">
                            <select class="form-control" name="uf" id="uf">
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AM">AM</option>
                                <option value="AP">AP</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MG">MG</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="PA">PA</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="PR">PR</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="RS">RS</option>
                                <option value="SC">SC</option>
                                <option value="SE">SE</option>
                                <option value="SP">SP</option>
                                <option value="TO">TO</option>
                            </select>
                            </div>
                            </div>    

                
                <button type="submit" class="gravar" onclick="Gravar();" value="Gravar" required>
                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Gravar
                </button>
                </fieldset>
            </form>
        </div>
    </div>
);
}

export default Usuario;