import { useState } from "react";


const Register = () => {
    const [mail, SetMail] = useState("");
    const [password, SetPassword] = useState("");
    const [repassword, SetRepassword] = useState("");
    const [error, SetError] = useState(false);
    const [errorPass, SetErrorPass] = useState(false);
    const [errorRePass, SetErrorRePass] = useState(false);


    const validarDatos = (e) => {
        e.preventDefault()
        if ( !mail.trim() || !password.trim() || !repassword.trim()) {
            SetError(true);
            return;
        }
        SetError(false);
        if (password.length < 6) {
            SetErrorPass(true);
            return;
        }
        SetErrorPass(false);
        if (password != repassword) {
            SetErrorRePass(true)
        } else {
            alert("Éxito, todos los datos son correctos!")
        };


        SetErrorRePass(false);
        SetMail('');
        SetPassword('');
        SetRepassword('');
    }
    
    return (
        <>
            <form className="formulario" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', height:'71vh'}} action="" onSubmit={validarDatos}>
            {error ? <p className="error">Todos los campos son obligatiorios</p> : null}
                <div className="form-group" style={{width: '80vw', marginBottom: '20px'}}>
                    <label>Email</label>
                    <input className="form-control" type="email" name="mail" onChange={(e) => SetMail(e.target.value)} value={mail}/>
                </div>
                <div className="form-group" style={{width: '80vw', marginBottom: '20px'}}>
                {errorPass ? <p className="error">Contraseña debe contener 6 carácteres como mínimo</p> : null}
                    <label>Contraseña</label>
                    <input className="form-control" type="password" name="password" onChange={(e) => SetPassword(e.target.value)} value={password}/>
                </div>
                <div className="form-group" style={{width: '80vw', marginBottom: '20px'}}>
                {errorRePass ? <p className="error">Contraseñas deben ser iguales</p> : null}
                    <label>Confirmar Contraseña</label>
                    <input className="form-control" type="password" name="repassword" onChange={(e) => SetRepassword(e.target.value)} value={repassword}/>
                </div>
                <button className="btn btn-primary" style={{margin:'10px'}} type="submit">Enviar</button>
            </form>        
        </>
    )
}

export default Register;

