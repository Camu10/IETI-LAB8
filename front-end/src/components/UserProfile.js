import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './UserProfile.css';


export class UserProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email:"",password:"",name:"",confirmPass:""};
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
    }


    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Registration</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="fullName">Full Name</InputLabel>
                                <Input id="fullName" name="fullName" onChange={this.handleName} autoComplete="fullName" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" onChange={this.handleEmail} autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    onChange={this.handlePassword}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="passwordConfirm"
                                    type="password"
                                    id="passwordConfirm"
                                    onChange={this.handlePasswordConfirm}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Save
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handlePasswordConfirm(e) {
        this.setState({
            passwordConfirm: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.password !== this.state.passwordConfirm){
            alert("Las contraseñas ingresadas no coinciden.");
            return;
        }if (!this.state.email.length ||!this.state.password.length ||!this.state.name.length ||!this.state.passwordConfirm.length) {
            alert("Llene todos los campos");
            return;
        }else{
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('password', this.state.password);
            document.location.href = "/home";
        }

    }
}