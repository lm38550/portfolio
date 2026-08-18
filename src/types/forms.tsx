export interface FormsType {
     control?: any;
     onSubmit : any;
     errors : any;
     isLoading: boolean;
     register : any;
     handleSubmit: any;
}

export interface SignupFormFielsType {
    email: string;
    password: string;
    how_did_know: string;
}

export interface LoginFormFielsType {
    email: string;
    password: string;
}

export interface ForgotPasswordFormFielsType {
    email: string;
    password: string;
}