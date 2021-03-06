import React from "react";

const Register=({onRouteChange})=>{
    return(
        <article className="pa4 br4 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-black">
            <main className="pa4 white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={()=>onRouteChange('home')} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f3 dib white" type="submit" value="Register"/>
                    </div>
                </div>
            </main>
        </article>
    );
}

export default Register;