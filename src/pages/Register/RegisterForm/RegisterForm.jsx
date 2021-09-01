import { useState } from 'react';
import { Button, IconButton, InputAdornment, Link, TextField, Typography } from "@material-ui/core";

import { useFormState } from 'utils/hooks/useFormState';
import { validatePassword } from 'utils/validation/user';

import { Visibility, VisibilityOff } from "@material-ui/icons";

import './RegisterForm.scss';

const RegisterForm = ({
    onSubmit,
    history,
}) => {
    const { formData, setFormValue, errors, isFormValid } = useFormState({
        username: { validate: v => !!v },
        password: { validate: validatePassword }
    });

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const submitClick = (event) => {
        event.preventDefault();
        onSubmit(formData.username, formData.password);
    }

    const onChangeUsername = (event) => {
        const { value } = event.target;
        setFormValue('username', value || null);
    };

    const onChangePassword = (event) => {
        const { value } = event.target;
        setFormValue('password', value);
    };

    return (
        <form onSubmit={submitClick} className="register-form">
            <TextField
                required
                className="item"
                error={errors.person}
                label="Username"
                variant="outlined"
                onChange={onChangeUsername}
            />
            <TextField
                id="outlined-end-adornment"
                className="item"
                value={formData.password || ""}
                variant="outlined"
                onChange={onChangePassword}
                type={showPassword ? "text" : "password"}
                label="Password"
                required
                error={errors.password}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggleShowPassword}
                                onMouseDown={toggleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>)
                }}
            />

            <Button
                color="primary"
                variant="contained"
                className='btn-register'
                onClick={submitClick}
                style={{ fontSize: "18px", margin: '15px 0' }}
                disabled={!isFormValid}
            >
                Register
            </Button>
            <Typography>
                {"Already registered? "}
                <Link style={{ color: '#0a7ab0' }} onClick={() => {
                    history.push("/login");
                }}
                >
                    Click here
                </Link>
            </Typography>
        </form>
    )
}

export default RegisterForm;
